import { useQuery } from "react-query";
import { getBalance } from "./wallet";
import { printBundleSizes } from "../../utils";
printBundleSizes();

export const useCardanoBlockHeight = () => {
  return useQuery("cardanoBlockHeight", () => {
    return 5000000; // Mock block height for Cardano
  });
};

export const balanceQueryOptions = {
  queryKey: "cardanoBalance",
  queryFn: getBalance, // Mock balance for Cardano
};

export const useCardanoBalance = () => {
  return useQuery({ ...balanceQueryOptions });
};
