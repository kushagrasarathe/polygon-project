import { EthereumAuthProvider } from "@self.id/web";
import { useProvider, useAccount } from "wagmi";
import { useViewerConnection } from "@self.id/react";

import { useViewerRecord } from "@self.id/react";
import { usePublicRecord } from "@self.id/framework";
import styles from "../../styles/Home.module.css";

/// get the hook from register setDID to set the Did for the user
export default function Ceramic() {
  /// returns the option to connect by calling connectToSelfID
  const [connection, connect] = useViewerConnection();
  /// DID for the viewee connected according to it's connected address
  // const DID = connection.selfID.id;

  const provider = useProvider();
  const { address } = useAccount();

  const getEthereumAuthProvider = async () => {
    return new EthereumAuthProvider(provider, address);
  };

  const connectToSelfID = async () => {
    console.log("Connecting");
    const ethereumAuthProvider = await getEthereumAuthProvider();
    await connect(ethereumAuthProvider);
    console.log("Connected");
    console.log(connection.status);
  };

  return (
    <div>
      {connection.status === "connected" ? (
        <a>{connection.selfID.id}</a>
      ) : (
        <button className={styles.submit_btn} onClick={connectToSelfID}>
          {" "}
          Connet to Ceramic{" "}
        </button>
      )}
    </div>
  );
}

/// to show
export function showRecordName() {
  // will show the details of the viewee
  const record = useViewerRecord("basicProfile");
  const data = record.content;
  return data;
}

export function SetViewer({ name, bio, title, pfp, content }) {
  // fetching the record
  const record = useViewerRecord("basicProfile");
  updateRecord();
  /// setting the new one
  const updateRecord = async () => {
    await record.merge({
      pfp: pfp,
      name: name,
      bio: bio,
      title: title,
      content: content,
    });
  };
}

/// getting the record details
export function getRecordName({ did }) {
  /// get the record for other person and can be fetched for them
  const record = usePublicRecord("basicProfile", did);
  const data = record.content;
  /// we can fetch the remaing things directly from the data
  return data;
}
