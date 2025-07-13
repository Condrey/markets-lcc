"use client";

import {
  BetweenHorizonalStartIcon,
  CircleParkingIcon,
  StretchHorizontalIcon,
  WarehouseIcon,
} from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavProjectItem } from "@/lib/types";

const projects: NavProjectItem[] = [
  {
    name: "Lockup",
    url: "/lockup",
    icon: WarehouseIcon,
  },
  {
    name: "Stall",
    url: "/stall",
    icon: StretchHorizontalIcon,
  },
  {
    name: "Open Space",
    url: "/open-space",
    icon: BetweenHorizonalStartIcon,
  },
  {
    name: "Parking",
    url: "/parking",
    icon: CircleParkingIcon,
  },
];

export function NavProjects() {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Revenue Points</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
