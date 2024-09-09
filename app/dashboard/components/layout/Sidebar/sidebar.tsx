"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname hook
import {
  HomeIcon,
  UserIcon,
  CogIcon,
  ChartBarIcon,
} from "@heroicons/react/outline";
import SignOut from "./signout";
import { auth } from "@/app/auth";
import Image from "next/image";

export default function Sidebar() {
  // List of navigation items
  const navItems = [
    { name: "Home", href: "/dashboard", icon: HomeIcon },
    { name: "Profile", href: "/dashboard/profile", icon: UserIcon },
    { name: "Analytics", href: "/analytics", icon: ChartBarIcon },
    { name: "Settings", href: "/settings", icon: CogIcon },
  ];

  // Get the current path
  const pathname = usePathname();

  return (
    <div className="flex h-svh overflow-hidden">
      {/* Sidebar */}
      <aside className="dark:bg-gray-950 hidden md:flex bg-white text-black mt-10 dark:text-white lg:w-64 md:w-15 px-4 py-8 space-y-4">
        {/* Navigation */}
        <nav className="flex flex-col space-y-2 w-full">
          {navItems.map((item) => {
            // Check if the current path matches the item's href
            const isActive = pathname === item.href;

            return (
              <Link key={item.name} href={item.href} passHref>
                <div
                  className={`flex items-center space-x-3 p-3 w-full rounded-lg transition duration-200 cursor-pointer group
                  ${
                    isActive
                      ? "bg-indigo-500 text-white"
                      : "dark:hover:bg-gray-700 hover:bg-gray-200 focus:bg-gray-300 dark:focus:bg-gray-800"
                  }
                  `}
                  tabIndex={0} // Ensure focusability
                >
                  {/* Icon */}
                  <item.icon
                    className={`h-6 w-6 transition duration-200
                    ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 group-hover:text-indigo-400 group-focus:text-indigo-400"
                    }
                    `}
                  />
                  {/* Link text */}
                  <span
                    className={`font-medium md:hidden lg:flex transition duration-200
                    ${
                      isActive
                        ? "text-white"
                        : "group-hover:text-indigo-400 group-focus:text-indigo-400"
                    }
                    `}
                  >
                    {item.name}
                  </span>
                </div>
                {/* <div className=" md:flex md:flex-col lg:flex">
                  <Image src={session?.user?.image} width={30} height={30} />
                </div> */}
                <SignOut />
              </Link>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}
