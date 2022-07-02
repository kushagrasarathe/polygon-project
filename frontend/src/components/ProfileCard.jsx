import React from 'react'
import styles from "./ProfileCard.module.css"
import Image from 'next/image'

export default function ProfileCard(props) {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.shadow}  ${styles.glow}`}>

      <div className={`${styles.content} ${styles.border}`}>
        <a className={styles.image}>
          <Image src={props.image} alt="" />
        </a>
        <div>
          <h1 className={styles.cardHeader}>{props.name}</h1>
          <p className={styles.cardText}>{props.intro}</p>
        </div>
      </div>
      </div>
    </div>
  )
}
