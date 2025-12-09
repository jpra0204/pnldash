import type { UserModel } from "./user.model";
import { createUser, listUsers } from "./user.repository";
import { validateCreateUser } from "./user.schema";

export async function getUsers() {
  return listUsers();
}

export async function addUser(input: {
  name: string;
  email: string;
  role?: "admin" | "user";
}): Promise<UserModel> {
  const payload = validateCreateUser(input);
  const user: UserModel = {
    id: crypto.randomUUID(),
    name: payload.name,
    email: payload.email,
    role: payload.role,
  };

  return createUser(user);
}
