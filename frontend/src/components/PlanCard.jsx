import React from 'react'
import styles from './PlanCard.module.css'

export default function PlanCard( props ) {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.shadow}  ${styles.glow}`}>

      <div className={`${styles.content} ${styles.border}`}>
        <div>
          <h1 className={styles.cardHeader}>{props.month}</h1>
          <p className={styles.cardText}>test</p>
        </div>
        <a className={styles.image}>
          {/* <Image src={props.img} alt="" /> */}
        </a>
      </div>
      </div>
    </div>
  )
}
