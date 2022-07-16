import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <span>© Copyright 2022 @ CAZE</span>
        <a
          href="https://github.com/shouryam-kumar/hackathon-project"
          target="_blank"
        >
          <Image src={github} />
        </a>
        <a href="https://twitter.com/caze_xyz" target="_blank">
          <Image src={twitter} />
        </a>
      </div>
    </footer>
  );
}
