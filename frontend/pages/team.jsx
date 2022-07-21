import React from "react";
import styles from "../styles/Home.module.css";
import kushagra from "../src/assets/kushagra.jpg";
import dhruv from "../src/assets/dhruv.jpg";
import shouryam from "../src/assets/shouryam.jpg";
import Image from "next/image";
import Button from "../src/components/Button";
import Link from "next/link";

export default function team() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.section_heading}>Team Members</h1>
        <div className={styles.team_section}>
          <span className={styles.team_member}>
            <div className={styles.member_pfp}>
              <Image className={styles.member_pfp} src={kushagra} alt="" />
            </div>
            <h1 className={styles.memeber_name}>Kushagra Sarathe</h1>
            <h3 className={styles.member_contribution}>
              Front-end Designing & Development
            </h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://twitter.com/kushagrasarathe"}
            >
              <Button title={"Twitter"} />
            </a>
          </span>
          <span className={styles.team_member}>
            <div className={styles.member_pfp}>
              <Image className={styles.member_pfp} src={dhruv} alt="" />
            </div>
            <h1 className={styles.memeber_name}>Dhruv Agarwal</h1>
            <h3 className={styles.member_contribution}>
              Blockend & Integration
            </h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://twitter.com/0xdhruva"}
            >
              <Button title={"Twitter"} />
            </a>
          </span>
          <span className={styles.team_member}>
            <div className={styles.member_pfp}>
              <Image className={styles.member_pfp} src={shouryam} alt="" />
            </div>
            <h1 className={styles.memeber_name}>Shouryam Kumar</h1>
            <h3 className={styles.member_contribution}>
              Presentation & Documentation
            </h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://twitter.com/ShouryamK"}
            >
              <Button title={"Twitter"} />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
