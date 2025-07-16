"use client";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { MarketData } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { Edit3Icon, Trash2Icon } from "lucide-react";
import ButtonAddEditMarket from "../../../components/admin/market/button-add-edit-market";
import ButtonDeleteMarket from "../../../components/admin/market/button-delete-market";

export const useMarketsColumn: ColumnDef<MarketData>[] = [
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
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location" />
    ),
  },
  {
    accessorKey: "mapCoordinates",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Map Coordinates" />
    ),
  },
  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: ({ row }) => {
      const market = row.original;
      return (
        <div className="flex gap-2">
          <ButtonAddEditMarket
            marketToEdit={market}
            variant={"default"}
            size="icon"
          >
            <Edit3Icon />
          </ButtonAddEditMarket>
          <ButtonDeleteMarket
            market={market}
            variant={"destructive"}
            size="icon"
          >
            <Trash2Icon />
          </ButtonDeleteMarket>
        </div>
      );
    },
  },
];
