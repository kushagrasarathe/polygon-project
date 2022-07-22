import React, { useState } from "react";
import Button from "../src/components/Button";
import Navbar from "../src/components/Navbar";
import styles from "../styles/Home.module.css";
import { StoreContent } from "../src/components/StoreContent";
import {
  Creator_Contract_address,
  Creator_Contract_ABI,
} from "../utils/constants";
import { useContract, useSigner, useProvider, useAccount } from "wagmi";
import { SetViewer } from "../src/components/ceramic";
import { useViewerConnection } from "@self.id/react";

///  gives a button that makes a user join the ceramic
import Ceramic from "../src/components/ceramic";
/// intializing ceramic
// import { EthereumAuthProvider } from "@self.id/web";
// import { useViewerConnection } from "@self.id/react";

export default function () {
  const [isLoading, setIsLoading] = useState(false);
  /// to set the Content Uploaded
  const [content, setContent] = useState([]);
  const [contentIpfs, setContentIpfs] = useState("");
  /// set the Profile picture set by the creator
  const [pfp, setPfp] = useState([]);
  const [pfpIpfs, setPfpIpfs] = useState("");

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [bio, setBio] = useState("");
  /// to set the DID for the user , extracted from the Ceramic contract
  const [DID, setDID] = useState("");

  // const [fileUrl, updateFileUrl] = useState(``);
  const setnewDID = async () => {
    const [connection, connect, disconnect] = useViewerConnection();
    setDID(connection.selfID.id);
  };

  const { address } = useAccount();
  const { data: signer } = useSigner();
  const provider = useProvider();
  const Creator_contract = useContract({
    addressOrName: Creator_Contract_address,
    contractInterface: Creator_Contract_ABI,
    signerOrProvider: signer || provider,
  });

  /// to upload the content to ipfs
  async function uploadContent() {
    // const file = e.target.files[0];
    // setContent(file);
    try {
      console.log("Uploading Content to IPFS ... ");
      const CID = await StoreContent(content);
      // const added = await client.add(file);
      // const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      // updateFileUrl(url);
      const hash = `https://ipfs.io/ipfs/${CID}`;
      setContentIpfs(hash);
      console.log(
        "Content uploaded to IPFS successfully 🚀🚀  with CID : ",
        hash
      );
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  /// to upload the pfp to the ipfs and get a hash
  async function uploadPfp(e) {
    // const file = e.target.files[0];
    // setPfp(file);
    try {
      console.log("Profile uploading to IPFS ...");
      const CID = await StoreContent(pfp);
      // const added = await client.add(file);
      // const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      // updateFileUrl(url);
      const hash = `https://ipfs.io/ipfs/${CID}`;
      setPfpIpfs(hash);
      console.log(
        "Profile uploaded to IPFS successfully 🚀🚀  with CID : ",
        hash
      );
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  // to update all the data to ceramic
  const updateDID = async () => {
    try {
      console.log("Updating data to the ipfs ....");
      SetViewer(name, bio, title, pfpIpfs, contentIpfs);
      console.log("Data uploaded to the IPFS 🚀🚀");
    } catch (err) {
      console.log(err);
    }
  };

  /// function to add the creator to the contract with the details
  const addCreator = async () => {
    try {
      console.log("Adding the Creator Profile ... ");
      const tx = await Creator_contract.addCreator(address, name, DID);
      await tx.wait();
      console.log(tx.hash);
      console.log("Creator Added and Profile added Successfully🚀🚀");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      /// uploading content to the IPFS
      uploadPfp();
      uploadContent();
      /// setting the DID
      setnewDID();
      /// updating profile at ceramic and getting the DID
      updateDID();
      /// finally minting the profile for the creator
      addCreator();
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Ceramic />
        <h1 className={styles.section_heading}>Register</h1>
        <div className={styles.register_section}>
          <p>Please fill this form to register as creator.</p>
          <hr />

          <div>
            <div className={styles.register_label}>Profile Picture: </div>
            <input
              className={styles.register_input}
              type="file"
              value={pfp}
              onChange={(e) => setPfp(e.target.files[0])}
            />
            {fileUrl && <img src={fileUrl} width="600px" />}

            <div className={styles.register_label}>Full Name</div>
            <input
              className={styles.register_input}
              placeholder="Kushagra Sarathe"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className={styles.register_label}>Title</div>
            <input
              className={styles.register_input}
              placeholder="NFT Artist"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className={styles.register_label}>
            Describe your content{" "}
            <span className={styles.small}> &#40;min 200 chars&#41;</span>{" "}
          </div>
          <textarea
            placeholder="I make videos on YouTube"
            className={styles.register_input_about}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>

          <div className={styles.register_label}>
            Upload your work to showcase
          </div>
          <input
            className={styles.register_input}
            type="file"
            multiple
            value={content}
            onChange={(e) => setContent(e.target.files)}
          />
          {fileUrl && <img src={fileUrl} width="600px" />}
          <hr />

          <button className={styles.submit_btn} onClick={handleSubmit}>
            {" "}
            Register{" "}
          </button>
        </div>
      </div>
    </>
  );
}
