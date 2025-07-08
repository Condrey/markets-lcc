import { Loader2Icon } from "lucide-react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col h-dvh gap-4 justify-center items-center">
      <div className="size-[100px] flex justify-center items-center relative ">
        {" "}
        <Loader2Icon
          strokeWidth={0.5}
          className="size-[85px] animate-spin absolute text-primary"
        />
        <Image
          width={80}
          height={80}
          src={"/logo.png"}
          alt="the logo"
          className="absolute size-[50px]"
        />
      </div>
    </div>
  );
}
