export type Role = "admin" | "user";

export type BaseEntity = {
  id: string;
  createdAt?: string;
  updatedAt?: string;
};

export type User = BaseEntity & {
  name: string;
  email: string;
  role: Role;
};
