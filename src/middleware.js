import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// export const middleware = async (req) => {
//   console.log(req);
//   // const token = await req.headers.authorization?.split(" ")[1];
//   // if (!token) {
//   //   return NextResponse.json({ message: "Unauthorized: Missing token." });
//   // }
//   // try {
//   //   const decoded = jwt.verify(token, "note_app");
//   //   req.username = decoded.userid.username;
//   //   NextResponse.next();
//   // } catch (error) {
//   //   return NextResponse.json({ message: "Unauthorized: Invalid token." });
//   // }
// };

// export const config = {
//   matcher: "/about",
// };

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  console.log(request.headers);
  // return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about",
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
