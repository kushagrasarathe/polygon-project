import React from "react";
import { useState, useEffect } from "react";
import { Web3Storage } from "web3.storage";

export const StoreContent = async () => {
  function getAccessToken() {
    return process.env.WEB3STORAGE_TOKEN;
  }

  function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() });
  }

  function getFiles() {
    const fileInput = document.querySelector('input[type="file"]');
    return fileInput.files;
  }

  /// for preparing data on the app and then store it on the blockchain
  //   function makeFileObjects() {
  //     // You can create File objects from a Blob of binary data
  //     // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
  //     // Here we're just storing a JSON object, but you can store images,
  //     // audio, or whatever you want!
  //     const obj = { hello: "world" };
  //     const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });

  //     const files = [
  //       new File(["contents-of-file-1"], "plain-utf8.txt"),
  //       new File([blob], "hello.json"),
  //     ];
  //     return files;
  //   }
  async function storeFiles(files) {
    const client = makeStorageClient();
    const cid = await client.put(files);
    console.log("stored files with cid:", cid);
    return cid;
  }
  // query status based on CID
  const info = await client.status(rootCid);

  return (
    <div>
      StoreContent
      <input type={file} />
      <button onClick={storeFiles}></button>
    </div>
  );
};
