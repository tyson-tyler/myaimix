"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden group transition-transform duration-300 hover:scale-110"
    >
      {/* Background Animation */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${
          theme === "light"
            ? "from-purple-400 to-gray-500"
            : "from-blue-600 to-purple-800"
        } opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg`}
      ></div>

      {/* Icon Animation */}
      <div className="relative z-10">
        {theme === "light" ? (
          <IoMdSunny className="h-[1.2rem] w-[1.2rem] transition-all transform duration-500 rotate-0 scale-100 group-hover:rotate-[20deg] group-hover:scale-110" />
        ) : (
          <BsMoonStarsFill className="h-[1.2rem] w-[1.2rem] transition-all transform duration-500 rotate-0 scale-100 group-hover:rotate-[20deg] group-hover:scale-110" />
        )}
      </div>

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
