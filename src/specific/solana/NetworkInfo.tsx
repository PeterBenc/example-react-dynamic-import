import React from "react";
import { BoldLabel } from "../../generic";
import { useSolanaBlockHeight } from "./hooks";
import { printBundleSizes } from "../../utils";
printBundleSizes();

export const SolanaNetworkInfo = () => {
  const { data: blockHeight } = useSolanaBlockHeight();
  return (
    <div>
      <BoldLabel label="Solana" />:{" "}
      {blockHeight ? `${blockHeight}` : "Loading..."}
    </div>
  );
};

export default SolanaNetworkInfo;
