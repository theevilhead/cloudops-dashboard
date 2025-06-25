"use client";
import { useEffect } from "react";

const broadcast = new BroadcastChannel("notifications");

export type NotificationTriggerType = {
  type: string;
  message: string;
}

const sendNotification = ({type, message}: NotificationTriggerType) => {
  broadcast.postMessage({
    type: type,
    message: message,
  });
};

export function useNotificationTrigger() {
  useEffect(() => {
    // Cleanup on unmount
    return () => {
      broadcast.close();
    };
  })

  return {
    sendNotification,
  }
}