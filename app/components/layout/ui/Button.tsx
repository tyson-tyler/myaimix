import Link from "next/link";
import React from "react";

const Button = ({ label }: { label: string }) => {
  return (
    <Link href={"/auth/signup"}>
      <button className="relative group px-6 py-3 bg-purple-600 text-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-purple-500/50">
        <span className="absolute inset-0 bg-purple-400 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 rounded-lg"></span>
        <div className="relative flex items-center space-x-2">
          <svg
            className="w-5 h-5 text-white transition-transform duration-300 ease-in-out transform group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <path d="M0 14.016l9.216 6.912 18.784-16.928-14.592 20.064 10.592 7.936 8-32zM8 32l6.016-4-6.016-4v8z"></path>
          </svg>
          <span className="relative z-10">{label}</span>
        </div>
      </button>
    </Link>
  );
};

export default Button;
