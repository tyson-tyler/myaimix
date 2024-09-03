import Image from "next/image";
import React from "react";
import Hello from "./check.svg";

const Check = () => {
  return (
    <div>
      <Image src={Hello} width={25} height={25} alt="hello" />
    </div>
  );
};

export default Check;
