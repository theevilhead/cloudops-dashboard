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
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search anything here..." />
      {/* Filters */}
      <p className="text-xs text-muted-foreground px-4 pt-2">
        Filter by
      </p>
      <div className="p-2 flex items-center gap-2 shadow-xs">
        <Button
          variant={"outline"}
          className="text-xs p-0 px-2 py-1 h-auto rounded-xl"
        >
          EC2 Instances
        </Button>
        <Button
          variant={"outline"}
          className="text-xs p-0 px-2 py-1 h-auto rounded-xl"
        >
          EBS Snapshots
        </Button>
      </div>
      {/* Suggestion list */}
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem
            key={0}
            className="flex flex-col items-start p-0"
          >
            <div className="flex items-center justify-between gap-x-2 w-full">
              <div>
                <div className="font-semibold">Issues</div>
                <div className="flex gap-x-2 items-center">
                  <span className="text-xs">
                    108 open currently
                  </span>
                </div>
              </div>
            </div>
          </CommandItem>
          <CommandItem
            key={0}
            className="flex flex-col items-start p-0"
          >
            <div className="flex items-center justify-between gap-x-2 w-full">
              <div>
                <div className="font-semibold">
                  Remediations
                </div>
                <div className="flex gap-x-2 items-center">
                  <span className="text-xs">
                    80 by Day2<sup>TM</sup>
                  </span>
                </div>
              </div>
            </div>
          </CommandItem>
          <CommandItem
            key={0}
            className="flex flex-col items-start p-0"
          >
            <div className="flex items-center justify-between gap-x-2 w-full">
              <div>
                <div className="font-semibold">
                  Recommendations
                </div>
                <div className="flex gap-x-2 items-center">
                  <span className="text-xs">
                    15 compliances
                  </span>
                </div>
              </div>
            </div>
          </CommandItem>
          <CommandItem
            key={0}
            className="flex flex-col items-start p-0"
          >
            <div className="flex items-center justify-between gap-x-2 w-full">
              <div>
                <div className="font-semibold">
                  Security Posture
                </div>
                <div className="flex gap-x-2 items-center">
                  <span className="text-xs">
                    150 open issues
                  </span>
                </div>
              </div>
            </div>
          </CommandItem>
          <CommandItem
            key={0}
            className="flex flex-col items-start p-0"
          >
            <div className="flex items-center justify-between gap-x-2 w-full">
              <div>
                <div className="font-semibold">
                  Compliance Assessment
                </div>
                <div className="flex gap-x-2 items-center">
                  <span className="text-xs">
                    40 open issues
                  </span>
                </div>
              </div>
            </div>
          </CommandItem>
          <CommandItem
            key={0}
            className="flex flex-col items-start p-0"
          >
            <div className="flex items-center justify-between gap-x-2 w-full">
              <div>
                <div className="font-semibold">
                  AWS costs
                </div>
                <div className="flex gap-x-2 items-center">
                  <span className="text-xs">
                    $12,250.00 - Explore more
                  </span>
                </div>
              </div>
            </div>
          </CommandItem>
          <CommandItem
            key={0}
            className="flex flex-col items-start p-0"
          >
            <div className="flex items-center justify-between gap-x-2 w-full">
              <div>
                <div className="font-semibold">
                  Cost Optimization
                </div>
                <div className="flex gap-x-2 items-center">
                  <span className="text-xs">
                    $1,1425 Potential cost savings
                  </span>
                </div>
              </div>
            </div>
          </CommandItem>
          {/* {
            results?.length ? (
              results.map((result, index) => (
                <CommandItem key={index} className="flex flex-col items-start p-0">
                  <div className="flex items-center justify-between gap-x-2 w-full">
                    <div>
                      <div className="font-semibold">{result.name}</div>
                      <div className="flex gap-x-2 items-center">
                        <span className="text-xs">{result.type}</span>
                      </div>
                    </div>
                    {
                      result.status &&
                      <Badge variant={
                        result.status === "running" ? "green-signal" :
                          result.status === "stopped" ? "red-signal" :
                            result.status === "overloaded" ? "default" :
                              "yellow-signal"
                      } className="text-xs p-0 px-1 capitalize">{result.status}</Badge>
                    }
                  </div>
                </CommandItem>
              ))
            ) : (
              <CommandItem disabled>No suggestions available</CommandItem>
            )
          } */}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
