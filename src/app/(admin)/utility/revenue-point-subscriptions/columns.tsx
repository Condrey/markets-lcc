"use client";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { RevenuePointSubscriptionData } from "@/lib/types";
import { formatLocalCurrency } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Edit3Icon, Trash2Icon } from "lucide-react";
import ButtonAddEditRevenuePointSubscription from "../../../../components/admin/revenue-point-subscription/button-add-edit-revenue-point-subscription";
import ButtonDeleteRevenuePointSubscription from "../../../../components/admin/revenue-point-subscription/button-delete-revenue-point-subscription";

export const useRevenuePointSubscriptionsColumn: ColumnDef<RevenuePointSubscriptionData>[] =
  [
    {
      id: "index",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="#" />
      ),
      cell: ({ row }) => (
        <span className="text-muted-foreground">{row.index + 1}</span>
      ),
    },
    {
      accessorKey: "subscriptionName",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Revenue Point Subscription Name"
        />
      ),
    },
    {
      accessorKey: "amount",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Subscribed Amount" />
      ),
      cell: ({ row }) => formatLocalCurrency(row.original.amount),
    },
    {
      id: "actions",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Action" />
      ),
      cell: ({ row }) => {
        const revenuePointSubscription = row.original;
        return (
          <div className="flex gap-2">
            <ButtonAddEditRevenuePointSubscription
              revenuePointSubscriptionToEdit={revenuePointSubscription}
              variant={"default"}
              size="icon"
            >
              <Edit3Icon />
            </ButtonAddEditRevenuePointSubscription>
            <ButtonDeleteRevenuePointSubscription
              revenuePointSubscription={revenuePointSubscription}
              variant={"destructive"}
              size="icon"
            >
              <Trash2Icon />
            </ButtonDeleteRevenuePointSubscription>
          </div>
        );
      },
    },
  ];
