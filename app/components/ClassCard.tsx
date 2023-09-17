"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Course } from "@prisma/client";

type courseProps = {
  course: Course;
};
function ClassCard({ course }: courseProps) {
  console.log(course);
  return (
    <div>
      <Link href={`course/${course.id}`}>
        <div className="card card-bordered w-72 h-48 bg-base-100 shadow-lg">
          <div className="card-body items-center justify-center flex">
            <h1 className="card-title text-2xl text-center">
              {course.courseName}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ClassCard;
