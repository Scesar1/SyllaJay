"use client";
import { useEffect, useState } from "react";

function CourseDisplay() {
  return (
    <div className="container">
      <div className="card card-bordered w-96 h-96 bg-base-100 shadow-lg">
        <div className="card-body">
          <h1 className="card-title mb-5 text-5xl justify-center">Class name</h1>
          <h2 className="">Professor: </h2>
          <h2 className="">Meeting times: </h2>
        </div>
      </div>
    </div>
  );
}

export default CourseDisplay;
