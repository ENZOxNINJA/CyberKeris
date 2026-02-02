// Search helpers for filtering lists.

/**
 * Filters a list of strings by a query.
 * @param {string[]} items - Items to search.
 * @param {string} query - Search query.
 * @returns {string[]} Filtered list.
 */
export function filterByQuery(items, query) {
  // Validate inputs and normalize for case-insensitive matching.
  if (!Array.isArray(items)) {
    return [];
  }

  const normalizedQuery = typeof query === "string" ? query.trim().toLowerCase() : "";
  if (normalizedQuery.length === 0) {
    return items;
  }

  return items.filter((item) =>
    typeof item === "string" ? item.toLowerCase().includes(normalizedQuery) : false
  );
}

// Example input/output:
// filterByQuery(["Alpha", "Beta"], "be") -> ["Beta"]
