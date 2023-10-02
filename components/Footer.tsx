import { footerLinks } from "@/consts";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
export default function Footer() {
  return (
    <footer className=" max-w-7xl mx-auto flex flex-col items-center">
      <div className=" flex gap-2">
        {footerLinks.map((link, i) => (
          <div
            key={i}
            className="flex h-5 items-center space-x-4 text-sm justify-center"
          >
            <Link href={link.href}>{link.name}</Link>
            <Separator orientation="vertical" />
          </div>
        ))}
      </div>
      <Separator className="my-4" />
      <h2>© 2023 WatchMenia</h2>
    </footer>
  );
}
