import React from "react";
import { BoldLabel } from "../../generic";
import { printBundleSizes } from "../../utils";
printBundleSizes();

const CardanoExtendedNetworkInfo = () => {
  return (
    <div>
      <BoldLabel label="Cardano" />: {"extended Cardano network info"}
    </div>
  );
};

export default CardanoExtendedNetworkInfo;
