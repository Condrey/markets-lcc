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
import { RevenuePointData } from "@/lib/types";
import { AlertTriangleIcon } from "lucide-react";
import { useState } from "react";
import { useDeleteRevenuePointMutation } from "./mutation";

interface ButtonDeleteRevenuePointProps extends ButtonProps {
  revenuePoint: RevenuePointData;
}

export default function ButtonDeleteRevenuePoint({
  revenuePoint,
  ...props
}: ButtonDeleteRevenuePointProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        title={`Delete ${revenuePoint.revenuePointName}`}
        {...props}
      />

      <DialogDeleteRevenuePoint open={open} setOpen={setOpen} revenuePoint={revenuePoint} />
    </>
  );
}

interface DialogDeleteRevenuePointProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  revenuePoint: RevenuePointData;
}
function DialogDeleteRevenuePoint({
  open,
  setOpen,
  revenuePoint,
}: DialogDeleteRevenuePointProps) {
  const { mutate, isPending } = useDeleteRevenuePointMutation();
  function deleteClicked() {
    mutate(revenuePoint.id, { onSuccess: () => setOpen(false) });
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
            <span>You are about to delete {revenuePoint.revenuePointName}</span>
          </DialogTitle>
          <p>
            Continue with caution, as this will remove{" "}
            <strong className=""> {revenuePoint.revenuePointName}</strong> from the database. Are
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
