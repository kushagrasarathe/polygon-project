import React, { useState } from "react";
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
    <div className={styles.register}>
      <h1 className={styles.tagline}>Enter Details</h1>

      <div className={styles.form}>
        <div className={styles.left}>
          <h2 className={styles.label}>Profile Picture</h2>
          <div className={styles.profile}>
            <input type="file" onChange={onChange} />
            {fileUrl && <img src={fileUrl} width="600px" />}
          </div>

          <h2 className={styles.label}>Name</h2>
          <input className={styles.text} type="text" />
          <h2 className={styles.label}>Title</h2>
          <input className={styles.text} type="text" />
        </div>

        {/* <hr /> */}

        <div className={styles.right}>
          <h2 className={styles.label}>More About You</h2>
          <textarea className={styles.about}></textarea>
          <h2 className={styles.label}>Upload Your Content</h2>
          <div className={styles.dragDrop}>
            {/* <div className={styles.drag-drop-area}> */}
              <svg width="81.823" height="71.434" viewBox="0 0 81.823 71.434">
                <g id="Folder" transform="translate(-531.896 -391)">
                  <g id="folder-blank" transform="translate(531.989 391)">
                    <g>
                      <path
                        d="M81.638,49.858V95.78a7.656,7.656,0,0,1-7.654,7.654H7.654A7.656,7.656,0,0,1,0,95.78V39.654A7.656,7.656,0,0,1,7.654,32H33.166l10.2,10.2H73.985A7.656,7.656,0,0,1,81.638,49.858Z"
                        transform="translate(0 -32)"
                        fill="#3b49b5"
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
                    fill="#4c5ff9"
                  />
                </g>
              </svg>
              {/* <div className={styles.dragDropAreaText}> */}
                Drag your documents, photos, or videos here to start uploading.
              {/* </div> */}
              {/* <div className={styles.drag-drop-area-separator}>OR</div> */}
              {/* <button className={styles.drag-drop-area-button}>Browse files</button> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <h1>IPFS Example</h1> */
}

{
  /* <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon icon-tabler icon-tabler-camera"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
            <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"></path>
            <circle cx="12" cy="13" r="3"></circle>
          </svg> */
}
{
  /* <div className={styles.profile}>
            <button type="button" onChange={onChange}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon icon-tabler icon-tabler-camera"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"></path>
                <circle cx="12" cy="13" r="3"></circle>
              </svg>
            </button>
          </div> */
}
