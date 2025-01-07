import { useQuery } from "react-query";
import { getBalance } from "./wallet";
import { printBundleSizes } from "../../utils";
printBundleSizes();

export const useSolanaBlockHeight = () => {
  return useQuery("solanaBlockHeight", () => {
    return 1000000; // Mock block height for Solana
  });
};

export const balanceQueryOptions = {
  queryKey: "solanaBalance",
  queryFn: getBalance, // Mock balance for Solana
};

export const useSolanaBalance = () => {
  return useQuery({ ...balanceQueryOptions });
};
