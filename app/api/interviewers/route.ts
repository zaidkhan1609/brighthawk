import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  const formData = await req.formData();
  const client = await clientPromise;
  const db = client.db("recrix_prod");

  const file = formData.get("cv") as File | null;

  await db.collection("interviewers_applications").insertOne({
    name: formData.get("name"),
    email: formData.get("email"),
    skills: formData.get("skills"),
    experience: formData.get("experience"),
    linkedin: formData.get("linkedin"),
    notes: formData.get("notes"),
    cvName: file?.name || null,
    createdAt: new Date(),
  });

  return NextResponse.json({ success: true });
}
