import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex md:flex-col items-center justify-between bg-red-200 p-2 m-4">
     
      <Link href="/mystory">My journey</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/Stack">Tech stack</Link>
      <Link href="/openforhire">Open for hire</Link>
 
    </nav>
  );
};
