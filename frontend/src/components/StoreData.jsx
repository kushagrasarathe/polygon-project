import { NFTStorage } from "nft.storage";
import { NFT_STORAGE_API_KEY } from "../../constants";

/// used NFT.storage to prepare the metadata foasr the NFT
export const StoreData = async (Name, Bio, Title, PfpIPFS, Pfp) => {
  // const nftstorage_key = process.env.NFT_STORAGE_API_KEY;

  console.log("Preparing Metadata ....");
  const nft = {
    image: Pfp,
    name: Name,
    description: Bio,
    title: Title,
    pfp: PfpIPFS,
  };
  console.log("Uploading Metadata to IPFS ....");
  const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });
  const metadata = await client.store(nft);
  console.log(metadata);
  console.log("NFT data stored successfully 🚀🚀");
  console.log("Metadata URI: ", metadata.url);

  return metadata;
};
