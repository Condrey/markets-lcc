"use client";

import { StoreIcon } from "lucide-react";
import * as React from "react";

import { MarketSwitcher } from "@/components/admin-sidebar/market-switcher";
import { NavMain } from "@/components/admin-sidebar/nav-main";
import { NavProjects } from "@/components/admin-sidebar/nav-projects";
import { NavUser } from "@/components/admin-sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  markets: [
    {
      name: "Lira Main Market",
      logo: StoreIcon,
      location: "Olwol road, Lira",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <MarketSwitcher markets={data.markets} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavProjects />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
