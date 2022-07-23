import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import creator_nft from "../../src/assets/creator-nft.gif";
import profile from "../../src/assets/profile.png";

export default function creator() {
  return (
    <>
      <div className={`${styles.container}`}>
        <h1 className={styles.section_heading}>Creator Account Details</h1>
        <div className={`${styles.creator_section}`}>
          <div className={styles.account_details}>
            <div className={styles.profile_image}>
              <Image src={profile} />
            </div>
            <div className={styles.wallet_details}>
              <h2>Wallet Details</h2>
              <h3>Address: </h3>
              <p className={styles.address}>
                0xA25c5bE1324764573dE0a14ABFe0279B4291adfA
              </p>
              <h3>Balance: </h3>
              <p>10 MATIC</p>
              <div>
                <button className={styles.explore_btn}>Withdraw</button>
              </div>
            </div>
            <div className={styles.user_subscription}>
              <h2 className={styles.card_title}>Creator NFT</h2>
              <Image src={creator_nft} />
            </div>
          </div>
          <hr />

          <h2 className={styles.card_title}>Content</h2>
          <div className={styles.creator_content}>
            <span>
              <Image src={creator_nft} />
            </span>
            <span>
              <Image src={creator_nft} />
            </span>
          </div>
        </div>
      </div>

      {/* <div className={`${styles.container}`}>
<h1 className={styles.section_heading}>Creator Account Details</h1>
<div className={`${styles.creator_section}`}>
<div className={styles.creator_card}>
<div className={styles.profile_image}>
<Image src={profile} />
</div>
<h2 className={styles.card_title}>Wallet Details</h2>
<h3>Address: </h3>
<span>0xA25c5bE1324764573dE0a14ABFe0279B4291adfA</span>
<h3>Balance: </h3>
<span>10 MATIC</span>
<div>
<button className={styles.explore_btn}>Withdraw</button>
</div>


<div className={styles.user_subscription}>
<h2 className={styles.card_title}>Creator NFT</h2>
<Image src={creator_nft} />
</div>
</div>
</div>
</div> */}
    </>
  );
}
