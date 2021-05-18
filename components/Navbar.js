import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <Image src="/img/home.svg" height={20} width={20} />
      </Link>
      <Link href="/mystory">about</Link> |<Link href="/mystory">musings</Link> |
      <Link href="/mystory">open for hire</Link> |
      <Link href="/mystory">contact </Link>
    </nav>
  );
};
