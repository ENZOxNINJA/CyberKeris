// Cloud storage utility helpers for file metadata.

/**
 * Formats a file record for display.
 * @param {{name?: string, size?: string}} file - Raw file data.
 * @returns {string} Readable file label.
 */
export function formatFileLabel(file) {
  // Guard against missing file data.
  if (!file || typeof file !== "object") {
    return "Unnamed file";
  }

  const name = file.name || "Unnamed file";
  const size = file.size || "Unknown size";
  return `${name} (${size})`;
}

// Example input/output:
// formatFileLabel({name:"report.pdf", size:"1 MB"}) -> "report.pdf (1 MB)"
