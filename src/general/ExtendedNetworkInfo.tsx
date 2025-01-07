import { useFunctionalityForBlockchain } from "./getBlockchain";
import { Blockchain } from "./blockchains";

const _ExtendedNetworksInfo = ({ blockchain }: { blockchain: Blockchain }) => {
  const ExtendedNetworkInfo = useFunctionalityForBlockchain(
    blockchain,
    "ExtendedNetworkInfo"
  );
  return <ExtendedNetworkInfo />;
};

export const ExtendedNetworksInfo = ({
  shouldShowExtendedNetworkInfo,
}: {
  shouldShowExtendedNetworkInfo: Record<Blockchain, boolean>;
}) => {
  return (
    <ul>
      {Object.entries(shouldShowExtendedNetworkInfo).map(
        ([key, value], index) => {
          if (!value) return null;
          return <_ExtendedNetworksInfo blockchain={key as Blockchain} />;
        }
      )}
    </ul>
  );
};
