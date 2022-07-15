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
      <div className={styles.explore}>
        <h1>Search your favorite Creators</h1>
        <div className={styles.profiles}>
          <ProfileCard
            image={kushagra}
            name={"Kushagra Sarathe"}
            intro={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate corporis placeat earum at ex illo eos sint a optio natus, saepe doloremque sapiente dolorem sunt, voluptas perspiciatis iure repellendus facilis. Dolorem delectus temporibus ex laborum iusto laudantium, inventore laboriosam. Cumque adipisci sint quos eligendi sequi veniam accusantium distinctio eveniet voluptate inventore amet voluptatem, atque dolor facilis neque dolore rerum suscipit? Eaque, hic vero sed neque et rerum ratione inventore consectetur cum, labore a consequuntur commodi obcaecati distinctio enim aliquam maxime assumenda magni quis ut, deserunt quam optio eius! Recusandae, quo!"
            }
          />
          <ProfileCard
            image={dhruv}
            name={"Dhruv Agarwal"}
            intro={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate corporis placeat earum at ex illo eos sint a optio natus, saepe doloremque sapiente dolorem sunt, voluptas perspiciatis iure repellendus facilis. Dolorem delectus temporibus ex laborum iusto laudantium, inventore laboriosam. Cumque adipisci sint quos eligendi sequi veniam accusantium distinctio eveniet voluptate inventore amet voluptatem, atque dolor facilis neque dolore rerum suscipit? Eaque, hic vero sed neque et rerum ratione inventore consectetur cum, labore a consequuntur commodi obcaecati distinctio enim aliquam maxime assumenda magni quis ut, deserunt quam optio eius! Recusandae, quo!"
            }
          />
          <ProfileCard
            image={adii}
            name={"Aditya Gupta"}
            intro={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate corporis placeat earum at ex illo eos sint a optio natus, saepe doloremque sapiente dolorem sunt, voluptas perspiciatis iure repellendus facilis. Dolorem delectus temporibus ex laborum iusto laudantium, inventore laboriosam. Cumque adipisci sint quos eligendi sequi veniam accusantium distinctio eveniet voluptate inventore amet voluptatem, atque dolor facilis neque dolore rerum suscipit? Eaque, hic vero sed neque et rerum ratione inventore consectetur cum, labore a consequuntur commodi obcaecati distinctio enim aliquam maxime assumenda magni quis ut, deserunt quam optio eius! Recusandae, quo!"
            }
          />
          <ProfileCard
            image={shouryam}
            name={"Shouryam Kumar"}
            intro={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate corporis placeat earum at ex illo eos sint a optio natus, saepe doloremque sapiente dolorem sunt, voluptas perspiciatis iure repellendus facilis. Dolorem delectus temporibus ex laborum iusto laudantium, inventore laboriosam. Cumque adipisci sint quos eligendi sequi veniam accusantium distinctio eveniet voluptate inventore amet voluptatem, atque dolor facilis neque dolore rerum suscipit? Eaque, hic vero sed neque et rerum ratione inventore consectetur cum, labore a consequuntur commodi obcaecati distinctio enim aliquam maxime assumenda magni quis ut, deserunt quam optio eius! Recusandae, quo!"
            }
          />
        </div>
      </div>
    </>
  );
}
