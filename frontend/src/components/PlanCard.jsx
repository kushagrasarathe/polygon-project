import React from "react";
import styles from "./PlanCard.module.css";
import Image from "next/image";

export default function PlanCard(props) {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.shadow}  ${styles.glow}`}>
        <div className={`${styles.content} ${styles.border}`}>
          <div>
            <p className={styles.cardHeader}>{props.name}</p>
            <div className={styles.pricingImg}>
              <Image  src={props.img} alt="" />
            </div>
            <h1 className={styles.cardText}>{props.month}</h1>
            <p className={styles.cardText}>{props.amount}</p>
            <br />
            <hr />
            <br />
            <br />
            <h2>Benefits</h2>
            <br />
            <div>
              <p className={styles.cardText}>Caze Exclusive NFT</p>
              <p className={styles.cardText}>Caze Token</p>
              <p className={styles.cardText}>Free Mint</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
