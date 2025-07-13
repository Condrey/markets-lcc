"use client";

import { BadgeCheck, ChevronsUpDown, LogOut } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useSession } from "@/app/session-provider";
import { cn } from "@/lib/utils";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import LoadingButton from "@/components/ui/loading-button";
import { useTransition } from "react";
import LogoutButton from "@/app/(auth)/(database)/logout/logout-button";

export function NavUser() {
  const { isMobile } = useSidebar();
  const { user } = useSession();
  const { navigateOnclickWithPathnameWithoutUpdate } = useCustomSearchParams();
  const [isPending, startTransition] = useTransition();
  if (!user) return null;
  const initials = (user.name || "UE")
    .split(" ")
    .map((value) => value.charAt(0).toUpperCase())
    .join();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  src={user.avatarUrl!}
                  alt={user.username || user.name}
                />
                <AvatarFallback className="rounded-lg">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatarUrl!} alt={user.name} />
                  <AvatarFallback className="rounded-lg">
                    {" "}
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <LoadingButton
                loading={isPending}
                className="w-full justify-start "
                variant={"ghost"}
                onClick={() =>
                  startTransition(() =>
                    navigateOnclickWithPathnameWithoutUpdate("/user-details"),
                  )
                }
                asChild
              >
                <DropdownMenuItem>
                  <BadgeCheck
                    className={cn(
                      "text-muted-foreground  size-6",
                      user.isVerified && "fill-green-500 text-card",
                    )}
                  />
                  Account Info
                </DropdownMenuItem>
              </LoadingButton>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <LogoutButton
              className="w-full justify-start "
              variant={"ghost"}
              asChild
            >
              <DropdownMenuItem>
                <LogOut />
                Log out
              </DropdownMenuItem>
            </LogoutButton>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
