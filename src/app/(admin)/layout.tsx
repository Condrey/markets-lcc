import { validateRequest } from "@/auth";
import { AppSidebar } from "@/components/admin/admin-sidebar/admin-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: {
    default: "Admin Dashboard",
    template: "%s | Admin Dashboard",
  },
  description: "Admin Dashboard for managing markets and users.",
  keywords: ["admin", "dashboard", "markets", "users"],
};
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session } = await validateRequest();
  if (!session) {
    const currentPath = encodeURIComponent(
      `${new URL("/", "http://localhost").pathname}`
    );
    redirect(`/login?next=${currentPath}&user=staff`);
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
}
