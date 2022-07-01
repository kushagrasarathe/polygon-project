import React from 'react'
import styles from "./Card.module.css";
import Image from "next/image";
import music from "../assets/music.gif";

export default function Card(props) {
  return (
    <div className={styles.card}>
        <a className={styles.image}><Image src={props.music} alt="" /></a>
    </div>
  )
}
