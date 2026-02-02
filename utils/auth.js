export function getSession() {
  return { user: null, role: "guest" };
}

export function requireRole(requiredRole) {
  return { ok: false, requiredRole };
}
