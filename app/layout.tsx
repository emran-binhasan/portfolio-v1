import type { Metadata } from "next";
import { Anek_Bangla, Poppins, Work_Sans } from "next/font/google";
import "@/styles/globals.css";
import clsx from "clsx";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";

const anekBangla = Anek_Bangla({
  variable: "--font-anek-bangla",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(workSans.variable, anekBangla.variable, poppins.variable, 'antialiased bg-gray-50')}
      >
        
        {children}
      </body>
    </html>
  );
}
