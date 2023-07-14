import { NextResponse, NextRequest } from "next/server";

export function middleware() {
  const response = NextResponse.next();
  const time = new Date();
  const now = time.getTime();
  response.cookies.set({
    name: "hi",
    value: "akljsdfjaskljdlfkasd",
  });
  return response;
}
