import React from "react";
import { BoldLabel } from "../../generic";
import { printBundleSizes } from "../../utils";
printBundleSizes();

const SolanaExtendedNetworkInfo = () => {
  return (
    <div>
      <BoldLabel label="Solana" />: {"extended Solana network info"}
    </div>
  );
};

export default SolanaExtendedNetworkInfo;
