import { RevenuePointData } from "@/lib/types";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteRevenuePoint, upsertRevenuePoint } from "./action";

const queryKey: QueryKey = ["all-revenuePoints"];

export function useUpsertRevenuePointMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: upsertRevenuePoint,
    async onSuccess(data, variables, context) {
      await queryClient.cancelQueries({ queryKey });
      queryClient.setQueryData<RevenuePointData[]>(queryKey, (oldData) => {
        if (!oldData) return;
        if (!variables.id) {
          return [data, ...oldData];
        }
        return oldData.map((d) => (d.id === data.id ? data : d));
      });
      toast.success(
        `Successfully ${!variables.id ? "Created" : "Updated"} the Revenue Point  entry`,
      );
    },
    onError(error, variables, context) {
      console.error(error);
      toast.error(
        `Failed to ${!variables.id ? "create" : "update"} ${variables.revenuePointName}`,
      );
    },
  });
}

export function useDeleteRevenuePointMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteRevenuePoint,
    async onSuccess(data, variables, context) {
      await queryClient.cancelQueries({ queryKey });
      queryClient.setQueryData<RevenuePointData[]>(
        queryKey,
        (oldData) => oldData && oldData.filter((d) => d.id !== data.id),
      );
      toast.success(`Successfully deleted ${data.revenuePointName} Revenue Point  entry`);
    },
    onError(error, variables, context) {
      console.error(error);
      toast.error(`Failed to delete this Revenue Point `);
    },
  });
}
