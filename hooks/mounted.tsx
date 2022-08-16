import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function ReturnWagmi() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { address, isConnected } = useAccount();

  return {
    address: mounted && address,
    isConnected: mounted && isConnected,
  };
}