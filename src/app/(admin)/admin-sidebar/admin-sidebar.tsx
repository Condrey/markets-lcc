"use client";

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  StoreIcon,
} from "lucide-react";
import * as React from "react";

import { MarketSwitcher } from "@/app/(admin)/admin-sidebar/market-switcher";
import { NavMain } from "@/app/(admin)/admin-sidebar/nav-main";
import { NavProjects } from "@/app/(admin)/admin-sidebar/nav-projects";
import { NavUser } from "@/app/(admin)/admin-sidebar/nav-user";
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
        <NavMain  />
        <NavProjects />
      </SidebarContent>
      <SidebarFooter>
        <NavUser  />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
