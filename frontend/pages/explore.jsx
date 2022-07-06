import React from 'react'
import ProfileCard from '../src/components/ProfileCard'
import kushagra from '../src/assets/kushagra.jpg'
import adii from '../src/assets/adii.jpg'
import shouryam from '../src/assets/shouryam.jpg'
import dhruv from '../src/assets/dhruv.jpg'
import Link from 'next/link'
import styles from "../styles/Home.module.css";
import Stats from '../src/components/Stats'

export default function Explore() {
  return (
    <div className={styles.explore}>
      <div className={styles.profiles}>
      <ProfileCard image={kushagra} name={'Kushagra Sarathe'} intro={'I am Kushagra Sarathe, these days I am learning to code in JavaScript'} />
      <ProfileCard image={adii} name={'Aditya Gupta'} intro={'Ye banda bohot talented hai bas iska net nahi chalta '}/>
      <ProfileCard image={shouryam} name={'Shouryam Kumar'} intro={'Passionate web3 developer with skills to manage and run communities '}/>
      <ProfileCard image={dhruv} name={'Dhruv'} intro={'Solidity expurt who will teach me solidity after this project hehe'}/>
      </div>
      <div className={styles.stats}>
        <Stats />        
      </div>
    </div>
  )
}
