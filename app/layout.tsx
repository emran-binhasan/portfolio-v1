import type { Metadata } from "next";
import { Anek_Bangla, Poppins, Work_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

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
  title: "Emran Bin Hasan",
  description: "Emran | Software Engineer",
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
