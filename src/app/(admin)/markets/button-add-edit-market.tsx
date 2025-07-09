"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { MarketData } from "@/lib/types";
import { useState } from "react";
import FormAddEditMarket from "./form-add-edit-market";

interface ButtonAddEditMarketProps extends ButtonProps {
  marketToEdit?: MarketData;
}

export default function ButtonAddEditMarket({
  marketToEdit,
  ...props
}: ButtonAddEditMarketProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        title={
          marketToEdit
            ? `Edit ${marketToEdit.name} market.`
            : "Add a new market."
        }
        {...props}
      />

      <FormAddEditMarket
        open={open}
        setOpen={setOpen}
        marketToEdit={marketToEdit}
      />
    </>
  );
}
