const hre = require("hardhat");

async function main() {
  const NFTaddress = "0xFFbF06f950De26fCa1175B82C122f4B9f27346E5";
  const CreatorAddress = "0xdbCEB130F4e80d828AF356ddF9F97B07BFd4B29E";
  const Subscription = await hre.ethers.getContractFactory("SubscriptionPlan");
  const subscription = await Subscription.deploy(NFTaddress, CreatorAddress);

  await subscription.deployed();

  console.log("Subscription deployed to:", subscription.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
