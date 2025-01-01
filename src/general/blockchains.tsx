import React, { createContext, useContext, useState } from "react";

export type Blockchain = "cardano" | "solana";

const initialBlockchainsEnabled = {
  cardano: false,
  solana: false,
} satisfies Record<Blockchain, boolean>;

type BlockchainsEnabledContext = {
  blockchainsEnabled: Record<Blockchain, boolean>;
  toggleBlockchainEnabled: (key: Blockchain) => void;
};

// Create a Context for the boolean record
const blockchainsEnabledContext = createContext<BlockchainsEnabledContext>({
  blockchainsEnabled: initialBlockchainsEnabled,
  toggleBlockchainEnabled: () => {},
});

export const BlockchainsEnabledProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [blockchainsEnabled, setBlockchainsEnabled] = useState(
    initialBlockchainsEnabled
  );

  const toggleBlockchainEnabled = (key: Blockchain) => {
    setBlockchainsEnabled((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <blockchainsEnabledContext.Provider
      value={{ blockchainsEnabled, toggleBlockchainEnabled }}
    >
      {children}
    </blockchainsEnabledContext.Provider>
  );
};

export const useBlockchainsEnabled = () => {
  const context = useContext(blockchainsEnabledContext);
  if (!context) {
    throw new Error(
      "useBlockchainsEnabled must be used within a BlockchainsEnabledProvider"
    );
  }
  return context;
};
