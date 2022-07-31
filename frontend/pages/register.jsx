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
import { StoreData } from "../src/components/StoreData";
export default function () {
  const [isLoading, setIsLoading] = useState(false);
  /// to set the Content Uploaded
  const [content, setContent] = useState([]);
  const [contentIpfs, setContentIpfs] = useState("");
  /// set the Profile picture set by the creator
  const [pfp, setPfp] = useState([]);
  const [pfpIpfs, setPfpIpfs] = useState("");

  // sets the user Data we want to store earlier
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [bio, setBio] = useState("");

  const [ipfsData, setIpfsData] = useState("");

  const [id, setId] = useState(0);

  const { address } = useAccount();
  const { data: signer } = useSigner();
  const provider = useProvider();
  const Creator_contract = useContract({
    addressOrName: Creator_Contract_address,
    contractInterface: Creator_Contract_ABI,
    signerOrProvider: signer || provider,
  });

  /// to upload the content to ipfs --- working
  async function uploadContent() {
    try {
      console.log("Uploading Content to IPFS ... ");
      console.log(content);
      const CID = await StoreContent(content);
      const hash = `https://ipfs.io/ipfs/${CID}`;
      setContentIpfs(hash);
      console.log(
        "Content uploaded to IPFS successfully 🚀🚀  with CID : ",
        hash
      );
      return true;
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  /// to upload the pfp to the ipfs and get a hash --- working
  async function uploadPfp() {
    try {
      console.log("Profile uploading to IPFS ...");
      console.log(pfp);
      const CID = await StoreContent(pfp);
      const hash = `https://ipfs.io/ipfs/${CID}`;
      setPfpIpfs(hash);
      console.log(
        "Profile uploaded to IPFS successfully 🚀🚀  with CID : ",
        hash
      );
      updateData(name, bio, title, hash, pfp);
      return true;
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  // to update all the data to ceramic
  const updateData = async (Name, Bio, Title, PfpIpfs, Pfp) => {
    try {
      console.log("Updating data to the IPFS");
      const CID = StoreData(Name, Bio, Title, PfpIpfs, Pfp);
      setIpfsData(`https://ipfs.io/ipfs/${CID}`);
      console.log("Data uploaded 🚀🚀");
      // addCreator();
      return true;
    } catch (err) {
      console.log(err);
    }
  };

  /// function to add the creator to the contract with the details
  const addCreator = async () => {
    try {
      console.log("Adding the Creator Profile ... ");
      const tx = await Creator_contract.addCreator(address, ipfsData);
      await tx.wait();
      console.log(tx.hash);
      console.log(tx);
      setId(tx);
      console.log("Creator Added and Profile added Successfully🚀🚀");
      addContent();
      return true;
    } catch (err) {
      console.log(err);
    }
  };

  /// function to add the creator to the contract with the details
  const addContent = async () => {
    try {
      console.log("Adding the Content for the Creator... ");
      const tx = await Content_contract.addCreator(id, contentIpfs);
      await tx.wait();
      console.log(tx.hash);
      console.log("Content Added Successfully🚀🚀");
      return true;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      /// uploading content to the IPFS
      await uploadPfp();
      // await uploadContent();

      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.section_heading}>Register</h1>
        <div className={styles.register_section}>
          <p>Please fill this form to register as creator.</p>
          <hr />
          <div>
            <div className={styles.register_label}>Profile Picture: </div>
            <input
              className={styles.register_input}
              type="file"
              onChange={(e) => setPfp(e.target.files[0])}
            />
            {/* {fileUrl && <img src={fileUrl} width="600px" />} */}

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
            onChange={(e) => setContent(e.target.files[0])}
          />
          {/* {fileUrl && <img src={fileUrl} width="600px" />} */}
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
