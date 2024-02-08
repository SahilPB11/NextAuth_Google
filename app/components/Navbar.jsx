"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import React from "react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav className="bg-black fixed p-4 ">
      <div className="container mx-auto">
        <div className="flex justify-between h-screen flex-col">
          <div className="one">
            <li className="mx-4 mt-5">
              <Link href="/" className="text-white font-bold">
                Home
              </Link>
            </li>
            <li className="mx-4 mt-5">
              <Link href="/dashboard" className="text-white font-bold">
                DashBoard
              </Link>
            </li>
          </div>
          {/* ---------------- */}
          <div className="auth">
            {!session ? (
              <>
                <li className="mx-4 mt-5">
                  <Link href="/login" className="text-white font-bold">
                    Login
                  </Link>
                </li>
                <li className="mx-4 mb-[2rem]">
                  <Link href="/register" className="text-white font-bold">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <p className="mb-4 text-white font-bold">
                  {session?.user?.email}
                </p>

                <li>
                  <button
                    className="p-2 px-5 mb-[2rem] bg-white rounded"
                    onClick={() => {
                      signOut();
                    }}
                  >
                    LogOut
                  </button>
                </li>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
