"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { RevenuePointData } from "@/lib/types";
import { useState } from "react";
import FormAddEditRevenuePoint from "./form-add-edit-revenue-point";

interface ButtonAddEditRevenuePointProps extends ButtonProps {
  revenuePointToEdit?: RevenuePointData;
}

export default function ButtonAddEditRevenuePoint({
  revenuePointToEdit,
  ...props
}: ButtonAddEditRevenuePointProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        title={
          revenuePointToEdit
            ? `Edit ${revenuePointToEdit.revenuePointName}.`
            : "Add a new Revenue Point type."
        }
        {...props}
      />

      <FormAddEditRevenuePoint
        open={open}
        setOpen={setOpen}
        revenuePointToEdit={revenuePointToEdit}
      />
    </>
  );
}
