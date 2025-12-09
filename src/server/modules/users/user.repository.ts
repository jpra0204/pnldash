import type { UserModel } from "./user.model";

const fakeUsers: UserModel[] = [
  { id: "1", name: "Jasmine Doe", email: "jasmine@example.com", role: "admin" },
  { id: "2", name: "Marcus Lee", email: "marcus@example.com", role: "user" },
];

export async function listUsers(): Promise<UserModel[]> {
  return fakeUsers;
}

export async function createUser(user: UserModel): Promise<UserModel> {
  fakeUsers.push(user);
  return user;
}
