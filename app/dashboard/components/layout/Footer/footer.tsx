"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname hook
import {
  HomeIcon,
  UserIcon,
  CogIcon,
  ChartBarIcon,
} from "@heroicons/react/outline";

export default function Footer() {
  // List of navigation items
  const navItems = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Profile", href: "/dashboard/profile", icon: UserIcon },
    { name: "Analytics", href: "/analytics", icon: ChartBarIcon },
    { name: "Settings", href: "/settings", icon: CogIcon },
  ];

  // Get the current path
  const pathname = usePathname();

  return (
    <div className="flex overflow-hidden">
      {/* Sidebar */}
      <aside className="dark:bg-gray-950 w-full  items-center fixed bottom-0 md:hidden flex bg-white text-black  dark:text-white   space-y-4">
        {/* Navigation */}
        <nav className="flex  space-y-2 w-full justify-around items-center">
          {navItems.map((item) => {
            // Check if the current path matches the item's href
            const isActive = pathname === item.href;

            return (
              <Link key={item.name} href={item.href} passHref>
                <div
                  className={`flex flex-col mb-1 items-center  p-3 w-full rounded-lg transition duration-200 cursor-pointer group
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
                    className={`h-5 w-5 mb-[2px] transition duration-200
                    ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 group-hover:text-indigo-400 group-focus:text-indigo-400"
                    }
                    `}
                  />
                  {/* Link text */}
                  <span
                    className={`font-medium gap-1 justify-center text-[9px] text-center md:hidden lg:flex transition duration-200
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
              </Link>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}
