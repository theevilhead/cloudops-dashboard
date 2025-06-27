"use client";

import { Input } from "@components/ui/input";
import { SearchIcon } from "lucide-react";

import { useGlobalSearch } from "@/hooks/use-global-search";
import { Button } from "./ui/button";

export function SideHeaderSearchbar() {
  const { setOpen, GlobalSearch } = useGlobalSearch();

  return (
    <div className="flex items-center relative grow">
      <Input
        placeholder="Search anything here (CMD + K)"
        onFocus={() => {
          setOpen(true);
        }}
        className="hidden sm:block"
      />
      <Button
        variant={"ghost"}
        className="items-center absolute right-0 hidden sm:flex"
        disabled
      >
        <SearchIcon />
      </Button>
      <Button
        variant={"outline"}
        className="flex items-center size-8 absolute right-0 sm:hidden"
        onClick={() => setOpen(true)}
      >
        <SearchIcon />
      </Button>
      <GlobalSearch />
    </div>
  );
}
