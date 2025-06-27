import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SideHeaderSearchbar } from "./site-header-searchbar";
import SiteNotificationDropdown from "./site-notification-dropdown";
import { NotificationProvider } from "@/context/NotificationContext";
export function SiteHeader() {
  return (
    <header className="bg-background border-b group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)bg-background flex h-(--header-height) shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) mb-4 border rounded-md ">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Documents</h1>
        <div className="ml-auto flex items-center gap-2 w-1/2">
          <SideHeaderSearchbar />
          <NotificationProvider>
            <SiteNotificationDropdown />
          </NotificationProvider>
        </div>
      </div>
    </header>
  );
}
