import Image from "next/image";
import Heading from "./Heading";
import Section from "./layout/section/Section";
import Logo from "./layout/ai/2.jpg";
import { brainwaveServices, brainwaveServicesIcons } from "./constants";
import Check from "./layout/section/check";
import Generating from "./layout/ui/Generating";
import logo from "./layout/ai/1.jpg";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./layout/Service";
import Hello from "./layout/ai/3.jpg";

const Service = () => {
  return (
    <Section>
      <div className="flex justify-center items-center flex-col text-center">
        <Heading
          title="Generative AI Cool for creators."
          text="With Myaimix, unlock the imagination of the AI-powered feature."
        />

        <div className="relative p-5 mt-8 w-full lg:w-3/4 xl:w-2/3">
          <div className="relative z-10 flex items-center h-[30rem] md:h-[35rem] lg:h-[40rem] xl:h-[45rem] p-6 lg:p-12 xl:p-16 border border-gray-900 rounded-3xl bg-transparent shadow-lg overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <Image
                className="w-full h-full object-cover rounded-3xl opacity-70"
                width={800}
                alt="Smartest AI"
                height={730}
                src={Logo}
              />
            </div>

            <div className="relative z-20 max-w-[17rem] mx-auto lg:mx-0 lg:ml-auto">
              <h4 className="text-2xl font-semibold text-white mb-4">
                Smartest AI
              </h4>
              <p className="text-lg text-white mb-8">
                Brainwave unlocks the potential of AI-powered applications.
              </p>
              {/* Uncomment and customize this list if needed */}
              <ul className="text-lg">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-gray-800"
                  >
                    <Check />
                    <p className="ml-4 text-white">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className=" rounded-3xl overflow-hidden relative min-h-[39rem] border-gray-800/40">
              <div className="absolute inset-0">
                <Image
                  src={logo}
                  className="h-full w-full mt-9 rounded-2xl object-cover"
                  width={630}
                  height={750}
                  alt="hello"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8  lg:p-16">
                <h4 className="text-2xl text-white">Smartest AI</h4>
                <p className="mb-4 text-white text-sm ">
                  Myaimix unlock the Imagination of the Ai with Powered editing
                  feature . Try it now !
                </p>
              </div>
              <PhotoChatMessage />
            </div>
            <div className="p-4 bg-gray-900 rounded-3xl overflow-hidden lg:min-h-[46rem] mt-9">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="text-white text-2xl mb-4">Video generation</h4>
                <p className="text-white mb-[2rem]">
                  The world most powerful ai photo and video art genreation
                  engine . what will you create ?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-gray-700 rounded-[1rem]"
                            : ""
                        }
                      >
                        <Image src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Image
                  src={Hello}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="s"
                />

                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Service;
