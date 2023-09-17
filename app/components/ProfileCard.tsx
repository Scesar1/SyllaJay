"use client";
import { useEffect, useState } from "react";

function ProfileCard() {
  return (
    <div className="card w-96 h-96 bg-base-100 shadow-lg">
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="card-body">
        <h1 className="card-title justify-center">My name</h1>
        <h2 className="">My email: jskjglkjfkj@gmail.com</h2>
        <h2 className="">Change password</h2>
      </div>
    </div>
  );
}

export default ProfileCard;