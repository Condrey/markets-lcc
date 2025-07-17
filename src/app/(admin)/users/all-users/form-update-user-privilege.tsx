"use client";

import { Role } from "@/app/generated/prisma";
import { useSession } from "@/app/session-provider";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { myPrivileges, userTypes } from "@/lib/enums";
import { UserData } from "@/lib/types";
import { userSchema, UserSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUpsertUserMutation } from "./mutation";

interface FormUpdateUserPrivilegeProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  userToEdit?: UserData;
}

export default function FormUpdateUserPrivilege({
  open,
  setOpen,
  userToEdit,
}: FormUpdateUserPrivilegeProps) {
  const { user } = useSession();
  const allRoles = myPrivileges[user?.role || Role.USER];
  const form = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    values: {
      id: userToEdit?.id || "",
      name: userToEdit?.name || "",
      email: userToEdit?.email || "",
      telephone: userToEdit?.telephone || "",
      username: userToEdit?.username || "",
      role: userToEdit?.role || Role.USER,
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
      title={
        userToEdit?.name ||
        userToEdit?.telephone ||
        userToEdit?.email ||
        `@${userToEdit?.username}`
      }
      description={userToEdit ? "Update User Privilege" : "Create A New User"}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitForm)} className="space-y-4">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>User Privilege</FormLabel>
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
                    {allRoles.map((dbRole) => {
                      const { icon, role } = userTypes[dbRole];
                      const Icon = icon;
                      return (
                        <SelectItem key={dbRole} value={dbRole}>
                          <Icon className="size-4 mr-2" /> {role}
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="e.g., someone@gmail.com"
                    {...field}
                  />
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
