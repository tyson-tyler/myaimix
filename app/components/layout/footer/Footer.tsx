import React from "react";
import Section from "../../layout/section/Section";
import { socials } from "../../constants/index";
import Image from "next/image";

const Footer = () => {
  return (
    <Section>
      <div className="w-full text-center px-20 text-white flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <Image
                src={item.iconUrl}
                width={26}
                height={26}
                alt={item.title}
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
