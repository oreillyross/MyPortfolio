import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <header>My portfolio</header>
      <section>
        <article>
          I have broken up my work up into two types of projects. thie first is
          ones I have created for educational purposes. These are projects where
          I have set out to learn about a certain piece of new technology, or I
          am following a tutorial on an open learning online platform such as
          educative, freecodecamp, frontendmasters smashing magazine etc etc
          etc... The second is ones which are pet projects of mine, mostly all
          open source projects, in the sense that the code is hosted on github
          in the public repository. These demonstrate my coding ability futher
          than one off examples, and highlight my skills in integrating
          disparate tech stacks. Think NextJS, with Auth0 as authentication
          layer, hosted on Netlify, using serverless functions for some
          functionality. Or bundling up a React app using Progressive web App
          technology using Docker to host the site on an AWS server.
        </article>
        <section>
          <header>Pet side projects</header>
          <ul>
            <li>GreedyAnt</li>
            <li>Horizon</li>
          </ul>
        </section>
        <section>
          <header>Educational projects</header>
          <ul>
            <li>
              React Strictly Typed
              <Image src="/img/codesandbox.webp" width={20} height={20} />
            </li>
            <li>Horizon</li>
          </ul>
        </section>
      </section>
    </>
  );
}
