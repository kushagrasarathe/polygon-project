import Head from "next/head";
import Image from "next/image";
import Card from "../src/components/Card";
import Navbar from "../src/components/Navbar";
import styles from "../styles/Home.module.css";
import music from "../src/assets/music.gif";
import nft from "../src/assets/nft.gif";
import creator from "../src/assets/creator.gif";
import artist from "../src/assets/artist.gif";
import paperplane from "../src/assets/paper-plane.png";
import spaceship from "../src/assets/space-ship.png";
import plane from "../src/assets/plane.png";
import Hover from "react-3d-hover";
import Footer from "../src/components/Footer";
import PlanCard from "../src/components/PlanCard";
import Button from "../src/components/Button";

export default function Home() {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      {/* <Navbar /> */}
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
        <Button title={'Explore'}/>
      </div>

      {/* <hr /> */}
      <br />
      <div className={styles.subHead}>
        <h1 className={styles.subTitle}>Explore among categories</h1>
      </div>
      <br />

      <div className={styles.container}>
        <div className={styles.item}>
          <Hover scale={1} perspective={900} speed={500}>
            <Card
              img={music}
              heading={"Music Artists"}
              matter={
                "Support your favorite music creators and pay only for what you listen to 🤩 "
              }
            />
          </Hover>
        </div>

        <div className={styles.item}>
          <Hover scale={1} perspective={900} speed={500}>
            <Card
              img={artist}
              heading={"Digital Creators"}
              matter={
                "Access and collect digital arts from creators around the world 😇"
              }
            />
          </Hover>
        </div>
        <div className={styles.item}>
          <Hover scale={1} perspective={900} speed={500}>
            <Card
              img={nft}
              heading={"NFT Artists"}
              matter={
                "Mint NFTs from your favorite projects and artists by only paying once 🫣"
              }
            />
          </Hover>
        </div>
        <div className={styles.item}>
          <Hover scale={1} perspective={900} speed={500}>
            <Card
              img={creator}
              heading={"Video Creators"}
              matter={
                "Support your favorite video creators and get access to special content every month 😘	"
              }
            />
          </Hover>
        </div>
      </div>

      <br />
      <br />
      <div className={styles.subHead}>
        <h1 className={styles.subTitle}>Choose across plans</h1>
      </div>
      <br />
      <div className={styles.container}>
        <div>
          <Hover scale={1} perspective={900} speed={500}>
            <PlanCard month={"1 Month"} name={'Basic'} amount={'$10'} img={paperplane} />
          </Hover>
        </div>
        <div>
          <Hover scale={1} perspective={900} speed={500}>
            <PlanCard month={"3 Months"} name={'Premium'} amount={'$25'} img={spaceship} />
          </Hover>
        </div>
        <div>
          <Hover scale={1} perspective={900} speed={500}>
            <PlanCard month={"6 Months"} name={'Exclusive'} amount={'$50'} img={plane} />
          </Hover>
        </div>
      </div>
      {/* <hr />
      <Footer /> */}
    </div>
  );
}