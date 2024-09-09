"use client";

import Image from "next/image";
import Google from "../form/google.svg";
import Github from "../form/github.svg";
import { oauthSigninAction } from "@/app/actions/oauth-signin-action";

type OauthsSignButtonProps = {
  signup?: boolean;
};

export const OauthSignInButton = ({ signup }: OauthsSignButtonProps) => {
  const clickHandler = async (provider: "google" | "github") => {
    await oauthSigninAction(provider);
  };

  return (
    <div className="w-full flex justify-center items-center text-white">
      <button
        className="w-full justify-center items-center flex gap-3 hover:bg-gray-700 py-2 rounded-md transition hover:transition-all"
        onClick={clickHandler.bind(null, "google")}
      >
        <Image src={Google} width={20} height={20} alt="hello" />
        <span>Google</span>
      </button>
      <button
        className="w-full justify-center items-center flex gap-3 hover:bg-gray-700 py-2 rounded-md transition hover:transition-all"
        onClick={clickHandler.bind(null, "github")}
      >
        <Image src={Github} width={20} height={20} alt="hello" />
        <span>Github</span>
      </button>
    </div>
  );
};
