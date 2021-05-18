import Image from "next/image";

export default function IndexPage() {
  return (
    <>
      <article>Hi, My name is Ross</article>
      <Image src="/img/freelancer.svg" width={300} height={480} />
    </>
  );
}
