"use client";
import React from "react";
import Section from "./Section";
import { collabApps, collabContent, collabText } from "../../constants";
import Image from "next/image";
import Check from "./check";
import Button from "../ui/Button";
import Logo from "../Header/logo1";
import { LeftCurve, RightCurve } from "../line";

const Collaboration = () => {
  return (
    <Section>
      <div className="container lg:flex justify-center">
        <div className="lg:max-w-[30rem] lg:block flex justify-center items-center flex-col">
          <h2 className="lg:text-4xl md:text-2xl mb-4 md:mb-8 sm:text-2xl text-white">
            AI With Seamless Features and Function.
          </h2>

          <ul className="max-w-[22rem] justify-center mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <Check />
                  <h6 className="text-white ml-2">{item.title}</h6>
                </div>
                {item.text && <p className="text-gray-500 mt-3">{item.text}</p>}
              </li>
            ))}
          </ul>
          {/* <ButtonBlur /> */}
        </div>
      </div>
      <div className="lg:ml-auto xl:w-[38rem] mt-4">
        <p className="text-gray-500 mx-3 text-xs md:text-sm text-center lg:text-left md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
          {collabText}
        </p>
        <div className="relative left-1/2 flex w-[22rem] aspect-square border border-gray-500 rounded-full -translate-x-1/2 scale-75 md:scale-100">
          <div className="flex w-60 aspect-square m-auto border border-gray-400 rounded-full">
            <div className="relative w-[6rem] flex justify-center items-center aspect-square m-auto p-[0.2rem]">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full p-[0.2rem] animate-gradient-border"></div>
              <div className="relative flex justify-center items-center bg-gray-900 rounded-full w-full h-full">
                <Logo />
              </div>
            </div>
          </div>
          <ul className="absolute inset-0 animate-spin-slow">
            {collabApps.map((app, index) => {
              const angle = (index * 360) / collabApps.length;
              const rotate = angle + "deg";
              return (
                <li
                  key={app.id}
                  className="absolute w-12 h-12 transform origin-center"
                  style={{
                    transform: `rotate(${rotate}) translate(8rem) rotate(-${rotate})`,
                    left: "50%",
                    top: "50%",
                    marginLeft: "-1.6rem",
                    marginTop: "-1.6rem",
                  }}
                >
                  <div
                    className={`relative flex w-[3.2rem] h-[3.2rem] bg-gray-900 border border-gray-900 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <Image
                      src={app.icon}
                      width={app.width}
                      height={app.height}
                      alt="hello"
                      className="m-auto"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          {/* <RightCurve />
          <LeftCurve /> */}
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
