import type * as Cardano from "../specific/cardano";
import type * as Solana from "../specific/solana";

let cardanoPromise: Promise<typeof Cardano> | null = null;

export const getCardano = (): Promise<typeof Cardano> => {
  if (cardanoPromise) return cardanoPromise;
  cardanoPromise = import("../specific/cardano");
  return cardanoPromise;
};

let solanaPromise: Promise<typeof Solana> | null = null;

export const getSolana = (): Promise<typeof Solana> => {
  if (solanaPromise) return solanaPromise;
  solanaPromise = import("../specific/solana");
  return solanaPromise;
};
