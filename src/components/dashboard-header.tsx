import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="bg-background flex h-(--header-height) shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) mb-4 border rounded-md">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <h1 className="text-base font-medium">Dashboard</h1>
      </div>
      <div className="ml-auto flex items-center gap-2 w-1/2">
        <div className="flex items-center relative grow">
          <Input placeholder="Search anything here (CMD + K)" />
          <Button
            variant={"ghost"}
            className="absolute right-0"
            disabled
          >
            <SearchIcon />
          </Button>
        </div>
        <Button
          variant="ghost"
          asChild
          size="sm"
          className="hidden sm:flex"
        >
          <a
            href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
            rel="noopener noreferrer"
            target="_blank"
            className="dark:text-foreground"
          >
            GitHub
          </a>
        </Button>
      </div>
    </div>
  );
}
