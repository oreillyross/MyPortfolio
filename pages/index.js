import Link from "next/link";
import Hero from "../components/Hero";


export default function IndexPage() {
  return (
    <div>
      <Hero />
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/howiwork">
        <a>Work</a>
      </Link>
    </div>
  );
}
