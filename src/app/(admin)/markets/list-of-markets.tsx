"use client";

import { DataTable } from "@/components/data-table/data-table";
import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { MarketData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { PlusIcon } from "lucide-react";
import { getAllMarkets } from "../../../components/admin/market/action";
import ButtonAddEditMarket from "../../../components/admin/market/button-add-edit-market";
import { useMarketsColumn } from "./columns";
import { useMarketQuery, useMarketQueryWithInitialData } from "@/components/admin/market/query";

interface ListOfMarketsProps {
  markets: MarketData[];
}
export default function ListOfMarkets({ markets }: ListOfMarketsProps) {
  const query = useMarketQueryWithInitialData(markets)

  const { data, status } = query;
  return (
    <div>
      {status === "error" ? (
        <ErrorContainer
          errorMessage="Failed to fetch market list. Please try again!"
          query={query}
        />
      ) : status === "success" && !data.length ? (
        <EmptyContainer
          message={"There are no markets added to the system yet."}
        >
          <ButtonAddEditMarket>Create a new one</ButtonAddEditMarket>
        </EmptyContainer>
      ) : (
        <DataTable
          columns={useMarketsColumn}
          data={data}
          filterColumn={{ id: "name" }}
        >
          <ButtonAddEditMarket>
            <PlusIcon /> new
          </ButtonAddEditMarket>
        </DataTable>
      )}
    </div>
  );
}
