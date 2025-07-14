"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { RevenuePointSubscriptionData } from "@/lib/types";
import { useState } from "react";
import FormAddEditRevenuePointSubscription from "./form-add-edit-revenue-point-subscription";

interface ButtonAddEditRevenuePointSubscriptionProps extends ButtonProps {
  revenuePointSubscriptionToEdit?: RevenuePointSubscriptionData;
}

export default function ButtonAddEditRevenuePointSubscription({
  revenuePointSubscriptionToEdit,
  ...props
}: ButtonAddEditRevenuePointSubscriptionProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        title={
          revenuePointSubscriptionToEdit
            ? `Edit ${revenuePointSubscriptionToEdit.subscriptionName} .`
            : "Add a new Revenue Point Subscription."
        }
        {...props}
      />

      <FormAddEditRevenuePointSubscription
        open={open}
        setOpen={setOpen}
        revenuePointSubscriptionToEdit={revenuePointSubscriptionToEdit}
      />
    </>
  );
}
