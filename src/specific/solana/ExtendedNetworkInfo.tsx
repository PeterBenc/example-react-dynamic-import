import React from "react";
import { BoldLabel } from "../../generic";
import { printBundleSizes } from "../../utils";
printBundleSizes();

export const ExtendedNetworkInfo = () => {
  return (
    <div>
      <BoldLabel label="Solana" />: {"extended Solana network info"}
    </div>
  );
};

export default ExtendedNetworkInfo;
