export type CreateUserInput = {
  name: string;
  email: string;
  role?: "admin" | "user";
};

export function validateCreateUser(input: CreateUserInput) {
  if (!input.name) throw new Error("Name is required");
  if (!input.email) throw new Error("Email is required");
  return { ...input, role: input.role ?? "user" } as const;
}
