import type * as Cardano from "../specific/cardano";
import type * as Solana from "../specific/solana";

let cardano: Promise<typeof Cardano> | null = null;

export const getCardano = (): Promise<typeof Cardano> => {
  if (!cardano) {
    cardano = import("../specific/cardano");
  }
  return cardano;
};

let solana: Promise<typeof Solana> | null = null;

export const getSolana = (): Promise<typeof Solana> => {
  if (!solana) {
    solana = import("../specific/solana");
  }
  return solana;
};
