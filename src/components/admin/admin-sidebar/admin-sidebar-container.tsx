import { SidebarInset } from "@/components/ui/sidebar";
import { Crumb } from "@/lib/types";
import AdminSidebarHeader from "./admin-sidebar-header";

interface AdminSidebarContainerProps {
  children?: React.ReactNode;
  crumbs: Crumb[];
}
export default function AdminSidebarContainer({
  children,
  crumbs,
}: AdminSidebarContainerProps) {
  return (
    <SidebarInset>
      <AdminSidebarHeader crumbs={crumbs} />
      <div className="p-4 w-full max-w-7xl mx-auto">{children}</div>
    </SidebarInset>
  );
}
