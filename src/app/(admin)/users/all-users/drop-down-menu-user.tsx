import { Role } from "@/app/generated/prisma";
import { useSession } from "@/app/session-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LoadingButton from "@/components/ui/loading-button";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { myPrivileges } from "@/lib/enums";
import { UserData } from "@/lib/types";
import {
  ArrowUpRightIcon,
  Edit3Icon,
  MoreHorizontalIcon,
  PackagePlusIcon,
  Trash2Icon,
  UserIcon,
} from "lucide-react";
import { useState, useTransition } from "react";
import FormUpdateUserPrivilege from "./form-update-user-privilege";

interface DropdownMenuUserProps {
  user: UserData;
}

export default function DropdownMenuUser({ user }: DropdownMenuUserProps) {
  const [isPending, startTransition] = useTransition();
  const { navigateOnclickWithPathnameWithoutUpdate } = useCustomSearchParams();
  const [openPrivilege, setOpenPrivilege] = useState(false);
  const { user: currentUser } = useSession();
  //   All the privileges of the logged in user otherwise of a normal user
  const privileges = myPrivileges[currentUser?.role || Role.USER];
  //   The logged in user must have the privileges of a moderator
  const canEditRoles = privileges.includes(Role.MODERATOR);
  //   The user selected is the same as the logged in user  or the logged in user has the privileges of the user selected.
  const canUpdateUserDetails =
    !!currentUser &&
    (user.id === currentUser.id || privileges.includes(user.role));
  // The logged in user has the privileges of an admin
  const canDeleteUser = privileges.includes(Role.ADMIN);
  //   The logged in user has the privileges of an associate staff
  const canAssignRevenuePoints = privileges.includes(Role.ASSOCIATE);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <LoadingButton
            loading={isPending}
            variant={"ghost"}
            size={"icon"}
            asChild
          >
            <MoreHorizontalIcon className="size-4" />
          </LoadingButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                startTransition(() =>
                  navigateOnclickWithPathnameWithoutUpdate(
                    `/user/detail/${user.id}`
                  )
                )
              }
            >
              <ArrowUpRightIcon /> View user details
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setOpenPrivilege(true)}
              disabled={!canEditRoles}
            >
              <UserIcon /> Update User Privilege
            </DropdownMenuItem>
            <DropdownMenuItem
              //   onClick={() => setOpenPrivilege(true)}
              disabled={!canAssignRevenuePoints}
            >
              <PackagePlusIcon /> Assign Revenue Points
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuLabel>Secondary Actions</DropdownMenuLabel>
            <DropdownMenuItem disabled={!canUpdateUserDetails}>
              <Edit3Icon /> Update User Details
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive" disabled={!canDeleteUser}>
              <Trash2Icon /> Delete User
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <FormUpdateUserPrivilege
        userToEdit={user}
        open={openPrivilege}
        setOpen={setOpenPrivilege}
      />
    </>
  );
}
