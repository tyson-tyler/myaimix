import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navigation } from "../../constants";
import Link from "next/link";
import Button from "./Button";

export function SheetSide() {
  return (
    <div className="lg:hidden flex">
      <Sheet>
        <SheetTrigger>
          <Menu className="w-5 h-5 text-white" />
        </SheetTrigger>
        <SheetContent className="bg-gray-950 border-none text-white">
          <div className="flex justify-center h-screen flex-col items-center px-5 lg:px-7 xl:px-10 py-3 md:py-4 lg:py-4">
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <Link
                  href={item.url}
                  key={item.id}
                  className={`block relative text-lg my-4 uppercase text-white transition-colors hover:text-purple-500 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-3 lg:-mr-1 lg:text-xs l`}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <Link href={"/"} className="hidden lg:flex">
              <Button label="Start Now" />
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
