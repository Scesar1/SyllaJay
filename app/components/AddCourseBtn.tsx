"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

function AddCourseBtn() {
  return (
    <div>
      <Link href="/add_course">
        <button 
          className="btn rounded-box bg-white shadow border-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>{" "}
          Add Course
        </button>
      </Link>
    </div>
  );
}

export default AddCourseBtn;
