import React from "react";
import { BoldLabel } from "../../generic";
import { useCardanoBlockHeight } from "./hooks";

export const CardanoNetworkInfo = () => {
  const { data: blockHeight } = useCardanoBlockHeight();
  return (
    <div>
      <BoldLabel label="Cardano" />:{" "}
      {blockHeight ? `${blockHeight} ` : "Loading..."}
    </div>
  );
};

export default CardanoNetworkInfo;
