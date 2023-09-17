"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

function ClassCard() {
  return (
    <div>
      <Link href="/course">
        <div className="card card-bordered w-72 h-48 bg-base-100 shadow-lg">
          <div className="card-body items-center justify-center flex">
            <h1 className="card-title text-2xl text-center">Card title!</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ClassCard;
