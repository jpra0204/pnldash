import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string;
    };
  }

  interface User {
    id: string;
    email: string;
    name?: string;
  }
}
