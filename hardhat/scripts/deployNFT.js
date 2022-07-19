const hre = require("hardhat");

async function main() {
  const metadata =
    "ipfs://bafybeiah2x2zvenc3ecpiygbl3bvoe5tpxhsxobzz4xyrutdlemnukg6uu/metadata/";

  const NFT = await hre.ethers.getContractFactory("CrazeNFT");
  const nft = await NFT.deploy(metadata);

  await nft.deployed();

  console.log("NFT contract deployed to:", nft.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
