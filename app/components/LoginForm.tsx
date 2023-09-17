"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

import React from "react";

function LoginForm() {
  return (
    <div>
      <div className="title">
        <h1 className="text-gray-800 text-4xl font-bold text-center py-4">
          Log In
        </h1>
        <p className="mx-auto text-gray-400 text-center">
          Create an account to save your preferences and access your dashboard.
        </p>
      </div>
      <div className="input-button">
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/profile" })}
          className="w-full border py-3 flex rounded-md justify-center gap-2 hover:bg-gray-200"
        >
          Sign In with Google{" "}
          <Image src={"/google.svg"} width="20" height={20} alt="google" />
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
