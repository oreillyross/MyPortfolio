import Image from "next/image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const imgStyle = css`
  background: red;
  img {
    border: 1px solid black;
  }
`;

const aboutHeader = css`
  color: red;
  border: 1px solid black;
  background: tomato;
`;

const AboutHeader = styled.div`
  ${aboutHeader}
`;

export default function MyStory() {
  return (
    <>
      <AboutHeader>
        <h3>My story</h3>
      </AboutHeader>
      <div className={imgStyle}>
        I began programming in the early _1990s_. <br />
        <br />
        <Image src="/img/back_in_the_day.svg" width={650} height={850} />
        I started with Amiga BASIC and then formally studied computer science
        completing a one year diploma course in computer studies where I learnt
        all about the basics of computers, (hardware, memory, systems design
        etc.). I also learnt to code in COBOL and I finished my course being
        introduced to Turbo Pascal. <br />
        <br />
        <Image src="/img/data_processing.svg" width={650} height={850} />
        I went on to work for a medical applications company called Orion, now
        called Health Focus as a software support technician. Later in early
        2000 I worked for a software development company called Real Systems,
        now called Khanyisa Real Systems. I worked mainly in Delphi, and a few
        months before I left I coded in Java working on a form making app using
        an xml configuration file and SOAP.
        <br />
        <br />
        <Image src="/img/java.svg" width={600} height={850} />
        I left the industry around 2003, and left my homeland, South Africa and
        worked in the emergency medical field, and later in the security
        management field up to 2021.
        <br />
        <br />
        In 2013 I picked up programming again, mainly as a hobby and something
        to do in the evenings. I wanted to get back into the field of software
        development but wasn't quite sure where to start or what to specialise
        in. I took countless courses online ranging from Haskell, Scala,
        Microservices, Java, Javascript, Typescript courses to name a few and
        landed on the following combination where I continue to finesse my
        skills: HTML5, CSS, ES6+, Typescript, and GraphQL. <br />
        <br />
        I am continually learning and am now focused on learning Docker, and the
        Serverless landscape.
        <br />
        <br />
        Following the COVID pandemic, I like many thousands of others reflected
        on their lives and I decided that I wanted to work full time in the
        field of software development again to be able to take advantage of the
        more fulfilling life as a coder, with freedom to work remotely, and
        freedom to be creative.
      </div>
      <div className="mystory__footer">Take me Home</div>
    </>
  );
}
