import React from "react";
import styles from "../styles/Home.module.css";
import kushagra from "../src/assets/kushagra.jpg";
import adii from "../src/assets/adii.jpg";
import dhruv from "../src/assets/dhruv.jpg";
import shouryam from "../src/assets/shouryam.jpg";
import Image from "next/image";

export default function team() {
  return (
    <>
      <div className={styles.team}>
        <div>
          <h1 className={styles.tagline}>Team Members</h1>
        </div>

        <div className={styles.members}>
          <div className={styles.card}>
            <Image src={kushagra} alt="" />
            <h1>Kushagra Sarathe</h1>
            <h3>Front-end Designing & Development</h3>
          </div>
          <div className={styles.card}>
            <Image src={dhruv} alt="" />
            <h1>Dhruv Agarwal</h1>
            <h3>Backend & Integration</h3>
          </div>
          <div className={styles.card}>
            <Image src={shouryam} alt="" />
            <h1>Shouryam Kumar</h1>
            <h3>Backend & Documentation</h3>
          </div>
        </div>

        {/* <p>Aditya Gupta</p>
        <p>Dhruv</p>
      <p>Shouryam</p> */}
      </div>
    </>
  );
}
