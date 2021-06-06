import Image from "next/image";
import { css } from "@emotion/css";

const front_page = css`
  section {
    text-align: left;
    font-size: 1.5rem;
    padding: 1rem;
  }
  text-align: center;
  min-height: 80vh;
`;

export default function IndexPage() {
  return (
    <div className={front_page}>
      <section>Hi, My name is Ross</section>
      <Image src="/img/freelancer.svg" width={300} height={480} />
    </div>
  );
}
