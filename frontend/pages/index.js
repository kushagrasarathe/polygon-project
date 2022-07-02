import Head from "next/head";
import Image from "next/image";
import Card from "../src/components/Card";
import Navbar from "../src/components/Navbar";
import styles from "../styles/Home.module.css";
import music from "../src/assets/music.gif";
import nft from "../src/assets/nft.gif";
import creator from "../src/assets/creator.gif";
import artist from "../src/assets/artist.gif";
import Hover from "react-3d-hover";

export default function Home() {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <div className={styles.main}>
        <p className={styles.subHeading}>
          <span className={styles.tagline}>Welcome To</span>
        </p>
        <h1 className={styles.heading}>CAZE</h1>
        <p className={styles.subHeading}>
          <span className={styles.tagline}>
            Subscribe to your favorite creators And get access to exclusive
            content
          </span>
        </p>
        <button className={styles.btn} role="button">
          Explore
        </button>
      </div>

      {/* <hr /> */}

      <div className={styles.grid}>
        <div className={styles.gridItem}>
          {/* <Hover scale={1} perspective={900} speed={500}> */}
            <Card
              music={music}
              heading={"Music Artists"}
              matter={
                "Support your favorite music creators and pay only for what you listen to 🤩 "
              }
            />
          {/* </Hover> */}
        </div>

        <div className={styles.gridItem}>
          {/* <Hover scale={1} perspective={900} speed={500}> */}
            <Card
              music={artist}
              heading={"Digital Creators"}
              matter={"Access digital arts of creators around the world 😇"}
            />
          {/* </Hover> */}
        </div>
        <div className={styles.gridItem}>
          {/* <Hover scale={1} perspective={900} speed={500}> */}
            <Card
              music={nft}
              heading={"NFT Artists"}
              matter={
                "Mint NFTs from your favorite projects and artists by only paying once 🫣"
              }
            />
          {/* </Hover> */}
        </div>
        <div className={styles.gridItem}>
          {/* <Hover scale={1} perspective={900} speed={500}> */}
            <Card
              music={creator}
              heading={"Video Creators"}
              matter={
                "Support your favorite video creators/ and get access to special content every month 😘	"
              }
            />
          {/* </Hover> */}
        </div>
      </div>
    </div>
  );
}
