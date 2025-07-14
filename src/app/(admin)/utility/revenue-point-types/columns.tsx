"use client";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { revenuePointTypes } from "@/lib/enums";
import { RevenuePointData } from "@/lib/types";
import { formatLocalCurrency } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Edit3Icon, Trash2Icon } from "lucide-react";
import ButtonAddEditRevenuePoint from "./button-add-edit-revenue-point";
import ButtonDeleteRevenuePoint from "./button-delete-revenue-point";

export const useRevenuePointsColumn: ColumnDef<RevenuePointData>[] = [
  {
    id: "index",
    header: ({ column }) => <DataTableColumnHeader column={column} title="#" />,
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.index + 1}</span>
    ),
  },
  {
    accessorKey: "revenuePointName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Revenue Point Name" />
    ),
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Revenue Point Type" />
    ),
    cell: ({ row }) => {
      const { icon, type } = revenuePointTypes[row.original.type];
      const Icon = icon;
      return (
        <div className="flex">
          <Icon className="size-4 mr-2" />
          {type}
        </div>
      );
    },
  },
  {
    accessorKey: "subscriptions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Subscriptions" />
    ),
    cell: ({ row }) => {
      const subscriptions = row.original.subscriptions;
      const subscriptionNumber = subscriptions.length;
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="text-primary">
              {subscriptionNumber} subscription
              {subscriptionNumber === 1 ? "" : "s"}
            </TooltipTrigger>
            <TooltipContent className="w-full md:max-w-sm">
              {!subscriptions.length ? (
                <p >No subscriptions to display</p>
              ) : (
                <div className=" divide-x">
                  {subscriptions.map(({ amount, subscriptionName, id }) => (
                    <Badge key={id}>
                      {subscriptionName}{" "}
                      <span className="text-xs">
                        ({formatLocalCurrency(amount)})
                      </span>
                    </Badge>
                  ))}
                </div>
              )}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
  {
    id: "total",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cumulative Amount" />
    ),
    cell:({row})=>{
      const subscriptionsAmount = row.original.subscriptions.map(s=>s.amount).reduce((amount,total)=>amount+total,0);
      return <span>{formatLocalCurrency(subscriptionsAmount)}</span>
    }
  },

  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: ({ row }) => {
      const revenuePoint = row.original;
      return (
        <div className="flex gap-2">
          <ButtonAddEditRevenuePoint
            revenuePointToEdit={revenuePoint}
            variant={"default"}
            size="icon"
          >
            <Edit3Icon />
          </ButtonAddEditRevenuePoint>
          <ButtonDeleteRevenuePoint
            revenuePoint={revenuePoint}
            variant={"destructive"}
            size="icon"
          >
            <Trash2Icon />
          </ButtonDeleteRevenuePoint>
        </div>
      );
    },
  },
];
