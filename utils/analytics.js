// Analytics helpers for computing lightweight metrics.

/**
 * Computes a completion percentage from two counts.
 * @param {number} completed - Completed count.
 * @param {number} total - Total count.
 * @returns {number} Completion percentage rounded to whole number.
 */
export function calculateCompletionRate(completed, total) {
  // Ensure inputs are numbers and prevent divide-by-zero errors.
  if (typeof completed !== "number" || typeof total !== "number" || total <= 0) {
    return 0;
  }

  return Math.round((completed / total) * 100);
}

// Example input/output:
// calculateCompletionRate(45, 50) -> 90
