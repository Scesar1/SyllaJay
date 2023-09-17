import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
export async function GET(Request: any) {
  const session = await getServerSession(authOptions);
  if (session) {
    // Signed in
    console.log("Session", JSON.stringify(session, null, 2));
    return new NextResponse("Welcome authenticated user", {
      status: 200,
    });
  } else {
    // Not Signed in
    return new NextResponse("Unauthorized access detected", {
      status: 401,
    });
  }
} 
