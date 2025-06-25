"use client"

import { User } from "@/context/UserContext"
import { NotificationProvider } from "@/components/providers/notification-provider";
import { UserProvider } from "@/context/UserContext";
import {
  SidebarProvider,
} from "@/components/ui/sidebar"

export function ProviderWrapper({ user, children }: {
  user: User | null
  children: React.ReactNode
}) {
  return (
    <UserProvider user={user}>
      <NotificationProvider>
        <SidebarProvider
          style={
            {
              "--sidebar-width": "calc(var(--spacing) * 72)",
              "--header-height": "calc(var(--spacing) * 12)",
            } as React.CSSProperties
          }
        >
          {children}
        </SidebarProvider>
      </NotificationProvider>
    </UserProvider>
  )
}