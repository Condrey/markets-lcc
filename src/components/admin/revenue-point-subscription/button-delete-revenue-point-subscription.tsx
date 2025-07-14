"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LoadingButton from "@/components/ui/loading-button";
import { RevenuePointSubscriptionData } from "@/lib/types";
import { AlertTriangleIcon } from "lucide-react";
import { useState } from "react";
import { useDeleteRevenuePointSubscriptionMutation } from "./mutation";

interface ButtonDeleteRevenuePointSubscriptionProps extends ButtonProps {
  revenuePointSubscription: RevenuePointSubscriptionData;
}

export default function ButtonDeleteRevenuePointSubscription({
  revenuePointSubscription,
  ...props
}: ButtonDeleteRevenuePointSubscriptionProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        title={`Delete ${revenuePointSubscription.subscriptionName}`}
        {...props}
      />

      <DialogDeleteRevenuePointSubscription open={open} setOpen={setOpen} revenuePointSubscription={revenuePointSubscription} />
    </>
  );
}

interface DialogDeleteRevenuePointSubscriptionProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  revenuePointSubscription: RevenuePointSubscriptionData;
}
function DialogDeleteRevenuePointSubscription({
  open,
  setOpen,
  revenuePointSubscription,
}: DialogDeleteRevenuePointSubscriptionProps) {
  const { mutate, isPending } = useDeleteRevenuePointSubscriptionMutation();
  function deleteClicked() {
    mutate(revenuePointSubscription.id, { onSuccess: () => setOpen(false) });
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-destructive uppercase">
            <AlertTriangleIcon
              className="inline me-2 size-6 text-card fill-destructive"
              strokeWidth={1.9}
            />
            <span>You are about to delete {revenuePointSubscription.subscriptionName}</span>
          </DialogTitle>
          <p>
            Continue with caution, as this will remove{" "}
            <strong className=""> {revenuePointSubscription.subscriptionName}</strong> from the database. Are
            you sure you want to delete it?
          </p>
        </DialogHeader>
        <DialogFooter>
          <Button variant={"outline"} onClick={() => setOpen(false)}>
            Disregard
          </Button>
          <LoadingButton
            loading={isPending}
            variant={"destructive"}
            onClick={deleteClicked}
          >
            Delete
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
