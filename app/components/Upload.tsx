"use client";
import { useEffect, useState } from "react";

function Upload() {
  return (
    <div className="flex items-center justify-center">
      <input
        type="file"
        className="file-input file-input-bordered file-input-primary file-input-lg w-full rounded-box"
      />
    </div>
  );
}

export default Upload;
