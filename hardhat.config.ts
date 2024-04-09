import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import { ethers } from 'hardhat';

const { privateKey } = require('./sc.json');

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.23',
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 137,
      accounts: [{ privateKey, balance: '1000000000000000000000000' }],
      gasPrice: 60000000000,
    },
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/KKF0tc3VZuPCsIRgheYqrgjqiRQnnLoU',
      accounts: [privateKey],
      gasPrice: 60000000000,
    },
    polygon: {
      url: 'https://polygon-mainnet.infura.io/v3/5b353ac392824b9494d398433c25b763',
      accounts: [privateKey],
      gasPrice: 180000000000, // 180 Gwei
    },
  },
};

export default config;
