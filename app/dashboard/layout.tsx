import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins from next/font/google

import { Toaster } from "react-hot-toast";
import Topbar from "./components/layout/topbar/topbar";
import { ThemeProvider } from "./components/theme/provider";
import Sidebar from "./components/layout/Sidebar/sidebar";
import Footer from "./components/layout/Footer/footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] }); // Specify font weights as needed

export const metadata: Metadata = {
  title: "Myaimix",
  description: "All AI you Need in one Place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${poppins.className} bg-gray-100 h-screen dark:bg-gray-900 dark:text-white text-black`}
    >
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Topbar />
        <div className="flex mt-3">
          <Sidebar />
          <div className="pt-16 px-4 flex-1">{children}</div>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
