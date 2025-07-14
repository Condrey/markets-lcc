import { validateRequest } from "@/auth";
import { Metadata } from "next";
import { unauthorized } from "next/navigation";
import AdminSidebarContainer from "../../../components/admin/admin-sidebar/admin-sidebar-container";

export async function generateMetadata(): Promise<Metadata> {
  const { user } = await validateRequest();
  if (!user) unauthorized();
  const { name, email } = user;
  return {
    title: name,
    description: `Details of ${name}, with email ${email}`,
  };
}

export default async function Page() {
  const { user } = await validateRequest();
  return (
    <AdminSidebarContainer crumbs={[]}>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </AdminSidebarContainer>
  );
}
