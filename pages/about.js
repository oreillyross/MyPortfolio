import MyStory from "./mystory";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="about__header">
      <header>
        <nav>
          <Link href="/about">about</Link> | musings | open for hire | contact
        </nav>
        <div>
          <MyStory />
        </div>
      </header>
    </div>
  );
}
