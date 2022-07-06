import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import music from "../assets/music.gif";

export default function Card(props) {
  return (
    <div className={`${styles.card}`}>
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
    </div>
  );
}
