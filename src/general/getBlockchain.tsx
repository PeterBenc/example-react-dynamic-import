import { use } from "react";
import type * as Cardano from "../specific/cardano";
import type * as Solana from "../specific/solana";
import { Blockchain } from "./blockchains";

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

export type BlockchainProperty = keyof (typeof Cardano | typeof Solana);

export type BlockchainFunctionality = typeof Cardano | typeof Solana;

export const useFunctionalityForBlockchains = <TKey extends BlockchainProperty>(
  blockchains: Blockchain[],
  key: TKey
) => {
  const blockchainFunctionalities: BlockchainFunctionality[TKey][] = [];

  for (const blockchain of blockchains) {
    switch (blockchain) {
      case "cardano": {
        blockchainFunctionalities.push(use(getCardano())[key]);
        break;
      }
      case "solana": {
        blockchainFunctionalities.push(use(getSolana())[key]);
        break;
      }
    }
  }

  return blockchainFunctionalities;
};

export const useFunctionalityForBlockchain = <TKey extends BlockchainProperty>(
  blockchain: Blockchain,
  key: TKey
) => {
  switch (blockchain) {
    case "cardano": {
      return use(getCardano())[key];
    }
    case "solana": {
      return use(getSolana())[key];
    }
  }
};
