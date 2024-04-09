import { ethers } from 'hardhat';

async function main() {
  const blockNumber = await ethers.provider.getBlockNumber();
  console.log('Current block number:', blockNumber);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
