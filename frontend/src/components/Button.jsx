import React from 'react'
import styles from './Button.module.css'

export default function Button(props) {
  return (
    <button className={styles.btn} role="button">
        {props.title}
    </button>
  )
}
