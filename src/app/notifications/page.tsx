"use client";

import { Button } from "@/components/ui/button";
import { useNotificationTrigger } from "@/hooks/use-notification-trigger";

export default function Notifications() {
  const { sendNotification } = useNotificationTrigger();

  return (
    <div className="container mx-auto p-4 max-w-1/2">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        Trigger notifications from here
      </h1>

      <ul className="flex w-full flex-col gap-2 my-10">
        <li className="font-medium flex justify-between border-b py-2">
          Send a server overload notification
          <Button
            variant={"outline"}
            onClick={() =>
              sendNotification({
                type: "warning",
                message:
                  "The server is experiencing high load. Please check the status.",
                createdAt: new Date(),
              })
            }
          >
            Trigger
          </Button>
        </li>
        <li className="font-medium flex justify-between border-b py-2">
          Send server downtime notification
          <Button
            variant={"outline"}
            onClick={() =>
              sendNotification({
                type: "error",
                message:
                  "The server is currently down for maintenance. Please try again later.",
                createdAt: new Date(),
              })
            }
          >
            Trigger
          </Button>
        </li>
      </ul>
    </div>
  );
}
