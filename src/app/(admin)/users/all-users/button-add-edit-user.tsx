"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { UserData } from "@/lib/types";
import { useState } from "react";
import FormAddEditUser from "./form-add-edit-user";

interface ButtonAddEditUserProps extends ButtonProps {
  userToEdit?: UserData;
}

export default function ButtonAddEditUser({
  userToEdit,
  ...props
}: ButtonAddEditUserProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        title={
          userToEdit
            ? `Edit ${userToEdit.name} user.`
            : "Add a new user."
        }
        {...props}
      />

      <FormAddEditUser
        open={open}
        setOpen={setOpen}
        userToEdit={userToEdit}
      />
    </>
  );
}
