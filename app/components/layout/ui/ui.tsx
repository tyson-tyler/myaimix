"use client";
import React from "react";

const Buttons = ({ label }: { label: string }) => {
  return (
    <button className="relative group px-6 py-3 border-2 border-gray-600 bg-transparent text-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-500">
      <span className="absolute inset-0 bg-green-400 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 rounded-lg"></span>
      <div className="relative flex items-center space-x-2">
        <svg
          className="w-6 h-6 text-white transition-transform duration-500 ease-in-out transform group-hover:rotate-45 group-hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C7.582 2 4 3.92 4 6.45v11.1C4 20.08 7.582 22 12 22s8-1.92 8-4.45V6.45C20 3.92 16.418 2 12 2zm6 15.55c0 1.01-2.773 2.45-6 2.45s-6-1.44-6-2.45V8.33c1.518 1.07 4.028 1.67 6 1.67s4.482-.6 6-1.67v9.22zm-6-9.6c-2.174 0-4.367-.554-6-1.526V6.45c0-1.01 2.773-2.45 6-2.45s6 1.44 6 2.45v.974c-1.633.972-3.826 1.526-6 1.526z"></path>
        </svg>
        <span className="relative z-10">{label}</span>
      </div>
      <style jsx>{`
        @keyframes flip-page {
          0% {
            transform: perspective(600px) rotateY(0deg);
          }
          50% {
            transform: perspective(600px) rotateY(-90deg);
          }
          100% {
            transform: perspective(600px) rotateY(-180deg);
          }
        }

        .group-hover .w-6 {
          animation: flip-page 0.6s forwards;
        }
      `}</style>
    </button>
  );
};

export default Buttons;
