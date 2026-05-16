import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    ok: true,
    service: "luma-studio",
    time: new Date().toISOString(),
  });
}
