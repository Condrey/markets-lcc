import { Prisma } from "@/app/generated/prisma";
import { LucideIcon } from "lucide-react";

export type Crumb ={
    label: string;
    href?: string;
}

export type NavMainSubItem = {
      title: string
      url: string
    }
export type NavMainItem=  {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: NavMainSubItem[]
  }

  export type NavProjectItem= {
    name: string
    url: string
    icon: LucideIcon
  }

  // Markets 
  export const marketDataInclude = {} satisfies Prisma.MarketInclude
  export type MarketData = Prisma.MarketGetPayload<{include: typeof marketDataInclude}>