import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins from next/font/google
import "./globals.css";

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
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
