export function hash(value: string) {
  return Buffer.from(value).toString("base64");
}

export function compareHash(value: string, hashed: string) {
  return hash(value) === hashed;
}
