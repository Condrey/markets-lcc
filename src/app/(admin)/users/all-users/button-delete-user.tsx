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
import { UserData } from "@/lib/types";
import { AlertTriangleIcon } from "lucide-react";
import { useState } from "react";
import { useDeleteUserMutation } from "./mutation";

interface ButtonDeleteUserProps extends ButtonProps {
  user: UserData;
}

export default function ButtonDeleteUser({
  user,
  ...props
}: ButtonDeleteUserProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        title={`Delete ${user.name}`}
        {...props}
      />

      <DialogDeleteUser open={open} setOpen={setOpen} user={user} />
    </>
  );
}

interface DialogDeleteUserProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  user: UserData;
}
function DialogDeleteUser({
  open,
  setOpen,
  user,
}: DialogDeleteUserProps) {
  const { mutate, isPending } = useDeleteUserMutation();
  function deleteClicked() {
    mutate(user.id, { onSuccess: () => setOpen(false) });
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
            <span>You are about to delete {user.name}</span>
          </DialogTitle>
          <p>
            Continue with caution, as this will remove{" "}
            <strong className=""> {user.name}</strong> from the database. Are
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
