import { use } from "react";
import { getCardano, getSolana } from "./getBlockchain";
import { Blockchain } from "./blockchains";

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
            case "cardano": {
              const { CardanoNetworkInfo } = use(getCardano());
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
            }

            case "solana": {
              const { SolanaNetworkInfo } = use(getSolana());
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
            }

            default:
              return null;
          }
        })}
      </ul>
    </>
  );
};
