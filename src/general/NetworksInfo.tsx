import { FullScreenLoading } from "../generic/FullScreenLoading";
import { Blockchain } from "./blockchains";
import React, { Suspense } from "react";

const SolanaNetworkInfo = React.lazy(
  () => import("../specific/solana/NetworkInfo")
);
const CardanoNetworkInfo = React.lazy(
  () => import("../specific/cardano/NetworkInfo")
);

export const NetworksInfo = ({
  blockchains,
  setShouldShowExtendedNetworkInfo,
}: {
  blockchains: Blockchain[];
  setShouldShowExtendedNetworkInfo: (blockchain: Blockchain) => void;
}) => {
  return (
    <Suspense fallback={<FullScreenLoading />}>
      <h3>Blockchain info</h3>
      <ul>
        {blockchains.map((item, index) => {
          switch (item) {
            case "cardano":
              return (
                <>
                  <CardanoNetworkInfo key={index} />
                  <button
                    onClick={() => {
                      setShouldShowExtendedNetworkInfo("cardano");
                    }}
                  >
                    More
                  </button>
                </>
              );

            case "solana":
              return (
                <>
                  <SolanaNetworkInfo key={index} />
                  <button
                    onClick={() => {
                      setShouldShowExtendedNetworkInfo("solana");
                    }}
                  >
                    More
                  </button>
                </>
              );

            default:
              return null;
          }
        })}
      </ul>
    </Suspense>
  );
};
