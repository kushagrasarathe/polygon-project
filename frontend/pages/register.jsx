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

      {/* <div className={styles.center}>
      <h1 className={styles.rHead}>Enter Details</h1>
      <div className={styles.register}>


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
    </div> */}
    </>
  );
}
