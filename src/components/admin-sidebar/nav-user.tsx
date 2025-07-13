"use client";

import {
  BadgeCheck,
  CheckIcon,
  ChevronsUpDown,
  LogOut,
  LucideIcon,
  MonitorIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";

import LogoutButton from "@/app/(auth)/(database)/logout/logout-button";
import { useSession } from "@/app/session-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LoadingButton from "@/components/ui/loading-button";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useTransition } from "react";

export function NavUser() {
  const { isMobile } = useSidebar();
  const { user } = useSession();
  const { navigateOnclickWithPathnameWithoutUpdate } = useCustomSearchParams();
  const [isPending, startTransition] = useTransition();
  const { setTheme, theme } = useTheme();
  const themes: { theme: string; icon: LucideIcon }[] = [
    { theme: "system", icon: MonitorIcon },
    { theme: "light", icon: SunIcon },
    { theme: "dark", icon: MoonIcon },
  ];

  if (!user) return null;
  const initials = (user.name || "UE")
    .split(" ")
    .slice(0, 2)
    .map((value) => value.charAt(0).toUpperCase())
    .join(".");
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="size-8 rounded-full">
                <AvatarImage
                  src={user.avatarUrl!}
                  alt={user.username || user.name}
                />
                <AvatarFallback className="rounded-full bg-sidebar-primary  text-sidebar-primary-foreground">
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
                    navigateOnclickWithPathnameWithoutUpdate("/user-details")
                  )
                }
                asChild
              >
                <DropdownMenuItem>
                  <BadgeCheck
                    className={cn(
                      "text-muted-foreground  size-6",
                      user.isVerified && "fill-green-500 text-card"
                    )}
                  />
                  Account Info
                </DropdownMenuItem>
              </LoadingButton>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className=" capitalize">
                  <SunIcon className="size-4 mr-2 ms-3" /> Theme ({theme})
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    {themes.map((t) => {
                      const Icon = t.icon;
                      return (
                        <DropdownMenuItem
                          key={t.theme}
                          onClick={() => setTheme(t.theme)}
                        >
                          <Icon className="size-4 mr-2" /> {t.theme}{" "}
                          {theme === t.theme && (
                            <CheckIcon className="size-4" />
                          )}
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
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
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
