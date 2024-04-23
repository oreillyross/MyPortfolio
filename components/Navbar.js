import Link from "next/link";

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
