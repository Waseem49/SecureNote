import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = await request.cookies.get("auth_token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}
export const config = {
  // matcher: ["/", "/api/:path*"],
  matcher: ["/"],
};
