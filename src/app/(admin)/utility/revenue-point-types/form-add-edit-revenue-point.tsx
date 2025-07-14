"use client";

import { RevenuePointType } from "@/app/generated/prisma";
import ResponsiveDrawer from "@/components/responsive-drawer";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormFooter,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/ui/loading-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { revenuePointTypes } from "@/lib/enums";
import { RevenuePointData } from "@/lib/types";
import { revenuePointSchema, RevenuePointSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormSubscriptions from "./form-subscriptions";
import { useUpsertRevenuePointMutation } from "./mutation";

interface FormAddEditRevenuePointProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  revenuePointToEdit?: RevenuePointData;
}

export default function FormAddEditRevenuePoint({
  open,
  setOpen,
  revenuePointToEdit,
}: FormAddEditRevenuePointProps) {
  const form = useForm<RevenuePointSchema>({
    resolver: zodResolver(revenuePointSchema),
    defaultValues: {
      id: revenuePointToEdit?.id || "",
      revenuePointName: revenuePointToEdit?.revenuePointName,
      type: revenuePointToEdit?.type,
      subscriptions: revenuePointToEdit?.subscriptions || [],
    },
  });
  const { mutate, isPending } = useUpsertRevenuePointMutation();

  function submitForm(input: RevenuePointSchema) {
    mutate(input, { onSuccess: () => setOpen(false) });
  }
  return (
    <ResponsiveDrawer
      open={open}
      setOpen={setOpen}
      title={
        revenuePointToEdit
          ? "Update Revenue Point "
          : "Create a new Revenue Point "
      }
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitForm)} className="space-y-4">
          <FormField
            control={form.control}
            name="revenuePointName"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Revenue Point Name </FormLabel>
                <FormControl>
                  <Input placeholder="e.g., level one open space" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Revenue Point Type </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a revenue point type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(RevenuePointType).map((rpt) => {
                      const { icon, type } = revenuePointTypes[rpt];
                      const Icon = icon;
                      return (
                        <SelectItem key={rpt} value={rpt}>
                          <Icon className="size-4 mr-2" /> {type}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subscriptions"
            render={({ field }) => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base" required>Subscriptions</FormLabel>
                  <FormDescription>
                    Select the subscriptions that apply.
                  </FormDescription>
                </div>
                <FormSubscriptions form={form} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormFooter>
            <LoadingButton loading={isPending}>
              {revenuePointToEdit ? "Update" : "Create"}
            </LoadingButton>
          </FormFooter>
        </form>
      </Form>
    </ResponsiveDrawer>
  );
}
