import { NextResponse } from "next/server";

export function middleware() {
  const response = NextResponse.next();
  response.cookies.set({
    name: "hi",
    value: "akljsdfjaskljdlfkasd",
    expires: 200000,
  });
  return response;
}
