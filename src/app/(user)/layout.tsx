import { validateRequest } from "@/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s | Dashboard",
  },
  description: "Dashboard for managing markets dues and tenders.",
  keywords: ["dashboard", "markets", "users"],
};
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session } = await validateRequest();
  if (!session) {
    const currentPath = encodeURIComponent(
      `${new URL("/", "http://localhost").pathname}`,
    );
    redirect(`/login?next=${currentPath}&user=civilian`);
  }
  return <div>{children}</div>;
}
