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

// const verifyUserToken = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) {
//     return res.status(401).json({ error: "Unauthorized: Missing token." });
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.username = decoded.userid.username;
//     next();
//   } catch (error) {
//     res.status(401).json({ error: "Unauthorized: Invalid token." });
//   }
// };

// module.exports = { verifyUserToken };
