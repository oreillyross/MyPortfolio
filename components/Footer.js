import Link from "next/link";
import { css } from "@emotion/css";

const footer__main = css`
  min-height: 50px;
  background: white;
`;

export const Footer = () => {
  return (
    <>
      <div className={footer__main}>
        <Link href="/credits">credits</Link>
      </div>
    </>
  );
};
