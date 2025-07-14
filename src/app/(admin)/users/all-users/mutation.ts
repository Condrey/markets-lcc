import { UserData } from "@/lib/types";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteUser, upsertUser } from "./action";

const queryKey: QueryKey = ["all-users"];

export function useUpsertUserMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: upsertUser,
    async onSuccess(data, variables, context) {
      await queryClient.cancelQueries({ queryKey });
      queryClient.setQueryData<UserData[]>(queryKey, (oldData) => {
        if (!oldData) return;
        if (!variables.id) {
          return [data, ...oldData];
        }
        return oldData.map((d) => (d.id === data.id ? data : d));
      });
      toast.success(
        `Successfully ${!variables.id ? "Created" : "Updated"} the user entry`,
      );
    },
    onError(error, variables, context) {
      console.error(error);
      toast.error(
        `Failed to ${!variables.id ? "create" : "update"} ${variables.name}`,
      );
    },
  });
}

export function useDeleteUserMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    async onSuccess(data, variables, context) {
      await queryClient.cancelQueries({ queryKey });
      queryClient.setQueryData<UserData[]>(
        queryKey,
        (oldData) => oldData && oldData.filter((d) => d.id !== data.id),
      );
      toast.success(`Successfully deleted ${data.name} user entry`);
    },
    onError(error, variables, context) {
      console.error(error);
      toast.error(`Failed to delete this user`);
    },
  });
}
