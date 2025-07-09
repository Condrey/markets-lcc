import { MarketData } from "@/lib/types";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteMarket, upsertMarket } from "./action";

const queryKey: QueryKey = ["all-markets"];

export function useUpsertMarketMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: upsertMarket,
    async onSuccess(data, variables, context) {
      await queryClient.cancelQueries({ queryKey });
      queryClient.setQueryData<MarketData[]>(queryKey, (oldData) => {
        if (!oldData) return;
        if (!variables.id) {
          return [data, ...oldData];
        }
        return oldData.map((d) => (d.id === data.id ? data : d));
      });
      toast.success(
        `Successfully ${!variables.id ? "Created" : "Updated"} the market entry`
      );
    },
    onError(error, variables, context) {
      console.error(error);
      toast.error(
        `Failed to ${!variables.id ? "create" : "update"} ${variables.name}`
      );
    },
  });
}

export function useDeleteMarketMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteMarket,
    async onSuccess(data, variables, context) {
      await queryClient.cancelQueries({ queryKey });
      queryClient.setQueryData<MarketData[]>(
        queryKey,
        (oldData) => oldData && oldData.filter((d) => d.id !== data.id)
      );
      toast.success(`Successfully deleted ${data.name} market entry`);
    },
    onError(error, variables, context) {
      console.error(error);
      toast.error(`Failed to delete this market`);
    },
  });
}
