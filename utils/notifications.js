// Notification helpers for formatting and prioritization.

/**
 * Labels notifications with a priority tag.
 * @param {string} message - Notification message text.
 * @param {"low"|"medium"|"high"} level - Priority level.
 * @returns {string} Labeled notification.
 */
export function labelNotification(message, level = "low") {
  // Normalize message input.
  const safeMessage = typeof message === "string" ? message.trim() : "";
  const safeLevel = ["low", "medium", "high"].includes(level) ? level : "low";
  return `[${safeLevel.toUpperCase()}] ${safeMessage}`.trim();
}

// Example input/output:
// labelNotification("Patch window", "high") -> "[HIGH] Patch window"
