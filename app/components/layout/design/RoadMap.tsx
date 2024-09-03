import Button from "../ui/Button";
import Heading from "../../Heading";
import Section from "../section/Section";
import Tagline from "./Tagline";
import { roadmap } from "../../constants";
import check2 from "../../layout/section/check.svg";
import { Gradient } from "../Service";
import grid from "./grid.png";
import Image from "next/image";
import loading1 from "./loading.png";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="flex justify-center items-center flex-col md:pb-10">
      <Heading title="What we’re working on" />

      <div className="relative grid px-9 gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex flex justify-center items-center even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative  mt-16 mb-16 flex justify-center items-center p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute flex justify-center items-center top-0 left-0 max-w-full">
                  <Image
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1  items-center">
                  <div className="flex items-center text-white justify-between w-full mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex  items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <Image
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 justify-center w-full flex -my-10  h-32 object-contain  -mx-15">
                    <Image
                      className="object-contain"
                      src={item.imageUrl}
                      width={150}
                      height={150}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="text-center  text-2xl text-white mb-4">
                    {item.title}
                  </h4>
                  <p className="text-center text-xs  text-gray-500">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button label="Start Now" />
      </div>
    </div>
  </Section>
);

export default Roadmap;
