import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({ message: "Auth endpoint", body });
}

export async function DELETE() {
  return NextResponse.json({ message: "Logged out" });
}
