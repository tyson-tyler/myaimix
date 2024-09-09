import Logo1 from "@/app/components/layout/Header/logo1";
import { ModeToggle } from "../../theme/tooglebtn";
import Link from "next/link";
// left-64 w-[calc(100%-16rem)]

const Topbar = () => {
  return (
    <div className="dark:bg-black w-full bg-white dark:text-white text-black fixed top-0  h-16 flex items-center justify-between lg:px-6 px-2">
      {/* Left Side: Logo and Title */}
      <Link href={"/dashboard"} className="flex  items-center gap-3">
        <Logo1 />
        <span className="text-xl hidden md:block dark:text-white text-black">
          Myaimix
        </span>
      </Link>

      {/* Right Side: Mode Toggle */}
      <ModeToggle />
    </div>
  );
};

export default Topbar;
