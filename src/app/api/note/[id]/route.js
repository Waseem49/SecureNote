import noteModal from "@/app/models/notemodel";
import connectDB from "@/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req, { params: { id } }) => {
  try {
    await connectDB();
    const note = await noteModal.findById(id);
    return NextResponse.json(
      { data: note, message: "Your data" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error.message);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (req, { params: { id } }) => {
  try {
    await connectDB();
    const reqBody = await req.json();
    const updatedNote = await noteModal.findByIdAndUpdate(id, reqBody, {
      new: true,
    });
    if (!updatedNote) {
      return NextResponse.error("Note not found", 404);
    }
    return NextResponse.json(
      { message: "Updated Successfully", data: updatedNote },
      { status: 200 }
    );
  } catch (error) {
    console.error(error.message);
    return NextResponse.error("Internal Server Error", 500);
  }
};

export const DELETE = async (req, { params: { id } }) => {
  try {
    await connectDB();
    const deletedNote = await noteModal.findByIdAndDelete(id);
    if (!deletedNote) {
      return NextResponse.error("Note not found", 404);
    }
    return NextResponse.json(
      { message: "Deleted Successfully", data: deletedNote },
      { status: 200 }
    );
  } catch (error) {
    console.error(error.message);
    return NextResponse.error("Internal Server Error", 500);
  }
};
