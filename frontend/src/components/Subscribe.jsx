import React from "react";
import { useAccount, useContract, useProvider, useSigner } from "wagmi";
import {
  Subscription_Contract_ABI,
  Subscription_Contract_Address,
  SilverPLan,
  GoldPLan,
  PlatinumPLan,
} from "../../utils/constants";
import { ethers } from "ethers";

import { useState } from "react";

/// A Simple Subscribe Button component , which takes the Plan Id and the creator address from where it is placed , give a Button that will subscribe for the plan and Creator Chosen
const Subscribe = ({ planId, creatorAddress }) => {
  const [amount, setAmount] = useState(0);

  const provider = useProvider();
  const { data: signer } = useSigner();
  const { address, isConnected } = useAccount;
  const contract = useContract({
    addressOrName: Subscription_Contract_Address,
    contractInterface: Subscription_Contract_ABI,
    signerOrProvider: signer || provider,
  });
  const subscribe = async ({ planId, creatorAddress }) => {
    console.log(
      `Subscribing to the creator: ${creatorAddress} for the planId :${planId} \n`
    );
    console.log("Intiating the Transaction 🔥🔥");
    if (planId == 0) {
      setAmount(SilverPLan.Amount);
    } else if (planId == 1) {
      setAmount(GoldPLan.Amount);
    } else if (planId == 2) {
      setAmount(PlatinumPLan.Amount);
    } else {
      console.log("Choose a Correct Plan");
      return false;
    }
    const tx = await contract.subscribe(creatorAddress, planId, {
      value: ethers.utils.parseEther(amount),
    });
    await tx.wait();
    console.log("Subscription Successfully completed 🥳🥳");
  };

  return (
    <div>
      <button
        onClick={() => {
          subscribe(planId, creatorAddress);
        }}
      >
        Subscribe
      </button>
    </div>
  );
};

export default Subscribe;
