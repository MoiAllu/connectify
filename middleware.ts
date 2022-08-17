import { NextResponse } from "next/server";

const signedinPages = [
  "/",
  "/messages",
  "/profile",
  "/settings",
  "/notifications",
];

export default function middleware(req: any) {
  if (signedinPages.includes(req.nextUrl.pathname)) {
    const token = req.cookies.get("CONNECTIFY_ACCESS_TOKEN");
    // const token ="123"
    console.log(token);
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/signin";
      return NextResponse.rewrite(url);
      // return NextResponse.redirect('/signin')
    }
  }
}
