import { webName } from "@/lib/utils";
import { Metadata } from "next";
import UserTypes from "./user-types";

export const generateMetadata = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> => {
  const userType = (await searchParams)["user"] || "Civilian";
  return { title: "Login as a " + userType };
};

export default async function Page() {
  return (
    <main className="flex min-h-dvh max-w-5xl mx-auto  justify-center items-center   bg-background">
      <div className="bg-card sm:border rounded-md sm:my-12   h-fit  size-full mx-auto sm:max-w-fit   flex flex-col   px-4 p-10    ">
        <div className=" sm:space-y-6 space-y-16">
          <h1 className="text-3xl text-center md:text-start text-shadow font-bold uppercase">{`Login to ${webName}`}</h1>
          <div className="space-y-3  max-w-md w-full mx-auto md:me-auto md:ms-0  ">
            <UserTypes />
          </div>
        </div>
      </div>
    </main>
  );
}
