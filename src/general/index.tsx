import React, { useState } from "react";
import { Blockchain, useBlockchainsEnabled } from "./blockchains";
import { Blockchains } from "./Blockchain";
import { useTotalBalance } from "./hooks";
import { NetworksInfo } from "./NetworksInfo";
import { ExtendedNetworksInfo } from "./ExtendedNetworkInfo";

export const Main = () => {
  const { blockchainsEnabled, toggleBlockchainEnabled } =
    useBlockchainsEnabled();

  const enabledBlockchains = Object.entries(blockchainsEnabled)
    .filter(([key, value]) => !!value)
    .map(([key]) => key) as Blockchain[];

  const [shouldShowExtendedNetworkInfo, _setShouldShowExtendedNetworkInfo] =
    useState(
      enabledBlockchains.reduce(
        (acc, curr) => ({ ...acc, [curr]: false }),
        {} as Record<Blockchain, boolean>
      )
    );

  const setShouldShowExtendedNetworkInfo = (blockchain: Blockchain) => {
    return _setShouldShowExtendedNetworkInfo({
      ...shouldShowExtendedNetworkInfo,
      [blockchain]: !shouldShowExtendedNetworkInfo[blockchain],
    });
  };

  const totalBalance = useTotalBalance(enabledBlockchains);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* Left Side: List of Strings */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto",
          borderRight: "1px solid #ccc",
        }}
      >
        <h2>Portfolio</h2>
        <h3>Total Balance</h3>
        {totalBalance} USD
        <h3>Blockchains</h3>
        <Blockchains enabledBlockchains={enabledBlockchains} />
        <NetworksInfo
          blockchains={enabledBlockchains}
          setShouldShowExtendedNetworkInfo={setShouldShowExtendedNetworkInfo}
        />
        <ExtendedNetworksInfo
          shouldShowExtendedNetworkInfo={shouldShowExtendedNetworkInfo}
        />
      </div>
      <div
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto",
        }}
      >
        <h2>Enabled blockchains</h2>
        <ul>
          {Object.entries(blockchainsEnabled).map(([key, value]) => (
            <li key={key} style={{ display: "flex", alignItems: "center" }}>
              <label>
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => {
                    toggleBlockchainEnabled(key as any);
                  }}
                />
                {key}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
