import { signOutUserAction } from "@/app/actions/signoutaction";
import { auth } from "@/app/auth";

import { LogoutIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

export default function SignOut() {
  const clickHandler = async () => {
    await signOutUserAction();
    window.location.href = "/";
  };

  return (
    <>
      <button
        onClick={clickHandler}
        className="flex justify-center mb-3 items-center md:left-7 absolute bottom-1 space-y-1"
      >
        <LogoutIcon className="w-5 h-5 text-black dark:text-white transition transform hover:scale-105" />
        <span className="text-black ml-2 dark:text-white hidden lg:flex text-sm">
          Log out
        </span>
      </button>
    </>
  );
}
