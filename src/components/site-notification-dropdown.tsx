"use client";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNotification } from "@/context/NotificationContext";
import {
  CheckCheck,
  CheckCircle,
  FileWarning,
  InfoIcon,
  TriangleAlert,
  BellDot,
  BellIcon,
} from "lucide-react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";
dayjs.extend(relativeTime);

function SiteNotificationDropdown() {
  const [isUnread, setIsUnread] = useState(false);
  const { notifications } = useNotification();

  useEffect(() => {
    // Since we have 7 hardcoded notifications, we can set isUnread to true if there are more than 7 notifications
    if (notifications.length > 7) {
      setIsUnread(true);
    }
  }, [notifications.length]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          className="size-8 group-data-[collapsible=icon]:opacity-0"
          variant="outline"
        >
          {isUnread ? (
            <BellDot className="fill-primary" />
          ) : (
            <BellIcon />
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={8}
        align="end"
        className="max-h-[450px] overflow-y-auto w-[350px]"
      >
        <DropdownMenuLabel className="flex w-full justify-between items-center">
          Notifications (
          {notifications.length > 0 && notifications.length}
          )
          <Button
            variant={"link"}
            className="text-xs text-blue-600 p-0 m-0 dark:text-gray-400"
            size={"sm"}
            onClick={() => setIsUnread(false)}
          >
            <CheckCheck className="h-4 w-4" />
            Mark all as read
          </Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.map((notification, index) => (
          <DropdownMenuItem
            key={index}
            className="cursor-pointer p-2 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center"
          >
            <div className="">
              {notification.type === "warning" ? (
                <span className="border w-8 h-8 flex flex-col items-center justify-around bg-yellow-50 rounded-md">
                  <FileWarning className=" text-yellow-500 align-middle" />
                </span>
              ) : notification.type === "error" ? (
                <span className="border w-8 h-8 flex flex-col items-center justify-around bg-red-50 rounded-md">
                  <TriangleAlert className=" text-red-500 align-middle" />
                </span>
              ) : notification.type === "success" ? (
                <span className="border w-8 h-8 flex flex-col items-center justify-around bg-green-50 rounded-md">
                  <CheckCircle className=" text-green-500 align-middle" />
                </span>
              ) : (
                <span className="border w-8 h-8 flex flex-col items-center justify-around bg-blue-50 rounded-md">
                  <InfoIcon className=" text-blue-500 align-middle" />
                </span>
              )}
            </div>
            <div>
              <div>{notification.message}</div>
              <div className="ml-auto text-xs text-gray-500">
                {/* Relative time */}
                {dayjs(notification.createdAt).fromNow()}
              </div>
            </div>
          </DropdownMenuItem>
        ))}
        {/* Show all */}
        <div className="cursor-pointer flex items-center justify-center p-2">
          <Button
            variant={"default"}
            className="text-xs p-0 m-0 w-full rounded-md"
            size={"sm"}
          >
            Show all notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default SiteNotificationDropdown;
