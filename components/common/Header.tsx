"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import WaveUnderline from "../svgs/WaveUnderline";
import ExternalLink from "../svgs/ExternalLink.svg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="max-w-7xl mx-auto py-10 px-5 w-full flex justify-between items-center">
      <div>
        <Image
          src="/logo.png"
          alt="logo"
          width={30}
          height={30}
          className="w-6 sm:w-7 md:w-8 h-auto nav-logo "
        />
      </div>
      <nav className="flex items-center gap-6 font-poppins text-lg relative">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <div key={link.href} className="relative">
              <Link
                href={link.href}
                className={clsx("pb-2 flex gap-1 items-center p-1 group")}
              >
                {link.label} 
                <Image
                  src={ExternalLink}
                  alt="external link"
                  className="transition-transform hidden group-hover:block duration-200"
                />
              </Link>
              {isActive && <WaveUnderline />}
            </div>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
