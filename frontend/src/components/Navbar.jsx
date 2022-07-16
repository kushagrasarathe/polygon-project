import React, { useState } from "react";
import logo from "../assets/logo.svg";
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
        <Link href={"/"}>
          <a className={styles.logo}>
            <Image src={logo}></Image>
          </a>
        </Link>
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
            <Link href="/explore">
              <a>Explore</a>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <a>Register</a>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <a>Buidl by</a>
            </Link>
          </li>
        </ul>
      </div>
      {/* <hr className={styles.line} /> */}

      <ul className={`${styles.navRight} ${styles.list}`}>
        <li>
          <a href="https://twitter.com/caze_xyz" target="_blank">
            <Image src={twitter} />
            {/* <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <g clipPath="url(#clip0_497_2088)">
                <path
                  d="M24.4256 11.6379C24.4385 11.8245 24.4385 12.0112 24.4385 12.1996C24.4385 17.9398 20.0687 24.56 12.0781 24.56V24.5566C9.71769 24.56 7.40629 23.8839 5.41919 22.609C5.76242 22.6503 6.10736 22.671 6.45317 22.6718C8.4093 22.6736 10.3095 22.0172 11.8484 20.8086C9.98951 20.7733 8.3594 19.5613 7.78994 17.7918C8.44113 17.9174 9.11209 17.8916 9.75123 17.717C7.72457 17.3075 6.2665 15.5269 6.2665 13.4589C6.2665 13.44 6.2665 13.4219 6.2665 13.4039C6.87037 13.7402 7.5465 13.9269 8.23811 13.9475C6.3293 12.6718 5.74091 10.1325 6.8936 8.1471C9.09919 10.8611 12.3534 12.511 15.8467 12.6856C15.4966 11.1768 15.9749 9.5957 17.1035 8.53506C18.8532 6.89032 21.605 6.97462 23.2497 8.72344C24.2226 8.53161 25.1551 8.17463 26.0084 7.66882C25.6841 8.67441 25.0054 9.5286 24.0988 10.0714C24.9598 9.96989 25.8011 9.73936 26.5934 9.38753C26.0102 10.2615 25.2755 11.0228 24.4256 11.6379Z"
                  fill="#9A9FA5"
                  ></path>
              </g>
              <defs>
                <clipPath id="clip0_497_2088">
                  <rect
                    width="21.3333"
                    height="17.5484"
                    fill="white"
                    transform="translate(5.33325 7.22581)"
                    ></rect>
                </clipPath>
              </defs>
            </svg> */}
          </a>
        </li>
        {/* <Button title={'Explore'}/> */}

        <button className={styles.btnConnect} role="button">
          <ConnectButton />
        </button>
      </ul>
    </nav>
  );
}
