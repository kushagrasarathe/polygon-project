import React from "react";
import ProfileCard from "../src/components/ProfileCard";
import kushagra from "../src/assets/kushagra.jpg";
import shouryam from "../src/assets/shouryam.jpg";
import dhruv from "../src/assets/dhruv.jpg";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import {
  Creator_Contract_ABI,
  Creator_Contract_address,
} from "../utils/constants";
import { useContract, useProvider } from "wagmi";
// import { useContract, useProvider } from "wagmi";
import { getRecord } from "../src/components/ceramic";
import { useState, useEffect } from "react";

export default function Explore() {
  const [noId, SetNoId] = useState(0);
  const provider = useProvider();
  const contract = useContract({
    addressOrName: Creator_Contract_address,
    contractInterface: Creator_Contract_ABI,
    signerOrProvider: provider,
  });

  /// for every ID
  const fetchCreator = async (id) => {
    try {
      const did = await contract.fetchDID(id);
      await did.wait();
      console.log(did);
      // const address = await contract.fetchAddress(id);
      // await address.wait();
      // console.log(address);

      console.log("Fetching Data from ceramic ...");
      const data = await getRecord(did);
      console.log("Data fetched from Ceramic Successfuly 🚀🚀");
      console.log(data);

      return <ProfileCard image={data.pfp} name={data.Name} intro={data.bio} />;
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCreators = async () => {
    //// we need to run a loop from 0 --- > id , that will fectch the data for every creator, fetchCreators is called in useEffect
    // you just need to render all the data in seperate cards
    // return(
    // )
  };

  const fetchNoId = async () => {
    try {
      console.log("fetching the Ids");
      const id = await contract.id();
      console.log(id);
      SetNoId(id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCreators();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.section_heading}>Creators</h1>
        <div className={styles.explore_cards}>
          <ProfileCard
            image={kushagra}
            name={"Kushagra Sarathe"}
            intro={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate corporis placeat earum at ex illo eos sint a optio natus, saepe doloremque sapiente dolorem sunt, voluptas perspiciatis iure repellendus facilis."
            }
          />
          <ProfileCard
            image={dhruv}
            name={"Dhruv Agarwal"}
            intro={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate corporis placeat earum at ex illo eos sint a optio natus, saepe doloremque sapiente dolorem sunt, voluptas perspiciatis iure repellendus facilis."
            }
          />

          <ProfileCard
            image={shouryam}
            name={"Shouryam Kumar"}
            intro={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate corporis placeat earum at ex illo eos sint a optio natus, saepe doloremque sapiente dolorem sunt, voluptas perspiciatis iure repellendus facilis."
            }
          />
        </div>
      </div>
    </>
  );
}
