import { useChainModal, useConnectModal } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function ReturnWagmi() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { openConnectModal } = useConnectModal();
  const { openChainModal } = useChainModal();
  const { address, isConnected } = useAccount();

  return {
    address: mounted && address,
    isConnected: mounted && isConnected,
    openConnectModal: mounted && openConnectModal,
    openChainModal: mounted && openChainModal,
  };
}
