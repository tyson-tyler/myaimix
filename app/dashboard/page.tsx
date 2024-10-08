import React from "react";

import { auth } from "../auth";
import Image from "next/image";

export default async function page() {
  const session = await auth();

  return (
    <div className="  ">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
        Welcome to the Dashboard
      </h1>
      {/* <Image src={session?.user?.image} alt="hello" width={20} height={20} /> */}
      {/* <h1>{session?.user?.email}</h1> */}
      <Image
        src={`${session?.user?.image || "https://cdn.waifu.im/6929.jpg"}`}
        width={40}
        height={40}
        alt="hello"
        className="rounded-md w-10 h-10 absolute top-3 object-cover right-16 lg:right-20"
      />
      {/* Content goes here */}
    </div>
  );
}
