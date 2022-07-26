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
import banner from "../src/assets/banner.png";
import ipfs from "../src/assets/ipfs.png";
import ceramic from "../src/assets/ceramic.png";
import valist from "../src/assets/valist.png";
import spheron from "../src/assets/spheron.svg";
import web3storage from "../src/assets/web3storage.svg";
import nftport from "../src/assets/nftport.svg";
import Hover from "react-3d-hover";
import Footer from "../src/components/Footer";
import PlanCard from "../src/components/PlanCard";
import Button from "../src/components/Button";
import { Owner_address } from "../utils/constants";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        {/* main section */}
        <main className={styles.main}>
          <h1 className={styles.title}>CAZE</h1>
          <span className={styles.banner}>
            <Image src={banner} />
          </span>
          <span className={styles.tagline}>
            Subscribe to your favorite creators And get access to exclusive
            content
          </span>

          <Link href={"/explore"}>
            <button className={styles.explore_btn}> Explore </button>
          </Link>
        </main>

        {/* categories section */}
        <div className={styles.category}>
          <h1 className={styles.section_heading}>Explore among categories</h1>
          <div className={styles.categories_cards}>
            <Hover scale={1} perspective={900} speed={500}>
              <Card
                img={music}
                heading={"Music Artists"}
                matter={
                  "Support your favorite music creators and pay only for what you listen to 🤩 "
                }
              />
            </Hover>

            <Hover scale={1} perspective={900} speed={500}>
              <Card
                img={artist}
                heading={"Digital Creators"}
                matter={
                  "Access and collect digital arts from creators around the world 😇"
                }
              />
            </Hover>
            <Hover scale={1} perspective={900} speed={500}>
              <Card
                img={nft}
                heading={"NFT Artists"}
                matter={
                  "Mint NFTs from your favorite projects and artists by only paying once 🫣"
                }
              />
            </Hover>
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

        <div className={styles.plans}>
          <h1 className={styles.section_heading}>Choose across 3 plans </h1>
          <div className={styles.plan_cards}>
            <Hover scale={1} perspective={900} speed={500}>
              <div className={`${styles.plan_card} ${styles.shadow}`}>
                <div className={`${styles.card_content}`}>
                  <h2>Silver</h2>
                  <br />
                  <div className={styles.card_img}>
                    <Image src={paperplane} alt="" />
                  </div>
                  <br />
                  <h3>1 Month</h3>
                  <p>0.2 MATIC</p>
                  <br />
                  <div className={styles.plan_benefits}>
                    <h4>Benefits</h4>
                    {/* <ul> */}
                    <li>Exclusie Content</li>
                    <li>Membership NFT</li>
                    {/* <li>lorem</li> */}
                    {/* </ul> */}
                  </div>
                </div>
              </div>
            </Hover>
            <Hover scale={1} perspective={900} speed={500}>
              <div className={`${styles.plan_card} ${styles.shadow}`}>
                <div className={`${styles.card_content}`}>
                  <h2>Gold</h2>
                  <br />
                  <div className={styles.card_img}>
                    <Image src={plane} alt="" />
                  </div>
                  <br />
                  <h3>3 Month</h3>
                  <p>0.5 MATIC</p>
                  <br />
                  <div className={styles.plan_benefits}>
                    <h4>Benefits</h4>
                    {/* <ul> */}
                    <li>Silver Plan Benifits</li>
                    <li>Personalized NFT from Creator</li>
                    <li>Token Rewards</li>
                    {/* </ul> */}
                  </div>
                </div>
              </div>
            </Hover>
            <Hover scale={1} perspective={900} speed={500}>
              <div className={`${styles.plan_card} ${styles.shadow}`}>
                <div className={`${styles.card_content}`}>
                  <h2>Platinum</h2>
                  <br />
                  <div className={styles.card_img}>
                    <Image src={spaceship} alt="" />
                  </div>
                  <br />
                  <h3>6 Month</h3>
                  <p>1.0 MATIC</p>
                  <br />
                  <div className={styles.plan_benefits}>
                    <h4>Benefits</h4>
                    {/* <ul className={styles.benefits}> */}
                    <li>Gold Plan Benifits</li>
                    <li>Private Chat Access</li>
                    <li>1-1 Meet with Creator</li>
                    {/* </ul> */}
                  </div>
                </div>
              </div>
            </Hover>
          </div>
        </div>

        <div className={styles.sponsor_section}>
          <h1 className={styles.section_heading}>Powered By</h1>
          <div className={styles.sponsors}>
          <div className={styles.sponsor}>
              <Image src={ipfs} />
            </div>
            <div className={styles.sponsor}>
              <Image src={spheron} />
            </div>
            
            <div className={styles.sponsor}>
              <Image src={nftport} />
            </div>
            
            <div className={styles.sponsor}>
              <Image src={valist} />
            </div>
            <div className={styles.sponsor}>
              <Image src={web3storage} />
              Web3.Storage
            </div>
            <div className={styles.sponsor}>
              <Image src={ceramic} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
