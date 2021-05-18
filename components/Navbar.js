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
        <Image src="/img/home.svg" height={20} width={20} />
      </Link>
      <Link href="/mystory">about</Link> |<Link href="/mystory">musings</Link> |
      <Link href="/portfolio">portfolio</Link> |
      <Link href="/howiwork">open for hire</Link> |
      <Link href="/mystory">contact </Link>
    </nav>
  );
};
