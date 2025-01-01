import React from "react";
import { Blockchain } from "./blockchains";
import { useAsset } from "./hooks";
import { BoldLabel } from "../generic";

export const BlockchainItem = ({ blockchain }: { blockchain: Blockchain }) => {
  const { data: balance } = useAsset(blockchain);
  return (
    <div>
      <BoldLabel label="Balance" />:{" "}
      {balance ? `${blockchain} ${balance} USD` : "Loading..."}
    </div>
  );
};
