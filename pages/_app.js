import "../style/styles.css";
import { Navbar } from "../components/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Component {...pageProps} />
    </>
  );
}
