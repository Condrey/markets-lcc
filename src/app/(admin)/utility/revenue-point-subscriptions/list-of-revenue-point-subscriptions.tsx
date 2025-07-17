"use client";

import { getAllRevenuePointSubscriptions } from "@/components/admin/revenue-point-subscription/action";
import { DataTable } from "@/components/data-table/data-table";
import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { RevenuePointSubscriptionData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { PlusIcon } from "lucide-react";
import ButtonAddEditRevenuePointSubscription from "../../../../components/admin/revenue-point-subscription/button-add-edit-revenue-point-subscription";
import { useRevenuePointSubscriptionsColumn } from "./columns";

interface ListOfRevenuePointSubscriptionsProps {
  revenuePointSubscriptions: RevenuePointSubscriptionData[];
}
export default function ListOfRevenuePointSubscriptions({
  revenuePointSubscriptions,
}: ListOfRevenuePointSubscriptionsProps) {
  const query = useQuery({
    queryKey: ["all-revenuePointSubscriptions"],
    queryFn: getAllRevenuePointSubscriptions,
    initialData: revenuePointSubscriptions,
  });

  const { data, status } = query;
  return (
    <div>
      {status === "error" ? (
        <ErrorContainer
          errorMessage="Failed to fetch Revenue Point Subscription list. Please try again!"
          query={query}
        />
      ) : status === "success" && !data.length ? (
        <EmptyContainer
          message={
            "There are no Revenue Point Subscriptions added to the system yet."
          }
        >
          <ButtonAddEditRevenuePointSubscription>
            Create a new one
          </ButtonAddEditRevenuePointSubscription>
        </EmptyContainer>
      ) : (
        <DataTable
          columns={useRevenuePointSubscriptionsColumn}
          data={data}
          filterColumn={{ id: "subscriptionName", label: "subscription" }}
        >
          <ButtonAddEditRevenuePointSubscription>
            <PlusIcon /> new
          </ButtonAddEditRevenuePointSubscription>
        </DataTable>
      )}
    </div>
  );
}
