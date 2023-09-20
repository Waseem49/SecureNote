import userModal from "@/app/models/usermodel";
import connectDB from "@/app/utils/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDB();
    const response = NextResponse.json(
      { message: "Logout Successfully" },
      { status: 201 }
    );
    response.cookies.set("auth_token", "");
    return response;
  } catch (error) {}
};
