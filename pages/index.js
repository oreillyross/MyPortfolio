import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <header>
        <nav>
          <Link href="/mystory">about</Link> | musings | open for hire | contact
        </nav>
        Hi, My name is Ross
      </header>
    </>
  );
}
