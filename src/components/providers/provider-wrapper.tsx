// A common provider wrapper for root layouts and pages
"use client";

import { User } from "@/context/UserContext";
import { UserProvider } from "@/context/UserContext";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/providers/theme-provider";

export function ProviderWrapper({
  user,
  children,
}: {
  user: User | null;
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <UserProvider user={user}>
        <SidebarProvider
          style={
            {
              "--sidebar-width":
                "calc(var(--spacing) * 72)",
              "--header-height":
                "calc(var(--spacing) * 12)",
            } as React.CSSProperties
          }
        >
          {children}
        </SidebarProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
