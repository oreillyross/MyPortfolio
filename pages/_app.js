import "../style/styles.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { css } from "@emotion/css";

const app = css`
  width: 95vw;
  margin: 0 auto;
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={app}>
      <div className="wrapper">
        <div>
        </div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
