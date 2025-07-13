import { webName } from "@/lib/utils";

export default function TopAppBar() {
  return (
    <header className="p-4 bg-primary text-primary-foreground">
      {webName}
    </header>
  );
}
