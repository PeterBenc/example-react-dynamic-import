import React from "react";
import { BoldLabel } from "../../generic";
import { useCardanoBlockHeight } from "./hooks";
import { printBundleSizes } from "../../utils";
printBundleSizes();

const CardanoNetworkInfo = () => {
  const { data: blockHeight } = useCardanoBlockHeight();
  return (
    <div>
      <BoldLabel label="Cardano" />:{" "}
      {blockHeight ? `${blockHeight} ` : "Loading..."}
    </div>
  );
};

export default CardanoNetworkInfo;
