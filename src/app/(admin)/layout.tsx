import { AppSidebar } from "@/app/(admin)/admin-sidebar/admin-sidebar";
import { validateRequest } from "@/auth";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Metadata } from "next";
import { redirect, unauthorized } from "next/navigation";

export const metadata: Metadata = {
  title: {
    default: "Admin Dashboard",
    template: "%s | Admin Dashboard",
  },
  description: "Admin Dashboard for managing markets and users.",
  keywords: ["admin", "dashboard", "markets", "users"],
};
export default async function Layout({ children }: { children: React.ReactNode }) {
  const {session } = await validateRequest()
  if(!session) redirect('/login')
  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
}
