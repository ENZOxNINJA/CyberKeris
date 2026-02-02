// Shared API helpers for assembling request metadata.

/**
 * Builds a simple request header set for JSON APIs.
 * @param {string} [token] - Optional bearer token.
 * @returns {Record<string, string>} Header map.
 */
export function buildJsonHeaders(token) {
  const headers = {
    "Content-Type": "application/json"
  };

  // Attach the authorization header only when a token is provided.
  if (typeof token === "string" && token.trim().length > 0) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

/**
 * Normalizes API errors into readable strings.
 * @param {unknown} error - An error value thrown by fetch or other APIs.
 * @returns {string} Human-friendly error message.
 */
export function formatApiError(error) {
  if (error instanceof Error) {
    return error.message;
  }

  return "Unexpected API error";
}

// Example input/output:
// buildJsonHeaders("token123") -> {"Content-Type":"application/json","Authorization":"Bearer token123"}
// formatApiError(new Error("Network")) -> "Network"
