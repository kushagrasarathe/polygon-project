import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import music from "../assets/music.gif";

export default function Card(props) {
  return (
    <div className={styles.card}>
      {/* <div className={styles.gBorder}> */}

      <div className={`${styles.content} ${styles.border}`}>
        <div>
          <h1 className={styles.cardHeader}>{props.heading}</h1>
          <p className={styles.cardText}>{props.matter}</p>
        </div>
        <a className={styles.image}>
          <Image src={props.music} alt="" />
        </a>
      {/* </div> */}
      </div>
      {/* <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.gBorder}>
              <a className={styles.image}>
                <Image src={props.music} alt="" />
              </a>
            </div>
          </div>
        </div> */}

      {/* <div className={styles.container}>
          <div className={`${styles.item}`}>
            <div className={`${styles.card}`}>
              <div className={`${styles.card__content} ${styles.gBorder}`}>
                
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
}
