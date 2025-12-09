export function hashPassword(password: string) {
  return `hashed-${password}`;
}

export function verifyPassword(password: string, hash: string) {
  return hash === hashPassword(password);
}
