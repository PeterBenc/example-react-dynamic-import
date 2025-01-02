import { getCardano, getSolana } from "./getBlockchain";
import { Blockchain } from "./blockchains";
import React, { use } from "react";

export const ExtendedNetworksInfo = ({
  shouldShowExtendedNetworkInfo,
}: {
  shouldShowExtendedNetworkInfo: Record<Blockchain, boolean>;
}) => {
  return (
    <ul>
      {Object.entries(shouldShowExtendedNetworkInfo).map(
        ([key, value], index) => {
          if (!value) return null;
          switch (key) {
            case "cardano": {
              const { CardanoExtendedNetworkInfo } = use(getCardano());
              return <CardanoExtendedNetworkInfo key={index} />;
            }

            case "solana":
              const { SolanaExtendedNetworkInfo } = use(getSolana());
              return <SolanaExtendedNetworkInfo key={index} />;
            default:
              return null;
          }
        }
      )}
    </ul>
  );
};
