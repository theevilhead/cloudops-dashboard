import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
} from "@/components/ui/sidebar"

import { ProviderWrapper } from "@/components/providers/provider-wrapper"
import { dummyUser } from "@/data/user"
import data from "./data.json"

export default async function Dashboard({
  params,
}: {
  params: Promise<{ company: string }>
}) {

  const { company } = await params || {};

  return (
    // Just so that we can use the company from the url of the page or else fallback to dummy user
    <ProviderWrapper user={{ ...dummyUser, company: company || dummyUser.company }}>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        {/* Dashboard content */}
        <div className={"bg-background relative flex w-full flex-1 flex-col md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 border rounded-md"
        }>
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <SectionCards />
                <div className="px-4 lg:px-6">
                  <ChartAreaInteractive />
                </div>
                <DataTable data={data} />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </ProviderWrapper>
  )
}
