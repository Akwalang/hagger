use serde::{Serialize, Deserialize};
use reqwest::header::{HeaderMap, HeaderName, HeaderValue};
use reqwest::redirect::Policy;
use reqwest::{Client, Method, Response as ReqwestResponse}; // Renamed to avoid conflict if any
use std::collections::HashMap;
use std::str::FromStr; // For Method::from_str
use std::sync::{Arc, Mutex}; // For collecting redirect responses
// Structs are already defined in this file, so no need for:
// use crate::http_executor::{HttpRequestOptions, HttpResponseData, RequestResult}; 

// Helper function to convert reqwest::HeaderMap to HashMap<String, String>
fn convert_reqwest_headers_to_map(headers: &HeaderMap) -> HashMap<String, String> {
    let mut map = HashMap::new();
    for (name, value) in headers.iter() {
        // Attempt to convert header value to string; potentially lossy for binary headers
        let value_str = match value.to_str() {
            Ok(v) => v.to_string(),
            Err(_) => String::from("[Binary header value not representable as UTF-8]"),
        };
        // If header already exists, append new value with a comma (common practice)
        map.entry(name.as_str().to_string())
            .and_modify(|e| {
                e.push_str(", ");
                e.push_str(&value_str);
            })
            .or_insert(value_str);
    }
    map
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct HttpRequestOptions {
    pub url: String,
    pub method: String,
    pub headers: Option<HashMap<String, String>>,
    pub body: Option<String>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct HttpResponseData {
    pub status: u16,
    pub headers: HashMap<String, String>,
    pub body: String,
    pub url: String, // To track the URL for each response, especially redirects
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct RequestResult {
    pub final_response: Option<HttpResponseData>, // Option to handle cases where the request itself fails
    pub redirect_responses: Vec<HttpResponseData>,
    pub error: Option<String>, // This field is part of the struct, but the command should return Result<RequestResult, String>
}


#[tauri::command]
pub async fn execute_request(options: HttpRequestOptions) -> Result<RequestResult, String> {
    let redirect_responses_collector = Arc::new(Mutex::new(Vec::new()));
    let policy_redirect_collector = Arc::clone(&redirect_responses_collector);

    let client_builder = Client::builder()
        .redirect(Policy::custom(move |attempt| {
            let response = attempt.response();
            let status = response.status().as_u16();
            let headers = convert_reqwest_headers_to_map(response.headers());
            let current_url = response.url().to_string();
            
            let http_response_data = HttpResponseData {
                status,
                headers,
                body: String::from("[Redirect response body not captured]"), // Body not captured for redirects
                url: current_url,
            };
            
            // Attempt to lock the mutex and push data. If locking fails, it's a concurrent access issue.
            // For this example, we'll proceed without pushing if lock fails, but in a real app, might log or handle error.
            if let Ok(mut guard) = policy_redirect_collector.lock() {
                guard.push(http_response_data);
            }
            // Else: Failed to lock mutex, redirect data for this attempt might be lost.
            // Consider how critical this is. For now, we just follow the redirect.

            attempt.follow() 
        }));
    
    let client = client_builder.build().map_err(|e| format!("Failed to build HTTP client: {}", e))?;

    let method = Method::from_str(&options.method.to_uppercase())
        .map_err(|_| format!("Invalid HTTP method: {}", options.method))?;

    let mut request_builder = client.request(method, &options.url);

    if let Some(headers_map) = options.headers {
        for (key, value) in headers_map {
            let header_name = HeaderName::from_str(&key)
                .map_err(|e| format!("Invalid header name '{}': {}", key, e))?;
            let header_value = HeaderValue::from_str(&value)
                .map_err(|e| format!("Invalid header value for '{}': '{}': {}", key, value, e))?;
            request_builder = request_builder.header(header_name, header_value);
        }
    }

    if let Some(body) = options.body {
        request_builder = request_builder.body(body);
    }

    match request_builder.send().await {
        Ok(response) => {
            let final_url = response.url().to_string();
            let status = response.status().as_u16();
            let headers = convert_reqwest_headers_to_map(response.headers());
            
            // Read the body as text
            let body = response.text().await.map_err(|e| format!("Failed to read response body: {}", e))?;

            let final_response_data = HttpResponseData {
                status,
                headers,
                body,
                url: final_url,
            };

            let redirects = redirect_responses_collector.lock()
                .map_err(|_| "Failed to lock redirect data mutex".to_string())?
                .clone();

            Ok(RequestResult {
                final_response: Some(final_response_data),
                redirect_responses: redirects,
                error: None, // No operational error if we reached here
            })
        }
        Err(e) => {
            // Network or other operational error from reqwest
            let error_message = format!("Request failed: {}", e);
            // Attempt to get redirect data even if the final request failed
             let redirects = redirect_responses_collector.lock()
                .map_err(|_| "Failed to lock redirect data mutex after request error".to_string())?
                .clone();
            
            // Return error via Err variant of the main function
            // Also, populate RequestResult with the error and any redirects captured before failure
             Err(format!("{}. Partial redirects captured: {}", error_message, redirects.len()))
            // Or, if we want to return a RequestResult with error field populated:
            // Ok(RequestResult {
            //     final_response: None,
            //     redirect_responses: redirects,
            //     error: Some(error_message),
            // })
            // For this subtask, returning Err(String) for command errors is preferred.
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*; // To access HttpRequestOptions, execute_request etc.
    use tokio; // For the async runtime
               // use std::collections::HashMap; // Potentially for headers

    #[tokio::test]
    async fn test_simple_get() {
        let options = HttpRequestOptions {
            url: "https://httpbin.org/get".to_string(),
            method: "GET".to_string(),
            headers: None,
            body: None,
        };

        let result = execute_request(options).await;

        assert!(result.is_ok(), "Request failed: {:?}", result.err());
        let request_result = result.as_ref().unwrap();
        assert!(request_result.error.is_none(), "Error field should be None: {:?}", request_result.error);
        assert!(request_result.final_response.is_some(), "Final response should be Some");

        let final_response = request_result.final_response.as_ref().unwrap();
        assert_eq!(final_response.status, 200, "Status code should be 200");
        assert!(!final_response.body.is_empty(), "Response body should not be empty");
        // Optionally, parse with serde_json and check structure
        // For example, check if it contains "url": "https://httpbin.org/get"
        assert!(final_response.body.contains("\"url\": \"https://httpbin.org/get\""), "Body does not contain expected content");
        assert_eq!(final_response.url, "https://httpbin.org/get", "Final URL should be correct");
    }

    #[tokio::test]
    async fn test_redirect_handling() {
        let options = HttpRequestOptions {
            // This URL redirects 2 times and then lands on /get
            url: "https://httpbin.org/absolute-redirect/2".to_string(), 
            method: "GET".to_string(),
            headers: None,
            body: None,
        };

        let result = execute_request(options).await;

        assert!(result.is_ok(), "Request failed: {:?}", result.err());
        let request_result = result.as_ref().unwrap();
        assert!(request_result.error.is_none(), "Error field should be None: {:?}", request_result.error);
        assert!(request_result.final_response.is_some(), "Final response should be Some");

        let final_response = request_result.final_response.as_ref().unwrap();
        assert_eq!(final_response.status, 200, "Final status code should be 200 (after redirects)");
        // The final URL after redirects should be the target of the last redirect, often /get for httpbin redirects
        assert_eq!(final_response.url, "https://httpbin.org/get", "Final URL after redirects is incorrect");


        assert_eq!(request_result.redirect_responses.len(), 2, "Should have captured 2 redirect responses");

        // Check first redirect response (from /absolute-redirect/2 to /absolute-redirect/1)
        let redirect1 = &request_result.redirect_responses[0];
        assert_eq!(redirect1.status, 302, "First redirect status should be 302");
        assert_eq!(redirect1.url, "https://httpbin.org/absolute-redirect/2", "URL of first redirect response");
        assert!(redirect1.headers.contains_key("location") && redirect1.headers.get("location").unwrap().contains("/absolute-redirect/1"), "Location header for first redirect");


        // Check second redirect response (from /absolute-redirect/1 to /get)
        let redirect2 = &request_result.redirect_responses[1];
        assert_eq!(redirect2.status, 302, "Second redirect status should be 302");
        assert_eq!(redirect2.url, "https://httpbin.org/absolute-redirect/1", "URL of second redirect response");
        assert!(redirect2.headers.contains_key("location") && redirect2.headers.get("location").unwrap().contains("/get"), "Location header for second redirect");
    }

    #[tokio::test]
    async fn test_invalid_url_error() {
        let options = HttpRequestOptions {
            url: "invalid-url-that-will-not-resolve".to_string(),
            method: "GET".to_string(),
            headers: None,
            body: None,
        };

        let result = execute_request(options).await;

        assert!(result.is_err(), "Request should have failed for an invalid URL");
        // Example error message: "Request failed: error sending request for url (invalid-url-that-will-not-resolve): error trying to connect: dns error: failed to lookup address information: Name or service not known. Partial redirects captured: 0"
        // The exact error message can vary based on OS and network stack.
        // We check if it contains relevant parts.
        let error_message = result.err().unwrap();
        assert!(error_message.contains("Request failed"), "Error message should indicate a request failure");
        // It's good to also check that the error message contains the URL that failed, if possible
        assert!(error_message.contains("invalid-url-that-will-not-resolve"), "Error message should contain the invalid URL");
    }
}
