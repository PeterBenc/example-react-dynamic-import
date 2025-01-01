import CardanoNetworkInfo from "../specific/cardano/NetworkInfo";
import SolanaNetworkInfo from "../specific/solana/NetworkInfo";
import { Blockchain } from "./blockchains";
import React from "react";

export const NetworksInfo = ({
  blockchains,
  setShouldShowExtendedNetworkInfo,
}: {
  blockchains: Blockchain[];
  setShouldShowExtendedNetworkInfo: (blockchain: Blockchain) => void;
}) => {
  return (
    <>
      <h3>Blockchain info</h3>
      <ul>
        {blockchains.map((item, index) => {
          switch (item) {
            case "cardano":
              return (
                <>
                  <CardanoNetworkInfo key={index} />
                  <button
                    onClick={() => setShouldShowExtendedNetworkInfo("cardano")}
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
                    onClick={() => setShouldShowExtendedNetworkInfo("solana")}
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
    </>
  );
};
