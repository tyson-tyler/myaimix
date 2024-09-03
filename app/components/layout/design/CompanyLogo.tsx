import Image from "next/image";
import { companyLogos } from "../../constants";

const CompanyLogos = ({ className }: any) => {
  return (
    <div className={className}>
      <h5 className="text-gray-500 mb-6 text-center text-n-1/50">
        Trusted by fast-growing companies around the world
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <Image
              src={logo}
              width={134}
              className="w-10 h-10  md:w-16 md:h-16 lg:w-20 lg:h-20"
              height={28}
              alt={logo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
