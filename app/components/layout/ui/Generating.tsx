import Image from "next/image";
import React from "react";
import Logo from "../design/loading.svg";

const Generating = ({ className }: any) => {
  return (
    <div
      className={`flex items-center lg:max-w-[30rem] justify-center h-[3.5rem] bg-gray-300/40 px-6 rounded-full ${
        className || ""
      } text-base`}
    >
      <Image
        className="w-5 h-5  text-white text-center flex justify-center items-center mr-2 animate-spin"
        src={Logo}
        alt="jell"
        width={30}
        height={30}
      />
      <span className="bg-gradient-to-r font-semibold from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
        AI is Generation
      </span>
    </div>
  );
};

export default Generating;
