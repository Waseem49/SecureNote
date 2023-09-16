import mongoose from "mongoose";
import userModal from "@/app/models/usermodel";
import connectDB from "@/app/utils/db";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json();
    const existingUser = await userModal.findOne({ email: email });
    console.log(existingUser);
    if (existingUser === null) {
      await connectDB();
      const hashpassword = bcryptjs.hashSync(password, 5);
      const user = await userModal.create({
        name,
        email,
        password: hashpassword,
      });
      return NextResponse.json(
        { message: "Registered Successfully", user: user },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: "Email alredy Taken" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error(error.message);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
};
