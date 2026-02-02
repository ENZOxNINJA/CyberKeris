export function getUser() {
  return { name: "Guest", role: "visitor" };
}

export function hasRole(requiredRole, user = getUser()) {
  const hierarchy = ["visitor", "user", "staff", "admin"];
  return hierarchy.indexOf(user.role) >= hierarchy.indexOf(requiredRole);
}
