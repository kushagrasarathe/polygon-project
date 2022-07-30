import React, { useEffect } from "react";
import styles from "./PlanCard.module.css";
import Image from "next/image";
import Button from "../components/Button";
import Subscribe from "./Subscribe";
import { SilverPLan, GoldPLan, PlatinumPLan } from "../../utils/constants";
import { useState } from "react";

export default function PlanCard(props) {
  const [id, setId] = useState(0);
  const [plan, setPlan] = useState();

  useEffect(() => {
    setId(props.planId);
    if (id == 0) {
      setPlan(SilverPLan);
    } else if (id == 1) {
      setPlan(GoldPLan);
    } else if (id == 2) {
      setPlan(PlatinumPLan);
    }
  }, []);

  return (
    <>
      <div className={` ${styles.plan_card}  ${styles.shadow} `}>
        <div className={`${styles.card_content}`}>
          <h2>{props.name}</h2>
          <br />
          <div className={styles.card_img}>
            <Image src={props.img} alt="" />
          </div>
          <br />
          <h3>{props.month}</h3>
          <p>{props.amount}</p>
          <br />
          <div className={styles.plan_benefits}>
            <h4>Benefits</h4>
            {/* <ul> */}
            <li>{props.perks1}</li>
            <li>{props.perks3}</li>
            <li>{props.perks2}</li> 
            {/* </ul> */}
          </div>
          {/* <Button title={"Subscribe"} /> */}
          <Subscribe
            planId={props.planId}
            creatorAddress={props.creatorAddress}
          />
        </div>
      </div>
    </>
  );
}
