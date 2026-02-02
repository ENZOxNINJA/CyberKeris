// Email utility helpers for building consistent message payloads.

/**
 * Creates a standardized email object.
 * @param {string} subject - Email subject line.
 * @param {string} body - Email body content.
 * @param {string} recipient - Target recipient email address.
 * @returns {{subject: string, body: string, recipient: string}}
 */
export function buildEmail(subject, body, recipient) {
  // Validate required parameters and provide safe fallbacks.
  return {
    subject: typeof subject === "string" ? subject.trim() : "(no subject)",
    body: typeof body === "string" ? body.trim() : "",
    recipient: typeof recipient === "string" ? recipient.trim() : "unknown"
  };
}

// Example input/output:
// buildEmail("Hello", "Welcome", "user@example.com") -> {subject:"Hello", body:"Welcome", recipient:"user@example.com"}
