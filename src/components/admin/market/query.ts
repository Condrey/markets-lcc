import { MarketData } from "@/lib/types";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { getAllMarkets } from "./action";

const queryKey: QueryKey = ["all-markets"];
export const useMarketQueryWithInitialData = (markets: MarketData[]) =>
  useQuery({
    queryKey,
    queryFn: getAllMarkets,
    initialData: markets,
  });

export const useMarketQuery = () =>
  useQuery({
    queryKey,
    queryFn: getAllMarkets,
  });
