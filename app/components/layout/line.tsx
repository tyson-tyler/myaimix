import Image from "next/image";
import curve from "../layout/design/curve-2.svg";
import curve1 from "../../components/constants/logo/22.png";

export const RightCurve = () => {
  return (
    <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
      <Image src={curve} width={162} height={76} alt="Curve 2" />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="hidden absolute  right-full w-[22.625rem] -mt-1 mr-10 pointer-events-none xl:block">
      <Image src={curve1} width={322} height={182} alt="Curve 1" />
    </div>
  );
};
