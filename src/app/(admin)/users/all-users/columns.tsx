"use client";

import { Role } from "@/app/generated/prisma";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { revenuePointTypes, userTypes } from "@/lib/enums";
import { UserData } from "@/lib/types";
import { getGradientWithTextColor, getInitials } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import DropdownMenuUser from "./drop-down-menu-user";

export const useUsersColumn: ColumnDef<UserData>[] = [
  {
    id: "index",
    header: ({ column }) => <DataTableColumnHeader column={column} title="#" />,
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.index + 1}</span>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="User credentials" />
    ),
    cell: ({ row }) => {
      const { avatarUrl, username, name, telephone, email } = row.original;
      const initials = getInitials(name);
      const className = "hover:underline text-primary";
      const { textColor, background, boxShadow } =
        getGradientWithTextColor(name);
      return (
        <div className="flex gap-2">
          <Avatar className="size-10">
            <AvatarImage src={avatarUrl!} alt={username || "user image"} />
            <AvatarFallback style={{ background, boxShadow, color: textColor }}>
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <div>{name}</div>
            <div className="text-xs text-muted-foreground ">
              {!!telephone ? (
                <Link className={className} href={`tel:${telephone}`}>
                  {telephone}
                </Link>
              ) : !!email ? (
                <Link className={className} href={`mailto:${email}`}>
                  {email}
                </Link>
              ) : !!username ? (
                `@${username}`
              ) : (
                "No contact provided"
              )}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="User privilege" />
    ),
    cell: ({ row }) => {
      const user = row.original;
      const { icon, role } = userTypes[user.role];
      const Icon = icon;
      return (
        <Badge
          variant={
            user.role === Role.ADMIN
              ? "destructive"
              : user.role === Role.MODERATOR
              ? "secondary"
              : user.role === Role.ASSOCIATE
              ? "default"
              : "outline"
          }
          className="inline-flex place-items-start place-content-start w-full"
        >
          <Icon className="w-4 h-4 shrink-0 flex-none" />
          {role}
        </Badge>
      );
    },
  },
  {
    accessorKey: "userRevenuePoints",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="User Assigned Revenue Points"
      />
    ),
    cell: ({ row }) => {
      const userRevenuePoints = row.original.userRevenuePoints || [];
      return (
        <div>
          {!userRevenuePoints.length ? (
            <span className="italic text-muted-foreground">
              --No revenue pts assigned--
            </span>
          ) : (
            <div className="flex gap-2 flex-wrap">
              {userRevenuePoints?.map((rp) => {
                const { icon } = revenuePointTypes[rp.revenuePoint.type];
                const Icon = icon;
                return (
                  <Badge key={rp.revenuePointId} variant={"secondary"}>
                    <Icon className="size-4" />
                    <span>{rp.revenuePoint.revenuePointName}</span>
                  </Badge>
                );
              })}
            </div>
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: ({ row }) => {
      const user = row.original;
      return <DropdownMenuUser user={user} />;
    },
  },
];
