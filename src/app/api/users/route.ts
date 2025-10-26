export const runtime = "node.js";

import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  const stmt = db.prepare("SELECT * FROM users ORDER BY id DEXC");
  const users = stmt.all();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const { name, email } = await req.json();
  const stmt = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");
  const result = stmt.run(name, email);
  return NextResponse.json({ id: result.lastInsertRowId, name, email });
}

export async function PUT(req: Request) {
  const { id, name, email } = await req.json();
  const stmt = db.prepare("UPDATE users SET name = ?, email = ? WHERE id = ?");
  stmt.run(name, email, id);
  return NextResponse.json({ message: "User updated succcessfully" });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  const stmt = db.prepare("DELETE FROM users WHERE id = ?");
  stmt.run(id);
  return NextResponse.json({ message: "User delete successfully" });
}
