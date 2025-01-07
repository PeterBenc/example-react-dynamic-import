import { useQueries, useQuery } from "react-query";
import { Blockchain } from "./blockchains";
import {
  getCardano,
  getSolana,
  useFunctionalityForBlockchains,
} from "./getBlockchain";
import { use } from "react";

export const useAsset = (blockchain: Blockchain) => {
  const getQueryOptions = () => {
    switch (blockchain) {
      case "cardano":
        return use(getCardano()).balanceQueryOptions;
      case "solana":
        return use(getSolana()).balanceQueryOptions;
    }
  };

  return useQuery(getQueryOptions());
};

export const useTotalBalance = (enabledBlockchains: Blockchain[]) => {
  const queriesOptions = useFunctionalityForBlockchains(
    enabledBlockchains,
    "balanceQueryOptions"
  );

  const queries = useQueries(queriesOptions);

  return queries.reduce((acc, query) => {
    return acc + (query.data || 0);
  }, 0);
};
