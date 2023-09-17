import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { courseCode, courseName, professor, courseTime } =
    await request.body.json();

  try {
    const course = await prisma.course.upsert({
      where: { courseCode },
      update: {
        courseName,
        professor,
        courseTime,
      },
      create: {
        courseCode,
        courseName,
        professor,
        courseTime,
      },
    });

    return new NextResponse(
      JSON.stringify({ courseCode, courseName, professor, courseTime }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Course already exists" }),
      {
        status: 400,
      }
    );
  }
}
