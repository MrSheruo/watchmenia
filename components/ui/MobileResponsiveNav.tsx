"use client";
import { TextAlignRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks } from "@/consts";
import Link from "next/link";

export function MobileResponsiveNav() {
  return (
    <div className=" sm:hidden flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <TextAlignRightIcon className="h-[1.2rem] w-[1.2rem] dark:text-[#eee]" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {navLinks.map((link, i) => (
            <DropdownMenuItem key={i}>
              <Link className=" px-4 py-2 " href={link.href} >
                {link.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
