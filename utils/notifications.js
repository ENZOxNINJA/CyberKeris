export function createNotification(title, detail) {
  return {
    id: `${Date.now()}`,
    title,
    detail,
    createdAt: new Date().toISOString(),
  };
}
