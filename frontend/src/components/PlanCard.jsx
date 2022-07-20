import React from "react";
import styles from "./PlanCard.module.css";
import Image from "next/image";
import Button from "../components/Button";

export default function PlanCard(props) {
  return (
    <>
      <div className={` ${styles.plan_card}  ${styles.shadow} `}>
        <div className={`${styles.card_content}`}>
          <h2>{props.name}</h2>
          <br />
          <div className={styles.card_img}>
            <Image src={props.img} alt="" />
          </div>
          <br />
          <h3>{props.month}</h3>
          <p>{props.amount}</p>
          <br />
          <div className={styles.plan_benefits}>
          <h4>Benefits</h4>
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div>
          <Button title={"Subscribe"} />
        </div>
      </div>

      {/* <div className={`${styles.card}`}>
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
            <Button title={'Subscribe'} />
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
}
