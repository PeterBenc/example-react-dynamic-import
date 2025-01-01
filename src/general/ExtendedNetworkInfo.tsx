import CardanoExtendedNetworkInfo from "../specific/cardano/ExtendedNetworkInfo";
import SolanaExtendedNetworkInfo from "../specific/solana/ExtendedNetworkInfo";
import { Blockchain } from "./blockchains";
import React from "react";

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
            case "cardano":
              return <CardanoExtendedNetworkInfo key={index} />;
            case "solana":
              return <SolanaExtendedNetworkInfo key={index} />;
            default:
              return null;
          }
        }
      )}
    </ul>
  );
};
