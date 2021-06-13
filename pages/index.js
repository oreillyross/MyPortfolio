import Link from "next/link";
import { css } from "@emotion/css";

const front_page = css`
  section {
    text-align: left;
    font-size: 1.5rem;
    padding: 1rem;
  }
  text-align: center;
  min-height: 80vh;
  @media (max-width: 450px) {
    img {
      height: 250px;
    }
  }
`;

export default function IndexPage() {
  return (
    <div className="front-page">
      <section>
        <aside>
          <h2>Hi, my name is Ross</h2>
        </aside>
        <img
          src="./img/freelancer.svg"
          width={300}
          height={250}
          alt="Programmer sitting at his laptop"
        />
        <div className="hero">
          <h4>Full Stack software engineer</h4>
        </div>
        <h3>My story</h3>
      </section>
      <article className="my-story">
        <h4>rediscover</h4>

        <p>
          In late 2014 through a desire to re-explore the world of software
          development I began looking at what online courses were being offered.
          At the time I really did not know what I wanted to work on but I knew
          I had to choose carefully knowing how quickly fads in the world of
          software engineering come and go.{" "}
        </p>
        <p>
          Through a process of elimination I arrived 4 years later at a core
          competency of being a full stack software developer using Typescript,
          Javascript, Node, HTML, CSS and the React library and NextJS and
          Gatsby frameworks. My journey began with me learning Scala having
          taken Martin Odersky’s wonderful online course through Coursera.
          Having coded in Java, and Delphi before I left the industry in the
          late 90’s I felt like Scala was a natural place to start. Having
          completed Martin’s Functional Programming course in December of 2014,
          I looked around at more similar courses in functional programming as
          this was an area I was not familiar with, having come from a strong
          Object Oriented Programming (OOP) background.{" "}
        </p>
        <h4>re-educate</h4>
        <p>
          In the following months I went on to complete similar courses led by
          Martin and two other computer scientists Roland Kuhn and Erik Meijer.
          I completed the course Principles of Reactive Programming in June 2015
          which was also being offered by Coursera at the time. And so the
          journey went, where I dabbled in completing a raft of courses to try
          to get a feel where I not only would excel, but also a skillset which
          I could grow into. I completed the MongoDB for Java developers course,
          Java Essential training, and Javascript essential training on the
          Lynda training site. I completed the Java SE 8 MOOC course on Lambdas
          and Streams in July 2015.
        </p>
        <p>
          {" "}
          As my interest grew in the field of functional programming, I also
          realised my education in Computer Studies which I took in mid 1990’s
          had only covered Systems design and business applications of COBOL,
          and Pascal code. I subsequently explored more fundamental computer
          science subjects and took the online course Paradigms of Computer
          Programming offered by Peter Van Roy from UCL, in France. I also
          completed a follow-on course offered by Erik Meijer through Delft
          University, called Introduction to Functional Programming.
        </p>
        <h4>reinvent</h4>
        <p>
          During this time I had been using the general purpose language
          Javascript because many of the functional programming techniques could
          easily be applied using Javascript. The language began to grow on me,
          and I was already exploring writing web apps using React, and had been
          closely following the rapid adoption of React in the wider community.
          When typescript was released, I was hooked after I realised Anders
          Hejlsberg was the core architect. Anders wrote Turbo Pascal, one of
          the first formal languages I studied and used in production. I had
          found the space I wanted to focus on in Software engineering. This was
          around 2018, and I realised that if I wanted to really excel in this
          space like all the cool kids on the block, I had to properly learn
          HTML, and CSS. The following two years I followed a number of online
          courses and learnt from some of the best such as Erik Meyer, and
          Rachel Andrews, both CSS experts.{" "}
        </p>
        <h4>reclaim</h4>
        <p>
          And here we are, in 2021. I have a strong grasp of Typescript,
          Javascript, NodeJS development using the React library, and all its
          associated popular libraries such as React Router and the CSS-in-JS
          libraries, Emotion, and Styled Components.
        </p>
      </article>

      <article className="contact">
        <h3>Contact</h3>
        <section>
          <div><a
            href="https://github.com/oreillyross"
            target="_blank"
            rel="noopener noreferrer"
          >
            github</a></div>
          <div><a
            href="https://stackoverflow.com/users/story/4109124"
            target="_blank"
            rel="noopener noreferrer"
          >
            stackoverflow</a></div>
          <div><a
            href="mailto:oreillyross@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            email</a></div>
        </section>
      </article>
    </div>
  );
}
