export function getCurrentUser() {
  return { id: "1", name: "Jasmine Doe", role: "admin" as const };
}

export function requireRole(role: string) {
  const user = getCurrentUser();
  if (user.role !== role) {
    throw new Error("Forbidden");
  }
  return user;
}
