"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { UserData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "./action";
import ButtonAddEditUser from "./button-add-edit-user";
import { DataTable } from "@/components/data-table/data-table";
import { useUsersColumn } from "./columns";
import { PlusIcon } from "lucide-react";

interface ListOfUsersProps {
  users: UserData[];
}
export default function ListOfUsers({ users }: ListOfUsersProps) {
  const query = useQuery({
    queryKey: ["all-users"],
    queryFn: getAllUsers,
    initialData: users,
  });

  const { data, status } = query;
  return (
    <div>
      {status === "error" ? (
        <ErrorContainer
          errorMessage="Failed to fetch user list. Please try again!"
          query={query}
        />
      ) : status === "success" && !data.length ? (
        <EmptyContainer
          message={"There are no users added to the system yet."}
        >
          <ButtonAddEditUser>Create a new one</ButtonAddEditUser>
        </EmptyContainer>
      ) : (
        <DataTable
          columns={useUsersColumn}
          data={data}
          filterColumn={{ id: "name" }}
        >
          <ButtonAddEditUser>
            <PlusIcon /> new
          </ButtonAddEditUser>
        </DataTable>
      )}
    </div>
  );
}
