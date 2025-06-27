"use client";
import { useEffect } from "react";

const broadcast = new BroadcastChannel("notifications");

export type NotificationTriggerType = {
  type: string;
  message: string;
  createdAt: Date;
};

const sendNotification = ({
  type,
  message,
  createdAt,
}: NotificationTriggerType) => {
  try {
    broadcast.postMessage({
      type: type,
      message: message,
      createdAt: createdAt.toISOString(),
    });
  } catch {
    window.alert(
      "The broadcast channel seems to be closed. Please refresh both main page and this to re-establish the connection."
    );
  }
};

export function useNotificationTrigger() {
  useEffect(() => {
    // Cleanup on unmount
    return () => {
      broadcast.close();
    };
  });

  return {
    sendNotification,
  };
}
