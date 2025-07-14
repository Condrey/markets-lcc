"use client";

import {
  ChevronRight,
  CoinsIcon,
  MegaphoneIcon,
  ReceiptIcon,
  SettingsIcon,
  StoreIcon,
  Users2Icon,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { NavMainItem } from "@/lib/types";
import Link from "next/link";

const items: NavMainItem[] = [
  {
    title: "Utility",
    url: "/users",
    icon: SettingsIcon,
    isActive: true,
    items: [
      {
        title: "Revenue Point Subscriptions",
        url: "/utility/revenue-point-subscriptions",
      },
      {
        title: "Revenue Point types",
        url: "/utility/revenue-point-types",
      },
    ],
  }, {
    title: "Users",
    url: "/users",
    icon: Users2Icon,
    isActive: false,
    items: [
      {
        title: "All users",
        url: "/users/all-users",
      },
      {
        title: "Defaulters",
        url: "/users/defaulters",
      },
      {
        title: "Previous Users",
        url: "/users/previous-users",
      },
      {
        title: "Deleted users",
        url: "/users/deleted-users",
      },
    ],
  },
  {
    title: "Payments",
    url: "/payments",
    icon: CoinsIcon,

    items: [
      {
        title: "Market Rent",
        url: "/payments/market-rent",
      },
      {
        title: "Ground Rent",
        url: "/payments/ground-rent",
      },
      {
        title: "Property Tax",
        url: "/payments/property-tax",
      },
      {
        title: "Trading License",
        url: "/payments/trading-license",
      },
      {
        title: "Operational Permit",
        url: "/payments/operational-permit",
      },
      {
        title: "Electricity Bill",
        url: "/payments/electricity-bill",
      },
      {
        title: "Garbage Fee",
        url: "/payments/garbage-fee",
      },
      {
        title: "Gate fee or dues",
        url: "/payments/gate-dues",
      },
    ],
  },

  {
    title: "Receipts",
    url: "/receipts",
    icon: ReceiptIcon,
    items: [],
  },
  {
    title: "Bulk Notifications",
    url: "/bulk-notifications",
    icon: MegaphoneIcon,
    items: [],
  },
  {
    title: "Markets",
    url: "/markets",
    icon: StoreIcon,
    items: [],
  },
];

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Navigation</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const subItems = item.items || [];
          const Icon = item.icon;
          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                {!subItems.length ? (
                  <SidebarMenuButton tooltip={item.title} asChild>
                    <Link href={item.url}>
                      {Icon && <Icon />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                ) : (
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {Icon && <Icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                )}
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {subItems?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <Link href={subItem.url}>
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
