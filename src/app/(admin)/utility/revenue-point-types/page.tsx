import AdminSidebarContainer from "@/components/admin/admin-sidebar/admin-sidebar-container";
import DataTableLoadingSkeleton from "@/components/data-table/data-table-loading-skeleton";
import { Metadata } from "next";
import { Suspense } from "react";
import { getAllRevenuePoints } from "./action";
import ListOfRevenuePoints from "./list-of-revenue-points";

const pageTitle = "Revenue point types";
export const metadata: Metadata = {
  title: pageTitle,
};
export default function Page() {
  return (
    <AdminSidebarContainer
      crumbs={[
        { label: "Utility", href: "/utility" },
        { label: pageTitle, href: "/utility/revenue-point-types" },
      ]}
    >
      <Suspense fallback={<DataTableLoadingSkeleton />}>
        <RevenuePoints />
      </Suspense>
    </AdminSidebarContainer>
  );
}

async function RevenuePoints() {
  const revenuePoints = await getAllRevenuePoints();
  return <ListOfRevenuePoints revenuePoints={revenuePoints} />;
}
