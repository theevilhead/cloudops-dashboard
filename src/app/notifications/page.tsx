"use client"

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useNotificationTrigger } from "@/hooks/use-notification-trigger";


export default function Notifications() {

  const { sendNotification } = useNotificationTrigger();

  return (
    <div className="container mx-auto p-4">

      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        Trigger notifications from here
      </h1>
      <Table className="mt-8">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Action name</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="w-full">
          <TableRow className="flex items-center w-full justify-between">
            <TableCell className="font-medium">Send a server overload notification</TableCell>
            <TableCell>
              <Button variant={"outline"} onClick={() => sendNotification({
                type: "warning",
                message: "The server is experiencing high load. Please check the status."
              })}>
                Trigger
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="flex items-center w-full justify-between">
            <TableCell className="font-medium">Send server downtime notification</TableCell>
            <TableCell>
              <Button variant={"outline"} onClick={() => sendNotification({
                type: "error",
                message: "The server is currently down for maintenance. Please try again later."
              })}>
                Trigger
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

    </div>
  );
}
