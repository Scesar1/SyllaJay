"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

import React from "react";

function LoginForm() {
  return (
    <div>
      <div className="input-button flex justify-center">
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/profile" })}
          className="bg-gray border py-3 px-10 flex rounded-md justify-center align-items-center gap-2 hover:bg-gray-200 "
        >
          Sign In with Google{" "}
          <Image src={"/google.svg"} width="20" height={20} alt="google" />
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
