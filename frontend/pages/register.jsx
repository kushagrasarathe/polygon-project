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
    <div className={styles.center}>
      <h1 className={styles.rHead}>Enter Details</h1>
      <div className={styles.register}>
        {/* <div className={styles.top}>
      
    </div> */}

        <div className={styles.form}>
          <div className={styles.left}>
            <h2 className={styles.label}>Profile Picture</h2>
            <div className={styles.profile}>
              <input type="file" onChange={onChange} />
              {fileUrl && <img src={fileUrl} width="600px" />}
            </div>
            <h2 className={styles.label}>Name</h2>
            <input className={styles.textField} type="text" />
            <h2 className={styles.label}>Title</h2>
            <input className={styles.textField} type="text" />
          </div>

          {/* <hr /> */}

          <div className={styles.right}>
            <h2 className={styles.label}>More About You</h2>
            <textarea className={styles.about}></textarea>
            <h2 className={styles.label}>Upload Your Content</h2>
            <div className={styles.dragDrop}>
              <div className={styles.dragArea}>
                <svg width="81.823" height="71.434" viewBox="0 0 81.823 71.434">
                  <g id="Folder" transform="translate(-531.896 -391)">
                    <g id="folder-blank" transform="translate(531.989 391)">
                      <g>
                        <path
                          d="M81.638,49.858V95.78a7.656,7.656,0,0,1-7.654,7.654H7.654A7.656,7.656,0,0,1,0,95.78V39.654A7.656,7.656,0,0,1,7.654,32H33.166l10.2,10.2H73.985A7.656,7.656,0,0,1,81.638,49.858Z"
                          transform="translate(0 -32)"
                          fill="#6486ff"
                        />
                      </g>
                    </g>
                    <g id="Papers" transform="translate(-2 3)">
                      <rect
                        width="43"
                        height="57"
                        rx="2"
                        transform="matrix(0.998, -0.07, 0.07, 0.998, 538.872, 398.786)"
                        fill="#d5d5d5"
                      />
                      <rect
                        width="43"
                        height="57"
                        rx="2"
                        transform="translate(554.329 396.131) rotate(3)"
                        fill="#ebebeb"
                      />
                      <rect
                        width="43"
                        height="57"
                        rx="2"
                        transform="matrix(0.995, -0.105, 0.105, 0.995, 562.946, 400.62)"
                        fill="#fff"
                      />
                    </g>
                    <rect
                      width="81.823"
                      height="55.141"
                      rx="8"
                      transform="translate(531.896 407.151)"
                      fill="#8ba5ff"
                    />
                  </g>
                </svg>
                <p>
                  Drag your documents, photos, or videos here to start
                  uploading.
                </p>
                <p>OR</p>
                <button>Browse files</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.submitBtn}>
        <Button title={'Submit'} />
        </div>
      </div>
    </div>
  );
}
