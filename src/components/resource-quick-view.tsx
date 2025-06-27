"use client";

import {
  EyeIcon,
  SquareArrowUpRightIcon,
} from "lucide-react";
import { ResponsiveContainer } from "recharts";

import { CPUUsageChart } from "./charts/cpu-usage-chart";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MemoryUsageChart } from "./charts/memory-usage-chart";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { RESOURCES } from "@/data/resources";

export function ResourceQuickView({
  children,
  ...restOfTheProps
}: {
  children?: React.ReactNode;
  resource: (typeof RESOURCES)[0];
  [key: string]: unknown; // Allow other props to be passed
}) {
  const { resource } = restOfTheProps;

  const { currentUser } = useUser();

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <div className="flex items-center">
          {children}
          <Button
            variant="link"
            className="text-card-foreground outline-none mx-0"
          >
            <EyeIcon className="ml-1 h-4 w-4" />
          </Button>
          <Link
            className="text-card-foreground outline-none mx-0"
            href={`/${currentUser?.company}/${resource.id}`}
          >
            <SquareArrowUpRightIcon className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className=" border-b ">
            <div className="flex items-center justify-between pb-2">
              <div>
                <DrawerTitle>{resource.name}</DrawerTitle>
                <DrawerDescription>
                  Quick overview
                </DrawerDescription>
              </div>
              <div>
                <Badge
                  className="ml-2"
                  variant={
                    resource.status === "running"
                      ? "green-signal"
                      : resource.status === "stopped"
                      ? "red-signal"
                      : "default"
                  }
                >
                  {resource.status}
                </Badge>
              </div>
            </div>
          </DrawerHeader>
          <div className="px-4 border-b">
            <div className="grid grid-cols-3">
              <div className="flex flex-1 flex-col justify-center gap-1 px-2 py-2 text-left border-r last:border-0 sm:py-4">
                <span className="text-muted-foreground text-xs">
                  Open issues
                </span>
                <span className="text-md leading-none font-bold sm:text-2xl">
                  {23}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-center gap-1 px-2 py-2 text-left border-r last:border-0 sm:py-4">
                <span className="text-muted-foreground text-xs">
                  Logs
                </span>
                <span className="text-md leading-none font-bold sm:text-2xl">
                  {2320}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-center gap-1 px-2 py-2 text-left border-r last:border-0 sm:py-4">
                <span className="text-muted-foreground text-xs">
                  Security alerts
                </span>
                <span className="text-md leading-none font-bold sm:text-2xl">
                  {2}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 py-2 px-4 border-b">
            <Button
              size={"xs"}
              variant={"secondary"}
              className="border"
            >
              Connect via SSH
            </Button>
            <Button
              size={"xs"}
              variant={"secondary"}
              className="border"
            >
              Raise a ticket
            </Button>
          </div>
          <div className="p-4 pb-2 border-b">
            <ResponsiveContainer width="100%" height="100%">
              <CPUUsageChart />
            </ResponsiveContainer>
          </div>
          <div className="p-4 pb-2 border-b">
            <ResponsiveContainer width="100%" height="100%">
              <MemoryUsageChart />
            </ResponsiveContainer>
          </div>
          <DrawerFooter className="fixed bottom-0 left-0 right-0 z-10 bg-background">
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
