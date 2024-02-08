import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import React from "react";


const DashBoard = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="bg-black">
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-green-400 border p-4">
          User successfully logged in
        </h1>
      </div>
    </div>
  );
};

export default DashBoard;
