const ethers = require("ethers");
// import abi from "../artifacts/contracts/Subscription1.sol/SubscriptionPlan.json";
const ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
    ],
    name: "paymentSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "subscriber",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
    ],
    name: "subscriptionCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "subscriber",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
    ],
    name: "subscriptionCreated",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_creator",
        type: "address",
      },
    ],
    name: "addCreator",
    outputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_creator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_planId",
        type: "uint256",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_creator",
        type: "address",
      },
    ],
    name: "checkBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "planAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "frequency",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_creator",
        type: "address",
      },
    ],
    name: "createPlan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_planId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getPlans",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "creator",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "frequency",
            type: "uint256",
          },
        ],
        internalType: "struct SubscriptionPlan.Plan",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    name: "getSubscriptions",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "subscriber",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "planId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nextPayment",
            type: "uint256",
          },
        ],
        internalType: "struct SubscriptionPlan.Subscription",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "subscriber",
        type: "address",
      },
      {
        internalType: "address",
        name: "_creator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_planId",
        type: "uint256",
      },
    ],
    name: "pay",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "plans",
    outputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "frequency",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_creator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_planId",
        type: "uint256",
      },
    ],
    name: "subscribe",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "subscriptions",
    outputs: [
      {
        internalType: "address",
        name: "subscriber",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "planId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nextPayment",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "creatorId",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
const private_key = "";
const provider = new ethers.providers.JsonRpcProvider("");
const wallet = new ethers.Wallet(private_key, provider);

async function main() {
  const contractaddress = "0x92ce05f2f354f6a047a9202F60A1F61311c04169";
  const ownerAddress = "0xe22eCBbA8fB9C0124eeCb6AfE0bf6A487424989f";
  console.log("Creating the fixed plans now for owner .. \n ");
  const contract = new ethers.Contract(contractaddress, ABI, provider);
  const connectedContract = contract.connect(wallet);

  console.log("Connected with the contract .. \n");

  console.log(" Creating plans ... \n ");
  console.log(
    " 0--> Silver --> 0.2 , 1month \n 1--> Gold --> 0.5, 3month  \n 2--> Platinum --> 1,6month \n"
  );
  const amount1 = ethers.utils.parseEther("0.2");
  const frequency1 = 86400 * 30;
  const tx1 = await connectedContract.createPlan(
    0,
    amount1,
    frequency1,
    ownerAddress
  );
  await tx1.wait();
  console.log(
    "\n Silver plan created with id : 0 , \n Amount: 0.2 \n Peroid:30days \n with hash: ",
    tx1.hash
  );

  const amount2 = ethers.utils.parseEther("0.5");
  const frequency2 = 86400 * 90;
  const tx2 = await connectedContract.createPlan(
    1,
    amount2,
    frequency2,
    ownerAddress
  );
  await tx2.wait();
  console.log(
    "\n Gold plan created with id : 1 , \n Amount: 0.5 \n Peroid: 90days \n with hash: ",
    tx2.hash
  );

  const amount3 = ethers.utils.parseEther("1");
  const frequency3 = 86400 * 180;
  const tx3 = await connectedContract.createPlan(
    2,
    amount3,
    frequency3,
    ownerAddress
  );
  await tx3.wait();
  console.log(
    "Platinum plan created with id : 2 , \n Amount: 1 \n Peroid: 180 days \n with hash: ",
    tx3.hash
  );

  console.log("\n All the plans created successfully🥳🥳");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
