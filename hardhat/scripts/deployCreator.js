const hre = require("hardhat");

async function main() {
  const Creator = await hre.ethers.getContractFactory("Creator");
  const creator = await Creator.deploy();

  await creator.deployed();

  console.log("Creator contract deployed to:", creator.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
