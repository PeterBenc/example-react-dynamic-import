import React from "react";
import { Blockchain } from "./blockchains";
import { BlockchainItem } from "./BlockchainItem";

export const Blockchains = ({
  enabledBlockchains,
}: {
  enabledBlockchains: Blockchain[];
}) => {
  return (
    <ul>
      {enabledBlockchains.map((item, index) => (
        <BlockchainItem key={index} blockchain={item} />
      ))}
    </ul>
  );
};
