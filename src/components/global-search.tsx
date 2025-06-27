"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "./ui/button";
import { RESOURCES } from "@/data/resources";
import { Badge } from "./ui/badge";
import { useRef, useState } from "react";
import { Cross, X } from "lucide-react";
import { IconCancel } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const predefinedSuggestions = [
  {
    name: "Issues",
    type: "Open Issues",
    status: "108 open currently",
  },
  {
    name: "Remediations",
    type: "By Day2™",
    status: "80 remediations",
  },
  {
    name: "Recommendations",
    type: "Compliance",
    status: "15 compliances",
  },
  {
    name: "Security Posture",
    type: "Open Issues",
    status: "150 open issues",
  },
  {
    name: "Compliance Assessment",
    type: "Open Issues",
    status: "40 open issues",
  },
  {
    name: "AWS costs",
    type: "Total Costs",
    status: "$12,250.00 - Explore more",
  },
  {
    name: "Cost Optimization",
    type: "Potential Savings",
    status: "$1,1425 Potential cost savings",
  },
];

export function GlobalSearch({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  results?: Array<{
    name: string;
    type: string;
    status?: string;
  }>;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Search anything here..."
        value={searchTerm}
        onValueChange={(value) => setSearchTerm(value)}
      />
      {/* Filters */}
      <p className="text-xs text-muted-foreground px-4 pt-2">
        Filter by
      </p>
      <div className="p-2 flex items-center gap-2 shadow-xs">
        <Button
          variant={"outline"}
          className={cn(
            "text-xs p-0 px-2 py-1 h-auto rounded-xl",
            searchTerm === "ec2" ? "bg-gray-200" : ""
          )}
          onClick={() => setSearchTerm("ec2")}
        >
          EC2 Instances
        </Button>
        <Button
          variant={"outline"}
          className={cn(
            "text-xs p-0 px-2 py-1 h-auto rounded-xl",
            searchTerm === "rds" ? "bg-gray-200" : ""
          )}
          onClick={() => setSearchTerm("rds")}
        >
          RDS
        </Button>
        <Button
          variant={"outline"}
          className="text-xs p-0 px-2 py-1 h-auto rounded-xl"
          onClick={() => setSearchTerm("")}
        >
          Clear filters
          <X className="h-1 w-1" />
        </Button>
      </div>
      {/* Suggestion list */}
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {predefinedSuggestions.map(
            (suggestion, index) => (
              <CommandItem
                key={index + 7}
                className="flex flex-col items-start p-0"
              >
                <div className="flex items-center justify-between gap-x-2 w-full">
                  <div>
                    <div className="font-semibold">
                      {suggestion.name}
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <span className="text-xs">
                        {suggestion.type}
                      </span>
                    </div>
                  </div>
                  {suggestion.status && (
                    <Badge
                      variant={
                        suggestion.status.includes("open")
                          ? "green-signal"
                          : suggestion.status.includes(
                              "overloaded"
                            )
                          ? "default"
                          : "red-signal"
                      }
                      className="text-xs p-0 px-1 capitalize"
                    >
                      {suggestion.status}
                    </Badge>
                  )}
                </div>
              </CommandItem>
            )
          )}
          {RESOURCES?.length ? (
            RESOURCES.map((result, index) => (
              <CommandItem
                key={index}
                className="flex flex-col items-start p-0"
              >
                <div className="flex items-center justify-between gap-x-2 w-full">
                  <div>
                    <div className="font-semibold">
                      {result.name}
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <span className="text-xs">
                        {result.type}
                      </span>
                    </div>
                  </div>
                  {result.status && (
                    <Badge
                      variant={
                        result.status === "running"
                          ? "green-signal"
                          : result.status === "stopped"
                          ? "red-signal"
                          : result.status === "overloaded"
                          ? "default"
                          : "yellow-signal"
                      }
                      className="text-xs p-0 px-1 capitalize"
                    >
                      {result.status}
                    </Badge>
                  )}
                </div>
              </CommandItem>
            ))
          ) : (
            <CommandItem disabled>
              No suggestions available
            </CommandItem>
          )}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
