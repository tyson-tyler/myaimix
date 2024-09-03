"use client";
import React, { useRef } from "react";
import Section from "./section/Section";
import Image from "next/image";
import Hello from "./section/good.webp";
import Ch from "./section/play.png";
import Button from "./ui/Button";
import Buttons from "./ui/ui";
import { BackgroundCircles, BottomLine, Gradient } from "./design/hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import Generating from "./ui/Generating";
import Notification from "./section/Notification";
import CompanyLogos from "./design/CompanyLogo";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section id="hero">
      <div className="relative" ref={parallaxRef}>
        <BackgroundCircles />
        <Image
          src={Ch}
          className="absolute hidden lg:block left-[38rem] top-1 right-2 xl:-mt-2"
          width={124}
          height={28}
          alt="Play Icon"
        />
        <div className="relative z-10 mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="mb-6 text-center mx-auto z-50 w-full flex justify-center items-center flex-col text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
            Explore All The Ai Feature at
            <span className="inline-block relative">
              Myaimix
              <span className="text-purple-500 animate-pulse">.</span>
            </span>
          </h1>
          <p className="max-w-3xl px-4 mx-auto mb-6 text-gray-400 lg:mb-8">
            🎉 Unleash the power of AI with Myaimix. Upgrade your productivity
            with Myaimix 🎊, and make life easy 🥳
          </p>
          <div className="flex w-full justify-center mb-8 items-center flex-wrap gap-4">
            <Button label="Get Started" />
            <Buttons label="Documentation" />
          </div>
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl">
              <div className="relative bg-gray-900 rounded-[1rem] overflow-hidden">
                <div className="h-[1.4rem] bg-neutral-800 rounded-t-[0.9rem]" />
                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] confetti-container">
                  <Image
                    fill
                    src={Hello}
                    alt="Hero Image"
                    className="w-full object-cover"
                  />

                  <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                  <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute left-[3.5rem] z-50  bottom-[7.5rem] px-1 py-1  bg-gray-500/40 backdrop-blur border border-gray-600 rounded-2xl xl:flex">
                      {heroIcons.map((icon, index) => (
                        <li className="p-5" key={index}>
                          <Image
                            src={icon}
                            width={24}
                            height={25}
                            alt="hello"
                          />
                        </li>
                      ))}
                    </ul>
                  </ScrollParallax>
                  <ScrollParallax isAbsolutelyPositioned>
                    <Notification title="50 Millon + Happy customer Daily . " />
                  </ScrollParallax>
                  <div className="absolute inset-0 pointer-events-none confetti"></div>
                  <div className="absolute inset-0 star-container">
                    <div className="star animate-spin"></div>
                    <div className="star animate-pulse"></div>
                    <div className="star animate-ping"></div>
                    <div className="star animate-bounce"></div>
                    <div className="star animate-spin"></div>
                  </div>
                </div>

                <div className="absolute inset-0  opacity-20 animate-gradient-move"></div>
              </div>
            </div>
            <BottomLine />
            <Gradient />
          </div>
        </div>
      </div>
      <CompanyLogos />
    </Section>
  );
};

export default Hero;
