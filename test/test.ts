import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('ESGWorldAsset', function () {
  it('Test contract', async function () {
    const ContractFactory = await ethers.getContractFactory('ESGWorldAsset');

    const instance = await ContractFactory.deploy();
    await instance.waitForDeployment();

    expect(await instance.name()).to.equal('ESG World Asset');
    expect(await instance.symbol()).to.equal('EWA');
    expect(await instance.decimals()).to.equal(18);
    expect(await instance.totalSupply()).to.equal(
      ethers.parseUnits('1000000000', 18)
    );
  });
});
