import mongoose from "mongoose";
import userModal from "@/app/models/usermodel";
import connectDB from "@/app/utils/db";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const POST = async (req) => {
  try {
    const { email, password } = await req.json();
    console.log(email, password);
    const User = await userModal.findOne({ email: email });
    console.log(User);
    if (User !== null) {
      await connectDB();
      const passwordmatched = bcryptjs.compareSync(password, User.password);
      if (passwordmatched) {
        var token = jwt.sign({ foo: "bar" }, "note_app");
        console.log(token);
        return NextResponse.json(
          { message: "Login Successfully", token: token },
          { status: 201 }
        );
      } else {
        return NextResponse.json(
          { message: "Wrong Credential" },
          { status: 201 }
        );
      }
    } else {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
  } catch (error) {
    console.error(error.message);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
};
