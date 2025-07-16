import AdminSidebarContainer from "@/components/admin/admin-sidebar/admin-sidebar-container";
import DataTableLoadingSkeleton from "@/components/data-table/data-table-loading-skeleton";
import { Metadata } from "next";
import { Suspense } from "react";
import { getAllMarkets } from "../../../components/admin/market/action";
import ListOfMarkets from "./list-of-markets";

export const metadata: Metadata = {
  title: "Markets",
};
export default function Page() {
  return (
    <AdminSidebarContainer crumbs={[{ label: "Markets", href: "/markets" }]}>
      <Suspense fallback={<DataTableLoadingSkeleton />}>
        <Markets />
      </Suspense>
    </AdminSidebarContainer>
  );
}

async function Markets() {
  const markets = await getAllMarkets();
  return <ListOfMarkets markets={markets} />;
}
