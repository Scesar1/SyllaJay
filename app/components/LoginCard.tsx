import React from "react";
import LoginForm from "./LoginForm";

function LoginCard() {
  return (
    <div className="card w-[22rem] bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-actions justify-center">
          <h1 className="text-gray-800 text-4xl font-bold text-center py-4  w-full">
            Log In
          </h1>
          <p className="mx-auto text-gray-400 text-center mb-12">
            Create an account to take control of your schedule
          </p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
