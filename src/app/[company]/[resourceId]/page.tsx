import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset } from "@/components/ui/sidebar";

import { ProviderWrapper } from "@/components/providers/provider-wrapper";
import ResourceDetails from "@/components/resource-details";
import { DUMMY_USER } from "@/data/user";

export default async function Dashboard({
  params,
}: {
  params: Promise<{ company: string }>;
}) {
  const { company } = (await params) || {};

  return (
    // Just so that we can use the company from the url of the page or else fallback to dummy user
    <ProviderWrapper
      user={{
        ...DUMMY_USER,
        company: company || DUMMY_USER.company,
      }}
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        {/* Dashboard content */}
        <div
          className={
            "bg-background relative flex w-full flex-1 flex-col md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 border rounded-md"
          }
        >
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <ResourceDetails />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </ProviderWrapper>
  );
}
