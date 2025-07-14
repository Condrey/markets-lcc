"use client";

import { getAllRevenuePointSubscriptions } from "@/components/admin/revenue-point-subscription/action";
import ButtonAddEditRevenuePointSubscription from "@/components/admin/revenue-point-subscription/button-add-edit-revenue-point-subscription";
import ButtonDeleteRevenuePointSubscription from "@/components/admin/revenue-point-subscription/button-delete-revenue-point-subscription";
import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatLocalCurrency } from "@/lib/utils";
import { RevenuePointSchema } from "@/lib/validation";
import { useQuery } from "@tanstack/react-query";
import { Edit3Icon, Loader2Icon, PlusIcon, Trash2Icon } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

interface FormSubscriptionsProps {
  form: UseFormReturn<RevenuePointSchema>;
}

export default function FormSubscriptions({ form }: FormSubscriptionsProps) {
  const query = useQuery({
    queryKey: ["all-revenuePointSubscriptions"],
    queryFn: getAllRevenuePointSubscriptions,
  });

  const { data, status } = query;
  if (status === "pending")
    return (
      <EmptyContainer
        message={"Fetching subscriptions..."}
        className="min-h-fit"
      >
        <Loader2Icon className="animate-spin size-6" />
      </EmptyContainer>
    );
  if (status === "error")
    return (
      <ErrorContainer
        errorMessage="Failed to get subscriptions"
        query={query}
        className="min-h-fit"
      />
    );
  if (status === "success" && !data.length)
    return (
      <EmptyContainer
        message={"There are no subscriptions in the system yet. Please add."}
        className="min-h-fit"
      >
        <ButtonAddEditRevenuePointSubscription
          variant={"secondary"}
          type="button"
        >
          Create a subscription
        </ButtonAddEditRevenuePointSubscription>
      </EmptyContainer>
    );
  return (
    <>
      <ScrollArea className="max-h-[150px] w-full">
        {data!.map((item) => (
          <FormField
            key={item.id}
            control={form.control}
            name="subscriptions"
            render={({ field }) => {
              return (
                <FormItem
                  key={item.id}
                  className="flex flex-row items-center gap-2"
                >
                  <FormControl>
                    <Checkbox
                      checked={
                        !field.value
                          ? false
                          : field.value.map((f) => f.id).includes(item.id)
                      }
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange([...field.value, item])
                          : field.onChange(
                              field.value?.filter(
                                (value) => value.id !== item.id
                              )
                            );
                      }}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    {item.subscriptionName}{" "}
                    <span className="text-muted-foreground text-xs">
                      ({formatLocalCurrency(item.amount)})
                    </span>
                    <ButtonAddEditRevenuePointSubscription
                      revenuePointSubscriptionToEdit={item}
                      size={"icon"}
                      variant={"ghost"}
                      type="button"
                      className="*:text-muted-foreground"
                    >
                      <Edit3Icon />
                    </ButtonAddEditRevenuePointSubscription>
                    <ButtonDeleteRevenuePointSubscription
                      revenuePointSubscription={item}
                      size="icon"
                      variant="ghost"
                      type="button"
                      className="*:text-muted-foreground"
                    >
                      <Trash2Icon />
                    </ButtonDeleteRevenuePointSubscription>
                  </FormLabel>
                </FormItem>
              );
            }}
          />
        ))}
      </ScrollArea>
      {!!data.length && (
        <ButtonAddEditRevenuePointSubscription
          variant={"outline"}
          className="w-full"
          type="button"
        >
          <PlusIcon className="mr-2 size-4" /> Add a new subscription
        </ButtonAddEditRevenuePointSubscription>
      )}
    </>
  );
}
