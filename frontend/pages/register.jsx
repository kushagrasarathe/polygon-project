import React, { useState } from "react";
import Button from "../src/components/Button";
import Navbar from "../src/components/Navbar";
import styles from "../styles/Home.module.css";

export default function () {
  const [fileUrl, updateFileUrl] = useState(``);
  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      updateFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.section_heading}>Register</h1>
        <div className={styles.register_section}>
          <p>Please fill this form to register as creator.</p>
          <hr />

          <div>
            <div className={styles.register_label}>Profile Picture: </div>
            <input className={styles.register_input} type="file" onChange={onChange} />
            {fileUrl && <img src={fileUrl} width="600px" />}

            <div className={styles.register_label}>Full Name</div>
            <input className={styles.register_input} placeholder="Kushagra Sarathe" type="text" />

            <div className={styles.register_label}>Title</div>
            <input className={styles.register_input} placeholder="NFT Artist" type="text" />
          </div>

          <div  className={styles.register_label}>Describe your content <span className={styles.small}> &#40;min 200 chars&#41;</span> </div>
          <textarea
            placeholder="I make videos on YouTube"
            className={styles.register_input_about}
          ></textarea>

          <div className={styles.register_label}>Upload your work to showcase</div>
          <input className={styles.register_input} type="file" onChange={onChange} />
          {fileUrl && <img src={fileUrl} width="600px" />}
          <hr />
          <button className={styles.submit_btn}> Register </button>
        </div>
      </div>
    </>
  );
}
