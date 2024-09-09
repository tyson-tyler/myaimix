import Link from "next/link";
import React from "react";
import Icon from "./logo";
import { navigation } from "../../constants";
import Button from "../ui/Button";
import { SheetSide } from "../ui/SheetDemo";

import ButtonCop from "../ui/Button";

const Header = () => {
  return (
    <div className="fixed w-full top-0 z-50 bg-neutral-950 backdrop-blur-sm border-b border-gray-800 lg:backdrop-blur-sm">
      <div className="flex justify-between lg:justify-normal items-center px-5 lg:px-7 xl:px-10 py-3 md:py-4 lg:py-4">
        <Link href={"/"} className="flex justify-center items-center">
          <Icon />
          <span className="hidden md:flex  duration-300 text-white">
            Myaimix
          </span>
        </Link>
        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-neutral-950 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                href={item.url}
                key={item.id}
                className={`block relative  text-2xl uppercase text-white transition-colors hover:text-purple-500 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-3 lg:-mr-1 lg:text-xs l`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
        <div className="hidden lg:flex">
          <ButtonCop label="Start Now" />
        </div>
        <SheetSide />
      </div>
    </div>
  );
};

export default Header;
