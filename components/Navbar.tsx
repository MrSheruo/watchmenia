import { navLinks } from "@/consts";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ui/ModeToggle";
import { MobileResponsiveNav } from "./ui/MobileResponsiveNav";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="gradientNav relative">
      <nav className=" flex justify-between max-w-7xl m-auto items-center p-4">
        <div className="flex">
          {/* Logo */}
          <h4 className="text-4xl font-bold mr-4">WatchMenia</h4>
          {/* links */}
          <div id="nav-pc" className="gap-8 hidden sm:flex">
            {navLinks.map((link, i) => (
              <Link className=" px-4 py-2 beforeLink" href={link.href} key={i}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className=" relative flex gap-5">
          <MobileResponsiveNav />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
