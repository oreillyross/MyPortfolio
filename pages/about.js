import MyStory from "./mystory.mdx";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="about__header">
      <header>
        <nav>
          <Link href="/about">about</Link> | musings | open for hire | contact
        </nav>
        <MyStory />
      </header>
    </div>
  );
}
