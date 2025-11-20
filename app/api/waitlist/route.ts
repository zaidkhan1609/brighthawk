import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  const data = await req.json();
  const client = await clientPromise;
  const db = client.db("recrix_prod");

  await db.collection("waitlist_users").insertOne({
    ...data,
    createdAt: new Date(),
  });

  return NextResponse.json({ success: true });
}
