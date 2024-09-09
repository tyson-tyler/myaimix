import SignUpForm from "@/app/components/form/Signupform";
import Image from "next/image";
import React from "react";
import Hello from "../../components/layout/ai/Hello.webp";

const Page = () => {
  return (
    <div className="flex flex-col justify-between lg:flex-row h-screen">
      {/* Form Container */}
      <div className="w-full flex items-center justify-center p-6 lg:w-1/2">
        <SignUpForm />
      </div>

      {/* Image Container */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src={Hello}
          alt="hello"
          layout="fill" // Ensure the image fills the container
          objectFit="cover" // Ensure the image covers the area without distortion
          priority={true} // Optional, for faster loading
        />
      </div>
    </div>
  );
};

export default Page;
