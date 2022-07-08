import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <NextUIProvider> */}
        <Navbar />
        <Component {...pageProps} />
        <hr />
        <Footer />
      {/* </NextUIProvider> */}
    </>
  );
}

export default MyApp;
