"use client";

import { DataTable } from "@/components/data-table/data-table";
import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { RevenuePointData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { PlusIcon } from "lucide-react";
import { getAllRevenuePoints } from "./action";
import ButtonAddEditRevenuePoint from "./button-add-edit-revenue-point";
import { useRevenuePointsColumn } from "./columns";

interface ListOfRevenuePointsProps {
  revenuePoints: RevenuePointData[];
}
export default function ListOfRevenuePoints({
  revenuePoints,
}: ListOfRevenuePointsProps) {
  const query = useQuery({
    queryKey: ["all-revenuePoints"],
    queryFn: getAllRevenuePoints,
    initialData: revenuePoints,
  });

  const { data, status } = query;
  return (
    <div>
      {status === "error" ? (
        <ErrorContainer
          errorMessage="Failed to fetch Revenue Point types. Please try again!"
          query={query}
        />
      ) : status === "success" && !data.length ? (
        <EmptyContainer
          message={
            "There are no Revenue Point types added to the system yet."
          }
        >
          <ButtonAddEditRevenuePoint>
            Create a new one
          </ButtonAddEditRevenuePoint>
        </EmptyContainer>
      ) : (
        <DataTable
          columns={useRevenuePointsColumn}
          data={data}
          filterColumn={{ id: "name", label: "" }}
        >
          <ButtonAddEditRevenuePoint>
            <PlusIcon /> new
          </ButtonAddEditRevenuePoint>
        </DataTable>
      )}
    </div>
  );
}
