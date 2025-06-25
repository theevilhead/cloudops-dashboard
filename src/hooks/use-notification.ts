"use client";

import { useEffect } from "react";

export function useNotification(onReceive: (props: any) => void) {
  const broadcastChannel = new BroadcastChannel("notifications");

  useEffect(() => {
    // On receive
    broadcastChannel.onmessage = (event) => {
      onReceive(event)
    };
    // Cleanup on unmount
    return () => {
      broadcastChannel.close();
    };
  })
}