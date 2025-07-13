import { webName } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Agreement from "../agreement";
import SignUpForm from "./signup-form";
export const metadata: Metadata = {
  title: "Self registration",
};
export default function Page() {
  return (
    <main className="flex min-h-dvh max-w-5xl mx-auto  justify-center items-center   bg-background">
      <div className="bg-card sm:border rounded-md sm:my-12   h-fit  size-full mx-auto sm:max-w-fit   flex flex-col   px-4 p-10    ">
        <div className=" sm:space-y-6 space-y-16">
          <h1 className="text-3xl text-center md:text-start text-shadow font-bold uppercase">{`Sign into ${webName}`}</h1>

          <div className="space-y-2">
            <SignUpForm />
            <Agreement className="text-center mb-6" />
            <Link
              href={`/login`}
              className="block text-center group/link hover:text-primary"
            >
              <span className="underline">
                Already have an account? <strong>Login</strong>
              </span>
              <MoveRightIcon className="ms-2 group-hover/link:visible inline  invisible transition-all ease-in delay-200 " />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
