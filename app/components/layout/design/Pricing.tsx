import React from "react";
import Section from "../section/Section";
import Image from "next/image";
import Hello from "../ai/pure.png";
import Heading from "../../Heading";
import PricingList from "./pricingta";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="flex justify-center flex-col items-center relative z-20">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <Image
            src={Hello}
            className="relative z-1 animate-spin"
            width={255}
            height={255}
            alt="hello"
          />
        </div>
        <div>
          <Heading title="Start with Free Plane, use forever" />
          <div className="relative">
            <PricingList />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
