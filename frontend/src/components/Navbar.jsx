import React, { useState } from "react";
import logo from "../assets/logo.png";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import twitter from "../assets/twitter.svg";
import Button from "./Button";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.hamMenu}>
        <div className={styles.logo}>

        <Link href={"/"}>
          <a >
            <Image src={logo}></Image>
          </a>
        </Link>
        </div>
        <button
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
            console.log(isNavExpanded);
          }}
          className={styles.hamBtn}
        >
          {isNavExpanded ? "☰" : "✖"}
        </button>
        {/* }} className={styles.hamBtn}>{ isNavExpanded ? "&#10006;" : ""}</button> */}
      </div>

      <hr className={styles.line} />
      <div
        className={` ${styles.menu} ${
          isNavExpanded ? styles.displayMenu : "list"
        }`}
      >
        <ul className={`${styles.navLeft} ${styles.list}`}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/explore">
              <a>Creators</a>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <a>Register</a>
            </Link>
          </li>
          <li>
            <Link href="/account">
              <a>Account</a>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <a>Team</a>
            </Link>
          </li>
        </ul>
      </div>
      {/* <hr className={styles.line} /> */}

      <ul className={`${styles.navRight} ${styles.list}`}>
        <li>
          <a href="https://twitter.com/caze_xyz" target="_blank">
            <Image src={twitter} />
          </a>
        </li>

        <ConnectButton />

        {/* <button className={styles.btnConnect} role="button">
          Connect Wallet
        </button> */}
      </ul>
    </nav>
  );
}
