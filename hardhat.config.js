require("dotenv").config();
require("@typechain/hardhat");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  typechain: {
    outDir: "lib/generated",
    target: "ethers-v5",
  },
  networks: {
    goerli: {
      url: process.env.GOERLI_INFURA_KEY || "",
      accounts:
        process.env.DEV_PRIVATE_KEY !== undefined
          ? [process.env.DEV_PRIVATE_KEY]
          : [],
    },
    // mainnet: {
    //   url: process.env.MAINNET_INFURA_KEY || "",
    //   accounts:
    //     process.env.DEV_PRIVATE_KEY !== undefined
    //       ? [process.env.DEV_PRIVATE_KEY]
    //       : [],
    // },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
