// Corresponds to HashMap<String, String> in Rust for headers
export type HttpHeader = Record<string, string>;

// Corresponds to HttpRequestOptions struct in Rust
export interface HttpRequestOptions {
    url: string;
    method: string; // Keeping as string to align with Rust's current String type.
                    // Could be refined with an enum if method choices are fixed on TS side.
    headers?: HttpHeader;
    body?: string; // Corresponds to Option<String>
}

// Corresponds to HttpResponseData struct in Rust
export interface HttpResponseData {
    status: number; // Corresponds to u16
    headers: HttpHeader;
    body: string;
    url: string;
}

// Corresponds to RequestResult struct in Rust
export interface RequestResult {
    final_response?: HttpResponseData; // Corresponds to Option<HttpResponseData>
    redirect_responses: HttpResponseData[]; // Corresponds to Vec<HttpResponseData>
    error?: string; // Corresponds to Option<String>
}
