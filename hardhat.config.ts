require("dotenv").config();
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";

module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_INFURA_KEY || "",
      accounts:
        process.env.DEV_PRIVATE_KEY !== undefined
          ? [process.env.DEV_PRIVATE_KEY]
          : [],
    },
    mainnet: {
      url: process.env.MAINNET_INFURA_KEY || "",
      accounts:
        process.env.DEV_PRIVATE_KEY !== undefined
          ? [process.env.DEV_PRIVATE_KEY]
          : [],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
