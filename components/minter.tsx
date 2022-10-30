import ReturnWagmi from "@hooks/mounted";
import { BLOCKTRACKER, CHAIN_ID, CONTRACT_ADDRESS } from "@lib/constants";
import { Base1155__factory } from "@lib/generated";
import { useContractWrite, useNetwork, usePrepareContractWrite } from "wagmi";
import Button from "./button";

export const Minter = () => {
  const tokenId = 0;
  const quantity = 1;

  const { isConnected, openConnectModal, openChainModal } = ReturnWagmi();
  const chain = useNetwork().chain?.id;
  const chainIsValid = chain === CHAIN_ID;

  const { config } = usePrepareContractWrite({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: Base1155__factory.abi,
    functionName: "mint",
    args: [tokenId, quantity],
  });

  const { data, isLoading, isSuccess, write, error, status, writeAsync } =
    useContractWrite(config);

  const link = `${BLOCKTRACKER}${data?.hash}`;

  return (
    <div className="m-auto">
      {!isConnected && openConnectModal && (
        <div>
          <h2>Connect Wallet To Claim Trophy</h2>
          <Button
            text="Connect Wallet"
            type="submit"
            onClick={openConnectModal}
          />
        </div>
      )}

      {!chainIsValid && isConnected && !isLoading && openChainModal && (
        <div>
          <h2 className="mt-10 text-xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-2xl lg:mt-8 xl:text-2xl mb-8">
            Switch Chain To Claim Trophy
          </h2>
          <Button text="Switch Chain" type="submit" onClick={openChainModal} />
        </div>
      )}

      {isConnected && chainIsValid && (
        <div>
          {error && error.message !== "User rejected request" && (
            <div className="mb-6">Error: {JSON.stringify(error.message)}</div>
          )}

          {!isLoading && isConnected && (
            <>
              <h2>Claim NFT</h2>

              <button
                disabled={!write}
                onClick={async () => await writeAsync?.()}
              >
                Claim
                <br />
                {status.toString()}
              </button>
            </>
          )}
        </div>
      )}

      {isLoading && isConnected && (
        <div>
          <h2>Minting NFT...</h2>
        </div>
      )}

      {isSuccess && (
        <div>
          <a href={link}>View Transaction here</a>
        </div>
      )}
    </div>
  );
};
