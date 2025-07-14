"use client";

import { NumberInput } from "@/components/number-input/number-input";
import ResponsiveDrawer from "@/components/responsive-drawer";
import {
  Form,
  FormControl,
  FormField,
  FormFooter,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/ui/loading-button";
import { RevenuePointSubscriptionData } from "@/lib/types";
import {
  revenuePointSubscriptionSchema,
  RevenuePointSubscriptionSchema,
} from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUpsertRevenuePointSubscriptionMutation } from "./mutation";

interface FormAddEditRevenuePointSubscriptionProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  revenuePointSubscriptionToEdit?: RevenuePointSubscriptionData;
}

export default function FormAddEditRevenuePointSubscription({
  open,
  setOpen,
  revenuePointSubscriptionToEdit,
}: FormAddEditRevenuePointSubscriptionProps) {
  const form = useForm<RevenuePointSubscriptionSchema>({
    resolver: zodResolver(revenuePointSubscriptionSchema),
    defaultValues: {
      id: revenuePointSubscriptionToEdit?.id || "",
      subscriptionName: revenuePointSubscriptionToEdit?.subscriptionName || "",
      amount: revenuePointSubscriptionToEdit?.amount,
    },
  });
  const { mutate, isPending } = useUpsertRevenuePointSubscriptionMutation();

  function submitForm(input: RevenuePointSubscriptionSchema) {
    mutate(input, { onSuccess: () => setOpen(false) });
  }
  return (
    <ResponsiveDrawer
      open={open}
      setOpen={setOpen}
      title={
        revenuePointSubscriptionToEdit
          ? "Update Revenue Point Subscription"
          : "Create a new Revenue Point Subscription"
      }
    >
      <Form {...form}>
        <div  className="space-y-4">
          <FormField
            control={form.control}
            name="subscriptionName"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Revenue Point Subscription</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., Trading license Lockup"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Amount</FormLabel>
                <FormControl>
                  <NumberInput placeholder="e.g., 50,000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormFooter>
            <LoadingButton loading={isPending} type='button' onClick={()=>form.handleSubmit(submitForm)()}>
              {revenuePointSubscriptionToEdit ? "Update" : "Create"}
            </LoadingButton>
          </FormFooter>
        </div>
      </Form>
    </ResponsiveDrawer>
  );
}
