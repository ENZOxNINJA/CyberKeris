export function filterResults(items, query) {
  if (!query) return items;
  const normalized = query.toLowerCase();
  return items.filter((item) => JSON.stringify(item).toLowerCase().includes(normalized));
}
