const hre = require("hardhat");

async function main() {
  const NFTaddress = "0xfAB685ca8e509c4673d0704807bC3206c1a209d1";
  const Subscription = await hre.ethers.getContractFactory("SubscriptionPlan");
  const subscription = await Subscription.deploy(NFTaddress);

  await subscription.deployed();

  console.log("Subscription deployed to:", subscription.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
