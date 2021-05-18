import "../style/styles.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="wrapper">
        <div>
          <Navbar />
        </div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
