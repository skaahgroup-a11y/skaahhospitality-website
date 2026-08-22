import { NextResponse } from "next/server";

// Health check probed by the deploy pipeline before the symlink flip
// (docs/08 section 6).
export async function GET() {
  return NextResponse.json({ status: "ok", time: new Date().toISOString() });
}
