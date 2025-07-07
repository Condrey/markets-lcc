import { AppSidebar } from "@/app/(admin)/admin-sidebar/admin-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Admin Dashboard",
    template: "%s | Admin Dashboard",
  },
  description: "Admin Dashboard for managing markets and users.",
  keywords: ["admin", "dashboard", "markets", "users"],
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
}
