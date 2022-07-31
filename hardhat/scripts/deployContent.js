const hre = require("hardhat");

async function main() {
  const Content = await hre.ethers.getContractFactory("Content");
  const content = await Content.deploy();

  await content.deployed();

  console.log("Content contract deployed to:", content.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
