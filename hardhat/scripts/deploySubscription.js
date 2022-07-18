const hre = require("hardhat");

async function main() {
  const Subscription = await hre.ethers.getContractFactory("SubscriptionPlan");
  const subscription = await Subscription.deploy();

  await subscription.deployed();

  console.log("Subscription deployed to:", subscription.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
