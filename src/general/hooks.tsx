import { useQueries, useQuery } from "react-query";
import { cardanoBalanceQueryOptions } from "../specific/cardano/hooks";
import { solanaBalanceQueryOptions } from "../specific/solana/hooks";
import { Blockchain } from "./blockchains";

export const useAsset = (blockchain: Blockchain) => {
  const queriesOptions = {
    cardano: cardanoBalanceQueryOptions,
    solana: solanaBalanceQueryOptions,
  };

  return useQuery(queriesOptions[blockchain]);
};

export const useTotalBalance = (enabledBlockchains: Blockchain[]) => {
  const queriesOptions = {
    cardano: cardanoBalanceQueryOptions,
    solana: solanaBalanceQueryOptions,
  };

  const queries = useQueries(
    Object.values(enabledBlockchains).map(
      (blockchain) => queriesOptions[blockchain]
    )
  );

  return queries.reduce((acc, query) => {
    return acc + (query.data || 0);
  }, 0);
};
