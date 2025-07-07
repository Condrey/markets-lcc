import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Crumb } from "@/lib/types";

interface AdminSidebarHeaderProps {
  crumbs: Crumb[];
}
export default function AdminSidebarHeader({
  crumbs,
}: AdminSidebarHeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        {!!crumbs.length && (
          <>
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/admin">Home</BreadcrumbLink>
                </BreadcrumbItem>

                {crumbs.map((crumb, index, array) => (
                  <div className="flex gap-1" key={crumb.label}>
                    {index !== array.length + 1 && (
                      <BreadcrumbSeparator className="hidden md:block" />
                    )}

                    <BreadcrumbItem>
                      {index === array.length + 1 ? (
                        <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink href={crumb.href}>
                          {crumb.label}
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </div>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </>
        )}
      </div>
    </header>
  );
}
