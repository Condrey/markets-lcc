"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { useSearchParams } from "next/navigation";
import StaffLogin from "./(staff-login)/staff-login";
import UserLogin from "./(user-login)/user-login";

export default function UserTypes() {
  const searchParams = useSearchParams();
  const user = searchParams.get("user");
  const { updateSearchParamsAndNavigate } = useCustomSearchParams();
  const users: { user: string; label: string }[] = [
    { user: "civilian", label: "Civilian Login" },
    { user: "staff", label: "Staff Member Login" },
  ];
  return (
    <Tabs defaultValue={user || "civilian"} className="space-y-6">
      <div className="space-y-1">
        <TabsList className="w-full *:flex-1 ">
          {users.map((u) => {
            return (
              <TabsTrigger
                value={u.user}
                key={u.user}
                onClick={() => updateSearchParamsAndNavigate(`user`, u.user)}
              >
                {u.label}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <p className="text-muted-foreground text-start w-full text-sm italic">
          Choose the kind of user type above, either staff or civilian
        </p>
      </div>
      <TabsContent value="civilian">
        <UserLogin />
      </TabsContent>
      <TabsContent value="staff">
        <StaffLogin />
      </TabsContent>
    </Tabs>
  );
}
