import { useQueries, useQuery } from "react-query";
import { Blockchain } from "./blockchains";
import { getCardano, getSolana } from "./getBlockchain";
import { use } from "react";

export const useAsset = (blockchain: Blockchain) => {
  const getQueryOptions = () => {
    switch (blockchain) {
      case "cardano":
        return use(getCardano()).cardanoBalanceQueryOptions;
      case "solana":
        return use(getSolana()).solanaBalanceQueryOptions;
    }
  };

  return useQuery(getQueryOptions());
};

export const useTotalBalance = (enabledBlockchains: Blockchain[]) => {
  const getQueryOptions = (blockchain: Blockchain) => {
    switch (blockchain) {
      case "cardano":
        return use(getCardano()).cardanoBalanceQueryOptions;
      case "solana":
        return use(getSolana()).solanaBalanceQueryOptions;
    }
  };

  const queries = useQueries(
    Object.values(enabledBlockchains).map((blockchain) =>
      getQueryOptions(blockchain)
    )
  );

  return queries.reduce((acc, query) => {
    return acc + (query.data || 0);
  }, 0);
};
