import mongoose from "mongoose";
import userModal from "@/app/models/usermodel";
import connectDB from "@/app/utils/db";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const POST = async (req) => {
  try {
    const { email, password } = await req.json();
    await connectDB();
    const User = await userModal.findOne({ email: email }).maxTimeMS(30000);
    if (User !== null) {
      const passwordmatched = bcryptjs.compareSync(password, User.password);
      if (passwordmatched) {
        var token = jwt.sign(
          { _id: User._id, name: User.name },
          process.env.SECRET_KEY
        );
        const response = NextResponse.json(
          { message: "Login Successfully", token: token },
          { status: 201 }
        );

        response.cookies.set("auth_token", token, { expiresIn: "1d" });
        return response;
      } else {
        return NextResponse.json({ message: "Wrong Credential" });
      }
    } else {
      return NextResponse.json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error.message);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
};
