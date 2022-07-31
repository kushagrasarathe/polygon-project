import { Web3Storage } from "web3.storage";
import { WEB3STORAGE_TOKEN } from "../../constants";

function getAccessToken() {
  return WEB3STORAGE_TOKEN;
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

export const StoreData = async (Name, Bio, Title, Pfp) => {
  const data = {
    pfp: Pfp,
    name: Name,
    bio: Bio,
    title: Title,
  };
  const client = makeStorageClient();
  const cid = await client.put([data]);
  console.log("stored files with cid:", cid);
  setTimeout(3000);
  return cid;
};
