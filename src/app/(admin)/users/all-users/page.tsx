import AdminSidebarContainer from "@/components/admin/admin-sidebar/admin-sidebar-container";
import DataTableLoadingSkeleton from "@/components/data-table/data-table-loading-skeleton";
import { Metadata } from "next";
import { Suspense } from "react";
import { getAllUsers } from "./action";
import ListOfUsers from "./list-of-users";

export const metadata: Metadata = {
  title: "Users",
};
export default function Page() {
  return (
    <AdminSidebarContainer
      crumbs={[
        { label: "Users", href: "/users" },
        { label: "All Users", href: "/users/all-users" },
      ]}
    >
      <Suspense fallback={<DataTableLoadingSkeleton />}>
        <Users />
      </Suspense>
    </AdminSidebarContainer>
  );
}

async function Users() {
  const users = await getAllUsers();
  return <ListOfUsers users={users} />;
}
