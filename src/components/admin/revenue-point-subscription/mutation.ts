import { RevenuePointSubscriptionData } from "@/lib/types";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  deleteRevenuePointSubscription,
  upsertRevenuePointSubscription,
} from "./action";

const queryKey: QueryKey = ["all-revenuePointSubscriptions"];

export function useUpsertRevenuePointSubscriptionMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: upsertRevenuePointSubscription,
    async onSuccess(data, variables, context) {
      await queryClient.cancelQueries({ queryKey });
      queryClient.setQueryData<RevenuePointSubscriptionData[]>(
        queryKey,
        (oldData) => {
          if (!oldData) return;
          if (!variables.id) {
            return [data, ...oldData];
          }
          return oldData.map((d) => (d.id === data.id ? data : d));
        }
      );
      toast.success(
        `Successfully ${
          !variables.id ? "Created" : "Updated"
        } the Revenue Point Subscription entry`
      );
    },
    onError(error, variables, context) {
      console.error(error);
      toast.error(
        `Failed to ${!variables.id ? "create" : "update"} ${
          variables.subscriptionName
        }`
      );
    },
  });
}

export function useDeleteRevenuePointSubscriptionMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteRevenuePointSubscription,
    async onSuccess(data, variables, context) {
      await queryClient.cancelQueries({ queryKey });
      queryClient.setQueryData<RevenuePointSubscriptionData[]>(
        queryKey,
        (oldData) => oldData && oldData.filter((d) => d.id !== data.id)
      );
      toast.success(
        `Successfully deleted ${data.subscriptionName} Revenue Point Subscription entry`
      );
    },
    onError(error, variables, context) {
      console.error(error);
      toast.error(`Failed to delete this Revenue Point Subscription`);
    },
  });
}
