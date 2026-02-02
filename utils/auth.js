// Utility helpers for authentication-related logic.

/**
 * Validates whether a provided token looks like a JWT.
 * @param {string} token - Raw token value.
 * @returns {boolean} True when the token appears valid.
 */
export function isJwt(token) {
  // Guard against empty or non-string values.
  if (typeof token !== "string" || token.trim().length === 0) {
    return false;
  }

  // JWTs contain three dot-delimited segments.
  const segments = token.split(".");
  return segments.length === 3 && segments.every((segment) => segment.length > 0);
}

/**
 * Safely extracts the role from a decoded auth payload.
 * @param {object} payload - Decoded JWT payload.
 * @returns {string} User role or "guest" fallback.
 */
export function getUserRole(payload) {
  // Ensure payload is an object before accessing properties.
  if (!payload || typeof payload !== "object") {
    return "guest";
  }

  return payload.role || "guest";
}

// Example input/output:
// isJwt("abc.def.ghi") -> true
// getUserRole({ role: "admin" }) -> "admin"
