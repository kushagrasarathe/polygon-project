import React from "react";
import ProfileCard from "../src/components/ProfileCard";
import kushagra from "../src/assets/kushagra.jpg";
import adii from "../src/assets/adii.jpg";
import shouryam from "../src/assets/shouryam.jpg";
import dhruv from "../src/assets/dhruv.jpg";
import Link from "next/link";
import styles from "../styles/Home.module.css";
// import Stats from "../src/components/Stats";

export default function Explore() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.section_heading}>Creators</h1>
        <div className={styles.explore_cards}>
          <ProfileCard
            image={kushagra}
            name={"Kushagra Sarathe"}
            intro={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate corporis placeat earum at ex illo eos sint a optio natus, saepe doloremque sapiente dolorem sunt, voluptas perspiciatis iure repellendus facilis."
            }
          />
          <ProfileCard
            image={dhruv}
            name={"Dhruv Agarwal"}
            intro={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate corporis placeat earum at ex illo eos sint a optio natus, saepe doloremque sapiente dolorem sunt, voluptas perspiciatis iure repellendus facilis."
            }
          />

          <ProfileCard
            image={shouryam}
            name={"Shouryam Kumar"}
            intro={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate corporis placeat earum at ex illo eos sint a optio natus, saepe doloremque sapiente dolorem sunt, voluptas perspiciatis iure repellendus facilis."
            }
          />
        </div>
      </div>
    </>
  );
}
