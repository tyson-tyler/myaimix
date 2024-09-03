import Image from "next/image";
import Nice from "./nic.webp";
import { notificationImages } from "../../constants";

const Notification = ({ className, title }: any) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 mx-2 mt-2 lg:mt-5 pr-6 bg-gray-500/40 backdrop-blur border border-gray-400/10 rounded-2xl gap-5`}
    >
      <Image
        src={Nice}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl w-10 h-10 md:w-12 md:h-12"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold lg:text-sm text-xs text-white text-left ">
          {title}
        </h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <Image
                  src={item}
                  className="w-full object-cover"
                  width={20}
                  height={20}
                  alt="hello"
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-white lg:text-sm text-xs">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
