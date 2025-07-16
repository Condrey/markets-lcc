"use client";

import { ChevronsUpDown, Loader2Icon, Plus, StoreIcon } from "lucide-react";

import { Role } from "@/app/generated/prisma";
import { useSession } from "@/app/session-provider";
import FormAddEditMarket from "@/components/admin/market/form-add-edit-market";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LoadingButton from "@/components/ui/loading-button";
import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { PARAM_NAME_MARKET } from "@/lib/constants";
import { myPrivileges } from "@/lib/enums";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { useMarketQuery } from "../market/query";

interface MarketSwitcherProps {
  pathname?: string;
}

export default function MarketSwitcher({ pathname }: MarketSwitcherProps) {
  const [openAddItemDialog, setOpenAddItemDialog] = useState(false);

  const { user } = useSession();
  const canAddMarkets = !!user && myPrivileges[user.role].includes(Role.ADMIN);
  const { navigateOnclick } = useCustomSearchParams();
  const [isPending, startTransition] = useTransition();

  const { data, status, isFetching, refetch, error } = useMarketQuery();

  const { isMobile } = useSidebar();

  const searchParams = useSearchParams();

  const searchParamMarket = searchParams.get(PARAM_NAME_MARKET) ?? undefined;

  if (status === "pending") {
    return <MarketSwitcherFallback />;
  }
  if (status === "error") {
    console.error(error);
    toast.error("Alert", {
      description: "Error occurred while fetching academic markets.",
    });
    return (
      <LoadingButton
        loading={isFetching}
        variant={"destructive"}
        onClick={() => refetch()}
      >
        Refetch Markets
      </LoadingButton>
    );
  }
  if (status === "success" && !data.length) {
    return;
  }
  const activeMarket = data.find(
    (l) => l.name.toLowerCase() === searchParamMarket?.toLowerCase()
  );

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton  size="lg" className="w-full flex ">
            <div className="flex flex-row  h-fit w-full flex-1  max-w-sm justify-between items-center px-4 py-2 gap-2 space-x-2">
              <div
                className={cn(
                  "flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground",
                  
                )}
              >
                {!isPending?<StoreIcon className="size-4" />:<Loader2Icon className="size-4 animate-spin" />}
              </div>
              <div className=" flex flex-col flex-1  text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {!activeMarket ? "All markets" : activeMarket.name}
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  {!activeMarket
                    ? "Showing all markets"
                    : activeMarket.location}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </div>
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-fit min-w-56 rounded-lg"
          align="start"
          side={isMobile ? "bottom" : "right"}
          sideOffset={4}
        >
          <DropdownMenuLabel className="text-xs text-muted-foreground">
            LCC markets
          </DropdownMenuLabel>
          <DropdownMenuItem
            onClick={async () =>
              startTransition(() =>
                navigateOnclick(PARAM_NAME_MARKET, "", pathname)
              )
            }
            className="gap-2 p-2"
          >
            <div className="flex size-6 items-center justify-center rounded-sm border">
              <StoreIcon className="size-4 shrink-0" />
            </div>
            All markets
          </DropdownMenuItem>
          {data.map((item) => {
            return (
              <DropdownMenuItem
                key={item.id}
                onClick={async () =>
                  startTransition(() =>
                    navigateOnclick(PARAM_NAME_MARKET, item.name, pathname)
                  )
                }
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  <StoreIcon className="size-4 shrink-0" />
                </div>
                {item.name}
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          {canAddMarkets && (
            <DropdownMenuItem
              className="gap-2 p-2"
              onClick={() => setOpenAddItemDialog(true)}
            >
              <div className="flex size-6 items-center justify-center">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">
                Add market
              </div>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <FormAddEditMarket
        open={openAddItemDialog}
        setOpen={setOpenAddItemDialog}
      />
    </>
  );
}

export function MarketSwitcherFallback() {
  return (
    <Button
      size="lg"
      variant={"outline"}
      className="flex h-fit w-full max-w-sm justify-between px-4 py-2"
    >
      <Skeleton className="flex aspect-square size-8 rounded-lg bg-sidebar-primary">
        <Skeleton className="size-4" />
      </Skeleton>
      <div className="grid flex-1 space-y-1">
        <Skeleton className="h-5 w-1/4" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <Skeleton className="ml-auto size-6" />
    </Button>
  );
}
