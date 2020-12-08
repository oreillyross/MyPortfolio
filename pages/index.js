import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/howiwork">
        <a>Work</a>
      </Link>
    </div>
  );
}
