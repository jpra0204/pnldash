import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    earnings: 340.5,
    spend: 642.39,
    sales: 574.34,
  });
}
