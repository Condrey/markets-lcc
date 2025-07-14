import { Prisma } from "@/app/generated/prisma";
import { LucideIcon } from "lucide-react";

export type Crumb = {
  label: string;
  href?: string;
};

export type NavMainSubItem = {
  title: string;
  url: string;
};
export type NavMainItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: NavMainSubItem[];
};

export type NavProjectItem = {
  name: string;
  url: string;
  icon: LucideIcon;
};

// User
export const userDataSelect = {
  id: true,
  name: true,
  username: true,
  avatarUrl: true,
  email: true,
  telephone: true,
  role: true,
} satisfies Prisma.UserSelect;
export type UserData = Prisma.UserGetPayload<{
  select: typeof userDataSelect;
}>;


// Revenue Point subscription
export const revenuePointSubscriptionDataInclude = {} satisfies Prisma.RevenuePointSubscriptionInclude;
export type RevenuePointSubscriptionData = Prisma.RevenuePointSubscriptionGetPayload<{
  include: typeof revenuePointSubscriptionDataInclude;
}>;

// Revenue Point 
export const revenuePointDataInclude = {
  subscriptions:true
} satisfies Prisma.RevenuePointInclude;
export type RevenuePointData = Prisma.RevenuePointGetPayload<{
  include: typeof revenuePointDataInclude;
}>;

// Markets
export const marketDataInclude = {} satisfies Prisma.MarketInclude;
export type MarketData = Prisma.MarketGetPayload<{
  include: typeof marketDataInclude;
}>;


