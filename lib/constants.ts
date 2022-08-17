import { ethers } from "ethers";
import { Base1155__factory } from "./generated";

export const CONTRACT_ADDRESS = "0x4665cab32fa90686bda9d02f0ee69ec24411748b";

export const BLOCKTRACKER = "https://etherscan.io";
export const RPC_ID = "9b52e43b93e14ee983c8d25f23b90f21";
export const RPC = `https://goerli.infura.io/v3/${RPC_ID}`;
export const MARKETPLACE_LINK = "https://opensea.io/assets/ethereum/";
export const OPENSEA_LINK = `${MARKETPLACE_LINK}${CONTRACT_ADDRESS}/`;

export const CONTRACT_CONFIG = {
  addressOrName: CONTRACT_ADDRESS,
  contractInterface: Base1155__factory.abi,
};

export const CONTRACT_FACTORY = Base1155__factory.connect(
  CONTRACT_ADDRESS,
  new ethers.providers.JsonRpcProvider(RPC)
);
