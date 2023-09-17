import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(request) {
  const token = await request.cookies.get("auth_token")?.value;
  if (token) {
    try {
      // const decoded = await jwt.verify(token, process.env.SECRET_KEY);
      // console.log(decoded);
      // return NextResponse.rewrite(new URL("/", request.url));
    } catch (error) {
      console.log(error);
    }
  } else {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}
export const config = {
  // matcher: ["/", "/api/:path*"],
  matcher: ["/"],
};
