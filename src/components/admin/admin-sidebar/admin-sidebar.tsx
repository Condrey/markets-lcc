"use client";

import * as React from "react";

import MarketSwitcher from "@/components/admin/admin-sidebar/market-switcher";
import { NavMain } from "@/components/admin/admin-sidebar/nav-main";
import { NavProjects } from "@/components/admin/admin-sidebar/nav-projects";
import { NavUser } from "@/components/admin/admin-sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <MarketSwitcher />
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
