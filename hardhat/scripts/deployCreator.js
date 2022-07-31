const hre = require("hardhat");

async function main() {
  const NFT_CONTRACT_ADDRESS = "0xFFbF06f950De26fCa1175B82C122f4B9f27346E5";
  const CREATOR = await hre.ethers.getContractFactory("Creators");
  const creator = await CREATOR.deploy(NFT_CONTRACT_ADDRESS);

  await creator.deployed();

  console.log("Creator contract deployed to:", creator.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
