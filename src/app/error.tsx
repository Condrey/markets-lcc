"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HandIcon } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="p-4 text-destructive flex flex-col  gap-4 min-h-dvh items-center overflow-x-scroll  max-w-md w-full mx-auto">
      <h2 className="text-xl font-semibold">Something went wrong!</h2>
              <p className="break-all text-wrap">{error.message}</p>

      <div
        className={cn(
          process.env.NODE_ENV !== "production"
            ? "flex flex-col gap-2"
            : "hidden",
        )}
      >
        <pre className="mt-2 text-sm text-wrap text-muted-foreground line-clamp-[15] break-all text-ellipsis ">
          {decodeURIComponent(error.stack!)}
        </pre>
        <pre className="mt-2 text-wrap break-all text-sm text-muted-foreground">
          Digest: {decodeURIComponent(error.digest || "None")}
        </pre>
      </div>{" "}
      <Button onClick={reset} className="w-full max-w-fit mx-auto">
        <HandIcon className=" animate-caret-blink" />
        Try again
      </Button>
    </div>
  );
}
