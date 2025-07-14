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
import { UserData } from "@/lib/types";
import { userSchema, UserSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUpsertUserMutation } from "./mutation";

interface FormAddEditUserProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  userToEdit?: UserData;
}

export default function FormAddEditUser({
  open,
  setOpen,
  userToEdit,
}: FormAddEditUserProps) {
  const form = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    values: {
      id: userToEdit?.id || "",
      name: userToEdit?.name || "",
      email: userToEdit?.email || "",
      telephone: userToEdit?.telephone || "",
    },
  });
  const { mutate, isPending } = useUpsertUserMutation();

  function submitForm(input: UserSchema) {
    mutate(input, { onSuccess: () => setOpen(false) });
  }
  return (
    <ResponsiveDrawer
      open={open}
      setOpen={setOpen}
      title={userToEdit ? "Update user" : "Create a new user"}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitForm)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>User name</FormLabel>
                <FormControl>
                  <Input placeholder="name of user" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telephone"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Telephone</FormLabel>
                <FormControl>
                  <Input placeholder="telephone of user" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Map coordinates</FormLabel>
                <FormControl>
                  <Input placeholder="geotelephone of the user" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormFooter>
            <LoadingButton loading={isPending}>
              {userToEdit ? "Update" : "Create"}
            </LoadingButton>
          </FormFooter>
        </form>
      </Form>
    </ResponsiveDrawer>
  );
}
