import Head from 'next/head'
import Image from 'next/image'
import Card from '../src/components/Card'
import Navbar from '../src/components/Navbar'
import styles from '../styles/Home.module.css'
import music from "../src/assets/music.gif";
import nft from "../src/assets/nft.svg";
import creator from "../src/assets/creator.gif";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <p className={styles.subHeading}>
          <span className={styles.tagline}>Welcome To</span>
        </p>
        <h1 className={styles.heading}>CAZE</h1>
        <p className={styles.subHeading}>
          <span className={styles.tagline}>Subscribe to your favorite creators And get access to exclusive content</span>
        </p>
      </div>

    {/* <hr /> */}

      <div className={styles.cards}>
        <div>
          <Card music={music} />
          <Card music={nft} />
          <Card music={creator} />
        </div>
      </div>
    
    </div>
  )
}
