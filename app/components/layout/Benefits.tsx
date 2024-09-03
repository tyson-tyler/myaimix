import React from "react";
import Section from "./section/Section";
import Heading from "../Heading";
import { benefits } from "../constants";
import ClipPath from "../constants/company/Clip.svg";
import { ArrowBigDown } from "lucide-react";
import { GradientLight } from "../constants/company/Benfits";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const Benefits = () => {
  return (
    <Section id="feature">
      <div className=" relative z-2">
        <Heading className="" title="Work Smarter, Not Harder with Myaimix  " />
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-5 lg:p-[0.5px] bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col justify-center border-blue-200  rounded-xl border-2 min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5 text-white">{item.title}</h5>
                <p className="body-2 mb-6 text-white">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-white uppercase tracking-wider">
                    Explore more
                  </p>
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
              </div>
              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              {/* <ClipPath /> */}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
