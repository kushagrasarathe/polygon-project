import React from 'react'
import styles from './Stats.module.css'

export default function Stats(props) {
  return (
    <div className={styles.statscard}>
        <h1>Top Creators</h1>
        <div className={styles.content}>
            <div>
                <img src={props.image} alt="" />
            </div>
        </div>
    </div>
  )
}
