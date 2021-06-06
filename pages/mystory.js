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
        In late 2014 through a desire to re-explore the world of software
        development I began looking at what online courses were being offered.
        At the time I really did not know what I wanted to work on but I knew I
        had to choose carefully knowing how quickly fads in the world of
        software engineering come and go. Through a process of elimination I
        arrived 4 years later at a core competency of being a full stack
        software developer using Typescript, Javascript, Node, HTML, CSS and the
        React library and NextJS and Gatsby frameworks. My journey began with me
        learning Scala having taken Martin Odersky’s wonderful online course
        through Coursera. Having coded in Java, and Delphi before I left the
        industry in the late 90’s I felt like Scala was a natural place to
        start. Having completed Martin’s Functional Programming course in
        December of 2014, I looked around at more similar courses in functional
        programming as this was an area I was not familiar with, having come
        from a strong Object Oriented Programming (OOP) background. In the
        following months I went on to complete similar courses led by Martin and
        two other computer scientists Roland Kuhn and Erik Meijer. I completed
        the course Principles of Reactive Programming in June 2015 which was
        also being offered by Coursera at the time. And so the journey went,
        where I dabbled in completing a raft of courses to try to get a feel
        where I not only would excel, but also a skillset which I could grow
        into. I completed the MongoDB for Java developers course, Java Essential
        training, and Javascript essential training on the Lynda training site.
        I completed the Java SE 8 MOOC course on Lambdas and Streams in July
        2015. As my interest grew in the field of functional programming, I also
        realised my education in Computer Studies which I took in mid 1990’s had
        only covered Systems design and business applications of COBOL, and
        Pascal code. I subsequently explored more fundamental computer science
        subjects and took the online course Paradigms of Computer Programming
        offered by Peter Van Roy from UCL, in France. I also completed a
        follow-on course offered by Erik Meijer through Delft University, called
        Introduction to Functional Programming. During this time I had been
        using the general purpose language Javascript because many of the
        functional programming techniques could easily be applied using
        Javascript. The language began to grow on me, and I was already
        exploring writing web apps using React, and had been closely following
        the rapid adoption of React in the wider community. When typescript was
        released, I was hooked after I realised Anders Hejlsberg was the core
        architect. Anders wrote Turbo Pascal, one of the first formal languages
        I studied and used in production. I had found the space I wanted to
        focus on in Software engineering. This was around 2018, and I realised
        that if I wanted to really excel in this space like all the cool kids on
        the block, I had to properly learn HTML, and CSS. The following two
        years I followed a number of online courses and learnt from some of the
        best such as Erik Meyer, and Rachel Andrews, both CSS experts. And here
        we are, in 2021. I have a strong grasp of Typescript, Javascript, NodeJS
        development using the React library, and all its associated popular
        libraries such as React Router and the CSS-in-JS libraries, Emotion, and
        Styled Components. I began programming in the early _1990s_. <br />
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
