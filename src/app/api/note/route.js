import noteModal from "@/app/models/notemodel";
import connectDB from "@/app/utils/db";
import { verify } from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDB();
    const reqbody = await req.json();
    const token = await req.cookies.get("auth_token")?.value;
    const { name } = await verify(token, process.env.SECRET_KEY);
    const data = { note: reqbody.note, username: name };
    const note = await noteModal.create(data);

    return NextResponse.json(
      { data: note, message: "Created Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error.message);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
};

export const GET = async (req) => {
  try {
    await connectDB();
    const token = await req.cookies.get("auth_token")?.value;
    const { name } = await verify(token, process.env.SECRET_KEY);
    const notes = await noteModal.find({ username: name });
    return NextResponse.json(
      { data: notes, message: "Your data" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error.message);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
};
