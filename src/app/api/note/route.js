import noteModal from "@/app/models/notemodel";
import connectDB from "@/app/utils/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDB();
    const reqbody = await req.json();
    const note = await noteModal.create(reqbody);
    return NextResponse.json(
      { data: note, message: "Created Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const GET = async (req) => {
  try {
    await connectDB();
    const notes = await noteModal.find();
    return NextResponse.json(
      { data: notes, message: "Your data" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error.message);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
};
