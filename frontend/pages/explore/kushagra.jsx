import React from "react";
import styles from "../../styles/Profile.module.css";
import banner from "../../src/assets/profilebanner.gif";
import profile from "../../src/assets/kushagra.jpg";
import Image from "next/image";
import paperplane from "../../src/assets/paper-plane.png";
import spaceship from "../../src/assets/space-ship.png";
import plane from "../../src/assets/plane.png";
import PlanCard from "../../src/components/PlanCard";

export default function Kushagra() {
  return (
    <div className={styles.main}>
      <div className={styles.user}>
        <div className={styles.banner}>
          <Image className={styles.bannerimg} src={banner} />
        </div>
        <div className={styles.profile}>
          <Image className={styles.profileimg} src={profile} />
        </div>
      </div>
      <div className={styles.textContent}>
        <h1>Kushagra Sarathe</h1>
        <p className={styles.cardText}>Frontend Developer and Designer</p>
        <p className={styles.about}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod velit et
          unde quibusdam fuga, ipsam eveniet rem accusamus natus, voluptas ea
          quis nam veniam nobis. Molestias similique aperiam veniam pariatur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          distinctio asperiores ratione perferendis deserunt dolor nostrum,
          sequi aliquam, architecto exercitationem corrupti voluptates eaque
          enim numquam laboriosam. Nisi deleniti quaerat autem.
        </p>
      </div>

      <h1 className={styles.heading}>Content</h1>

      <div className={styles.container}>
        <div className={styles.item}>
          <Image src={profile} />
        </div>
        <div className={styles.item}>
          <Image src={profile} />
        </div>
        <div className={styles.item}>
          <Image src={profile} />
        </div>
      </div>

      <h1 className={styles.heading}>Choose Plan</h1>

      <div className={styles.container}>
        <div>
          <PlanCard
            month={"1 Month"}
            name={"Basic"}
            amount={"$10"}
            img={paperplane}
          />
        </div>
        <div>
          <PlanCard
            month={"3 Months"}
            name={"Premium"}
            amount={"$25"}
            img={spaceship}
          />
        </div>
        <div>
          <PlanCard
            month={"6 Months"}
            name={"Exclusive"}
            amount={"$50"}
            img={plane}
          />
        </div>
      </div>

      {/* <div id="profile-banner-image">
        <img
          src="https://imagizer.imageshack.com/img921/9628/VIaL8H.jpg"
          alt="Banner image"
        />
      </div> */}

      {/* <img src="https://4.bp.blogspot.com/-b3Ty2n3mrOc/UR4MAXUXHDI/AAAAAAAAAWQ/CS31CdrnNY8/s1600/profp.jpg" className={styles.propic} alt="Profile_picture" /> */}
      {/* 
        <div className={styles.header}>
          Kusahgra
        </div>
        <div className={styles.wrapper}>
        </div> */}
    </div>
  );
}
