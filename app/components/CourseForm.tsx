"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function CourseDisplay() {
  const courseCode = useRef<HTMLInputElement>(null);
  const courseName = useRef<HTMLInputElement>(null);
  const professor = useRef<HTMLInputElement>(null);
  const courseTime = useRef<HTMLInputElement>(null);
  const router = useRouter();
  /**
   *
   * Create post request to course route handler
   */
  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
      const res = await fetch("/api/course", {
        body: JSON.stringify({
          courseName: courseName,
          courseCode: courseCode,
          professor: professor,
          courseTime: courseTime,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
    } catch (err) {
      console.error(err);
    } finally {
      router.push("/");
    }
  }

  return (
    <div className="container flex">
      <div className="card flex card-bordered w-96 h-96 bg-base-100 shadow-lg">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              ref={courseCode}
              placeholder="Course Code"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="text"
              ref={courseName}
              placeholder="Course Title"
              className="input input-bordered input-secondary mt-3 w-full max-w-xs"
            />
            <input
              type="text"
              ref={professor}
              placeholder="Professor"
              className="input input-bordered input-secondary w-full mt-3 max-w-xs"
            />
            <input
              type="text"
              ref={courseTime}
              placeholder="Times"
              className="input input-bordered input-secondary w-full mt-3 max-w-xs"
            />
            <button className="btn mt-3 btn-lg btn-primary rounded-box">
              Add Course
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CourseDisplay;
