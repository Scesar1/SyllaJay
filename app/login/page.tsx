import React from "react";
import LoginCard from "../components/LoginCard";

function LoginPage() {
  
  return (
    <main className="bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#B3B3F1] to-[#FFFFFF] flex min-h-screen flex-col items-center justify-between p-24">
      <LoginCard/>
    </main>
  );
}

export default LoginPage;
