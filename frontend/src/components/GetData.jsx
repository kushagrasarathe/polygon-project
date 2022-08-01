import { Web3Storage } from "web3.storage";
import { WEB3STORAGE_TOKEN } from "../../constants";

function getAccessToken() {
  return WEB3STORAGE_TOKEN;
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

export const GetData = async (cid) => {
  const client = makeStorageClient();
  const res = await client.get(cid);
  console.log(`Got a response! [${res.status}] ${res.statusText}`);
  if (!res.ok) {
    throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`);
  }

  // unpack File objects from the response
  const files = await res.files();
  console.log(files);
  for (const file of files) {
    console.log(`${file.cid} -- ${file.path} -- ${file.size}`);
  }
};
