"use client";
import { useEffect, useState } from "react";
import ThemeSwitchBtn from "./ThemeSwitchBtn";
import Link from "next/link";
import { useSession } from "next-auth/react";
import AddCourseBtn from "../components/AddCourseBtn";

function NavBar() {
  const { data: session } = useSession();

  const [searchVisible, setSearchVisible] = useState(false);

  const searchSwitch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div className="navbar bg-base-100 mt-1">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle mr-5 shadow border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64"
          >
            <li>
              <Link href="/new">Add Syllabus</Link>
            </li>
            <li>
              <Link href="/schedule">Schedule</Link>
            </li>
            {session ? (
              <li>
                <Link href="/profile">Profile</Link>
              </li>
            ) : (
              <li>
                <Link href="/login">Log In or Sign Up</Link>
              </li>
            )}
          </ul>
        </div>
        <AddCourseBtn></AddCourseBtn>
      </div>
      <div className="navbar-center">
        <Link href="/" className="btn btn-ghost normal-case">
          <img src="/logo.svg" className="w-40" alt="logo" />
        </Link>
      </div>
      <div className="navbar-end gap-2">
        <div className="container">
          <div className="searchbox">
            <input
              type="text"
              className="searchbox__input"
              placeholder="Search..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="searchbox_icon h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ThemeSwitchBtn />
      </div>
    </div>
  );
}

export default NavBar;
