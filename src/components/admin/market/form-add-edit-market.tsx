"use client";

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
import { MarketData } from "@/lib/types";
import { marketSchema, MarketSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUpsertMarketMutation } from "./mutation";

interface FormAddEditMarketProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  marketToEdit?: MarketData;
}

export default function FormAddEditMarket({
  open,
  setOpen,
  marketToEdit,
}: FormAddEditMarketProps) {
  const form = useForm<MarketSchema>({
    resolver: zodResolver(marketSchema),
    values: {
      id: marketToEdit?.id || "",
      name: marketToEdit?.name || "",
      mapCoordinates: marketToEdit?.mapCoordinates || "",
      location: marketToEdit?.location || "",
    },
  });
  const { mutate, isPending } = useUpsertMarketMutation();

  function submitForm(input: MarketSchema) {
    mutate(input, { onSuccess: () => setOpen(false) });
  }
  return (
    <ResponsiveDrawer
      open={open}
      setOpen={setOpen}
      title={marketToEdit ? "Update market" : "Create a new market"}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitForm)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Market name</FormLabel>
                <FormControl>
                  <Input placeholder="name of market" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Location</FormLabel>
                <FormControl>
                  <Input placeholder="location of market" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mapCoordinates"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Map coordinates</FormLabel>
                <FormControl>
                  <Input placeholder="geolocation of the market" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormFooter>
            <LoadingButton loading={isPending}>
              {marketToEdit ? "Update" : "Create"}
            </LoadingButton>
          </FormFooter>
        </form>
      </Form>
    </ResponsiveDrawer>
  );
}
