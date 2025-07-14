import { RevenuePointType, Role } from "@/generated/prisma";
import { BetweenHorizonalEndIcon, LucideIcon, PentagonIcon, WarehouseIcon, StretchHorizontalIcon, User2Icon, UserLockIcon, UserPenIcon } from "lucide-react";

const allRoles = Object.values(Role);
export const myPrivileges: Record<Role, Role[]> = {
  SUPER_ADMIN: allRoles,
  ADMIN: allRoles.filter(role => role !== "SUPER_ADMIN"),
  MODERATOR: allRoles.filter(role => !["SUPER_ADMIN", "ADMIN"].includes(role)),
  ASSOCIATE: ["USER"],
  USER: [],
};

export const userTypes: Record<Role,{role:string, icon:LucideIcon}>={
  USER: {
    role: "Civilian",
    icon: User2Icon
  },
  ADMIN: {
    role: "Market Master",
    icon: UserLockIcon
  },
  MODERATOR: {
    role: "Asst Market Master",
    icon: UserLockIcon
  },
  ASSOCIATE: {
    role: "Associate staff",
    icon: UserPenIcon
  },
  SUPER_ADMIN: {
    role: "Super administrator",
    icon: PentagonIcon
  }
}
export const revenuePointTypes: Record<RevenuePointType,{type:string, icon:LucideIcon}>={
  LOCKUP: {
    type: "Lockup",
    icon: WarehouseIcon
  }, STALL: {
    type: "Stall",
    icon: StretchHorizontalIcon
  },
  OPEN_SPACE: {
    type: "Open space",
    icon: BetweenHorizonalEndIcon

  },
 
}