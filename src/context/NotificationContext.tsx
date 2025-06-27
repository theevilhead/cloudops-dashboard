"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";

export type NotificationType = {
  type: string;
  message: string;
  createdAt: Date;
};

const defaultNotifications = [
  {
    type: "info",
    message: "New document created",
    createdAt: new Date(),
  },
  {
    type: "warning",
    message: "Document update failed",
    createdAt: new Date(),
  },
  {
    type: "error",
    message: "Server error occurred",
    createdAt: new Date(),
  },
  {
    type: "success",
    message: "Document saved successfully",
    createdAt: new Date(),
  },
  {
    type: "info",
    message: "New comment on your document",
    createdAt: new Date(),
  },
  {
    type: "warning",
    message: "Document is about to expire",
    createdAt: new Date(),
  },
  {
    type: "error",
    message: "Failed to load document",
    createdAt: new Date(),
  },
];

export const NotificationContext = createContext<{
  notifications: NotificationType[];
  setNotifications?: React.Dispatch<
    React.SetStateAction<NotificationType[]>
  >;
}>({
  notifications: defaultNotifications,
});

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notifications, setNotifications] = useState<
    NotificationType[]
  >(defaultNotifications);

  const onNotificationReceive = (event: {
    data: {
      type: string;
      message: string;
      createdAt: Date;
    };
  }) => {
    const { data } = event;

    const { type, message, createdAt } = data;

    // Add the notification to the state
    setNotifications((prev) => [
      { type, message, createdAt },
      ...prev,
    ]);

    if (type === "warning") {
      toast.warning(message);
      return;
    }

    if (type === "error") {
      toast.error(message);
      return;
    }

    toast(message);
  };

  useEffect(() => {
    const broadcastChannel = new BroadcastChannel(
      "notifications"
    );
    // On receive
    broadcastChannel.onmessage = (event) => {
      onNotificationReceive(event);
    };
    // Cleanup on unmount
    return () => {
      broadcastChannel.close();
    };
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        setNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export function useNotification() {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return {
    ...context,
  };
}
