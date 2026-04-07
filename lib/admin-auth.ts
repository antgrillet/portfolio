import { createHash } from "crypto";
import { NextRequest } from "next/server";

export function isAuthenticated(req: NextRequest): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) return false;

  const token = req.cookies.get("admin_session")?.value;
  if (!token) return false;

  const expected = createHash("sha256")
    .update(`${adminPassword}:${process.env.VERCEL_TOKEN || ""}`)
    .digest("hex");

  return token === expected;
}
