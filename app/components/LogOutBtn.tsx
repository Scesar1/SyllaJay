"use client";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import React from "react";
type btnProps = {
  session: Session | null;
};
export default function LogOutBtn({ session }: btnProps) {
  const router = useRouter();
  return (
    <div className="flex justify-center mt-5">
      {session ? (
        <button
          className="btn-error p-4 text-xl rounded-box"
          onClick={() => {
            signOut({ callbackUrl: "/" });
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className="btn-error p-4 text-xl rounded-box"
          onClick={() => signIn("google", { callbackUrl: "/profile" })}
        >
          Log In
        </button>
      )}
    </div>
  );
}
