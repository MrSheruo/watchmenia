"use client";
import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { fakeData } from "@/lib/fakeData";

export default function SearchBar() {
  const [activeSearch, setActiveSearch] = useState<any>([]);
  const handleSearch = (e: any) => {
    if (e.target.value === "") {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      fakeData.filter((f) => f.includes(e.target.value)).slice(0, 8)
    );
  };
  return (
    <section className=" max-w-7xl mx-auto flex justify-between items-center">
      <h4>WatchMenia iz za best in za East</h4>
      <form className=" flex flex-col gap-4 items-center">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search"
            onChange={(e) => handleSearch(e)}
          />
          <Button
            className="absolute top-0 right-0"
            type="submit"
            variant={"outline"}
          >
            <SearchIcon className="h-4 w-4 textDark" />
          </Button>
        </div>

        {activeSearch.length > 0 && (
          <div>
            <ScrollArea className="w-48 rounded-md border absolute">
              {
                // @ts-ignore
                activeSearch.map((item, i) => (
                  <p key={i}>{item}</p>
                ))
              }
            </ScrollArea>
          </div>
        )}
      </form>
    </section>
  );
}
