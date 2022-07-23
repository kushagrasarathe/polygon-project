import { useRouter } from "next/dist/client/router";
import React from "react";
import styles from "../../styles/Profile.module.css";
import banner from "../../src/assets/profilebanner.gif";
import profile from "../../src/assets/kushagra.jpg";
import Image from "next/image";
import paperplane from "../../src/assets/paper-plane.png";
import spaceship from "../../src/assets/space-ship.png";
import plane from "../../src/assets/plane.png";
import PlanCard from "../../src/components/PlanCard";
import {
  Creator_Contract_ABI,
  Creator_Contract_address,
} from "../../utils/constants";
import { useContract, useProvider } from "wagmi";
import { getRecord } from "../../src/components/ceramic";
import { useState, useEffect } from "react";
export default function Creator() {
  const [data, setData] = useState([]);
  const [did, setDid] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const provider = useProvider();
  const contract = useContract({
    addressOrName: Creator_Contract_address,
    contractInterface: Creator_Contract_ABI,
    signerOrProvider: provider,
  });
  useEffect(() => {
    if (id) {
      fetchCreator();
    }
  }, [id]);

  const fetchCreator = async (id) => {
    try {
      console.log("Fetching data from the contract...");
      const did = await contract.fetchDID(id);
      await did.wait();
      console.log("DID fetched from contract 🚀🚀");
      console.log(did);
      setDid(did);
      const address = await contract.fetchAddress(id);
      await address.wait();
      console.log("Address fetched from contract 🚀🚀");
      console.log(address);
      setAddress(address);

      console.log("Fetching Data from ceramic ...");
      const data = await getRecord(did);
      console.log("Data fetched from Ceramic Successfuly 🚀🚀");
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.user}>
        <div className={styles.banner}>
          <Image className={styles.bannerimg} src={banner} />
        </div>
        <div className={styles.profile}>
          <Image className={styles.profileimg} src={data.pfp} />
        </div>
      </div>
      <div className={styles.textContent}>
        <h1>{data.name}</h1>
        <p className={styles.cardText}>{data.title}</p>
        <p className={styles.about}>{data.bio}</p>
      </div>
      <h1 className={styles.heading}>Content</h1>
      /// render content from the ipfs data.content , this will just throw a
      IPFS link
      <div className={styles.container}>
        <div className={`${styles.item} ${styles.border}`}>
          <Image src={profile} />
        </div>
        <div className={`${styles.item} ${styles.border}`}>
          <Image src={banner} />
        </div>
        <div className={`${styles.item} ${styles.border}`}>
          <Image src={profile} />
        </div>
      </div>
      <h1 className={styles.heading}>Subscribe</h1>
      <div className={styles.container}>
        <div>
          <PlanCard
            planId={"0"}
            creatorAddress={address}
            // month={"1 Month"}
            // name={"Silver"}
            // amount={"0.2 Matic "}
            img={paperplane}
          />
        </div>
        <div>
          <PlanCard
            planId={"1"}
            creatorAddress={address}
            // month={"3 Months"}
            // name={"Gold"}
            // amount={"0.5 Matic "}
            img={spaceship}
          />
        </div>
        <div>
          <PlanCard
            planId={"2"}
            creatorAddress={address}
            // month={"6 Months"}
            // name={"Premium"}
            // amount={"1 Matic "}
            img={plane}
          />
        </div>
      </div>
      {/* <div id="profile-banner-image">
        <img
          src="https://imagizer.imageshack.com/img921/9628/VIaL8H.jpg"
          alt="Banner image"
        />
      </div> */}
      {/* <img src="https://4.bp.blogspot.com/-b3Ty2n3mrOc/UR4MAXUXHDI/AAAAAAAAAWQ/CS31CdrnNY8/s1600/profp.jpg" className={styles.propic} alt="Profile_picture" /> */}
      {/* 
        <div className={styles.header}>
          Kusahgra
        </div>
        <div className={styles.wrapper}>
        </div> */}
    </div>
  );
}
