import React from "react";
import { NFTPORT_API_KEY } from "../../constants";
import { useEffect, useState } from "react";
export const fetchNFTs = ({ userAddress, contractAddress }) => {
  const [reply, SetReply] = useState(false);
  const [tokenId, setTokenId] = useState(null);
  useEffect(() => {
    fetch();
  }, []);

  /// fetch will be called every time , to get the data back
  const fetch = async () => {
    fetch(
      `https://api.nftport.xyz/v0/accounts/${userAddress}?chain=polygon&contract_address=${contractAddress}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: NFTPORT_API_KEY,
        },
      }
    )
      .then((response) => {
        if (response.total > 0) {
          SetReply(true);
        }
        setTokenId(response.nfts[0].token_id);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // sends back token ID and is a user or Not
  return tokenId, reply;
};
