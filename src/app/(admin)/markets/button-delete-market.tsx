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
import { MarketData } from "@/lib/types";
import { AlertTriangleIcon } from "lucide-react";
import { useState } from "react";
import { useDeleteMarketMutation } from "./mutation";

interface ButtonDeleteMarketProps extends ButtonProps {
  market: MarketData;
}

export default function ButtonDeleteMarket({
  market,
  ...props
}: ButtonDeleteMarketProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        title={`Delete ${market.name}`}
        {...props}
      />

      <DialogDeleteMarket open={open} setOpen={setOpen} market={market} />
    </>
  );
}

interface DialogDeleteMarketProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  market: MarketData;
}
function DialogDeleteMarket({
  open,
  setOpen,
  market,
}: DialogDeleteMarketProps) {
  const { mutate, isPending } = useDeleteMarketMutation();
  function deleteClicked() {
    mutate(market.id, { onSuccess: () => setOpen(false) });
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-destructive uppercase">
            <AlertTriangleIcon className="inline me-2 size-4" />
            <span>You are about to delete {market.name}</span>
          </DialogTitle>
          <p>
            Continue with caution, as this will remove {market.name} from the
            database.
          </p>
        </DialogHeader>
        <DialogFooter>
          <Button variant={"outline"} onClick={() => setOpen(false)}>
            Cancel
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
