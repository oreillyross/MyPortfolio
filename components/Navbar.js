import Link from "next/link";
import Image from "next/image";
import { css } from "@emotion/css";

const navStyle = css`
  display: flex;
  justify-content: space-around;
  padding: 2rem 0;
  img:hover {
    cursor: pointer;
  }
`;
export const Navbar = () => {
  return (
    <nav className={navStyle}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/mystory">my story</Link> | 
      <Link href="/portfolio">portfolio</Link> |
      <Link href="/howiwork">open for hire</Link> |
      <Link href="/mystory">contact</Link>
    </nav>
  );
};
