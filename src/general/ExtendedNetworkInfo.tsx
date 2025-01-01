import { FullScreenLoading } from "../generic/FullScreenLoading";
import { Blockchain } from "./blockchains";
import React, { Suspense } from "react";

const SolanaExtendedNetworkInfo = React.lazy(
  () => import("../specific/solana/ExtendedNetworkInfo")
);
const CardanoExtendedNetworkInfo = React.lazy(
  () => import("../specific/cardano/ExtendedNetworkInfo")
);

export const ExtendedNetworksInfo = ({
  shouldShowExtendedNetworkInfo,
}: {
  shouldShowExtendedNetworkInfo: Record<Blockchain, boolean>;
}) => {
  return (
    <Suspense fallback={<FullScreenLoading />}>
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
    </Suspense>
  );
};
