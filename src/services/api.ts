import { invoke } from '@tauri-apps/api/core';
import type { HttpRequestOptions, RequestResult } from '@/global/types/http';

export async function invokeExecuteRequest(options: HttpRequestOptions): Promise<RequestResult> {
  try {
    // The command name 'execute_request' must match the one registered in Rust.
    // The payload { options } must match the argument name in the Rust command.
    const result = await invoke<RequestResult>('execute_request', { options });
    return result;
  } catch (error) {
    // The 'error' caught here is typically the string message from Rust's Err(String)
    // or an error object from Tauri if the command couldn't be invoked.
    let errorMessage = 'Unknown error occurred during invoke';
    if (typeof error === 'string') {
      errorMessage = error;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    // Structure the error to match RequestResult for consistency.
    return {
      // final_response is optional, so it can be omitted
      redirect_responses: [], // No redirects if the command itself failed at this level
      error: errorMessage,
    };
  }
}
