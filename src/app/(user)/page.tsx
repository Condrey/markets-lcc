import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import { Role } from "../generated/prisma";
import TopAppBar from "./top-app-bar";

export default async function Home() {
  const { user } = await validateRequest();
  const isAdmin = !!user && user.role !== Role.USER;
  if (isAdmin) redirect("/admin");
  return (
    <div>
      <TopAppBar />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
