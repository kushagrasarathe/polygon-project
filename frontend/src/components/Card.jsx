import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import music from "../assets/music.gif";

export default function Card(props) {
  return (
    <>
      <div className={styles.category_card}>
        <div className={`${styles.card_border} `}>
          <h1 className={styles.card_title}>{props.heading}</h1>
          <div className={styles.card_image}>
            <Image src={props.img} alt="" />
          </div>
          <p className={styles.card_content}>{props.matter}</p>
        </div>
      </div>

      {/* <div className={`${styles.card}`}>
        <div className={`${styles.shadow}  ${styles.glow}`}>
          <div className={`${styles.content} ${styles.border}`}>
            <div>
              <h1 className={styles.cardHeader}>{props.heading}</h1>
              <p className={styles.cardText}>{props.matter}</p>
            </div>
            <a className={styles.image}>
              <Image src={props.img} alt="" />
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
}

