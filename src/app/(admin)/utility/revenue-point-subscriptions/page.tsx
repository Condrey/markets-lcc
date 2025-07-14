import AdminSidebarContainer from "@/components/admin/admin-sidebar/admin-sidebar-container";
import DataTableLoadingSkeleton from "@/components/data-table/data-table-loading-skeleton";
import { Metadata } from "next";
import { Suspense } from "react";
import { getAllRevenuePointSubscriptions } from "../../../../components/admin/revenue-point-subscription/action";
import ListOfRevenuePointSubscriptions from "./list-of-revenue-point-subscriptions";

const pageTitle = "Revenue point subscriptions";
export const metadata: Metadata = {
  title: pageTitle,
};
export default function Page() {
  return (
    <AdminSidebarContainer
      crumbs={[
        { label: "Utility", href: "/utility" },
        { label: pageTitle, href: "/utility/revenue-point-subscriptions" },
      ]}
    >
      <Suspense fallback={<DataTableLoadingSkeleton />}>
        <RevenuePointSubscriptions />
      </Suspense>
    </AdminSidebarContainer>
  );
}

async function RevenuePointSubscriptions() {
  const revenuePointSubscriptions = await getAllRevenuePointSubscriptions();
  return (
    <ListOfRevenuePointSubscriptions
      revenuePointSubscriptions={revenuePointSubscriptions}
    />
  );
}
