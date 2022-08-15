import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export const Hero = () => {
  const { openConnectModal } = useConnectModal();
  const { address, isConnected } = useAccount();
  return (
    <div className="m-auto">
      {openConnectModal && (
        <button onClick={openConnectModal} type="button">
          Open Connect Modal
        </button>
      )}
      {isConnected && <div>Address: {address}</div>}
    </div>
  );
};
