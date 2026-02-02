export function formatEmailPreview(subject, body) {
  return {
    subject,
    preview: `${body.slice(0, 80)}...`,
  };
}
