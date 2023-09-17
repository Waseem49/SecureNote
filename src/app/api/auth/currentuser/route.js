import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const GET = async (req) => {
  const token = await req.cookies.get("auth_token")?.value;
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return NextResponse.json(decoded);
  } catch (error) {
    console.log(error);
  }
  //
};
