import "../style/styles.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
