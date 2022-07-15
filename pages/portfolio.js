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
            <li>Brainy Notes</li>
             <p>This project is a spin-off from the much over done Blog post, and tod list apps that everyone does when demostrating a certain piece of technology, 
               language, framework etc. I decided to create this project because it also solves a personal pain point for me, as I am constantly saving snippets of 
                 code, good practices, config settings etc and as of yet havent found a reasonable place to sotre this data for easy retrieval.
                 
                 So I created brainy notes. It is built using create react app and typescript, uses supabase as the BAAS for data storage, tailwindCSS for styling, react router, and 
react query for caching.
The app is intended to be re(built) multiple times over as I learn other technoligies. Linraries which I really want to try out next include:
1. tRPC, 
2. Prisma and Apollo
3. NX monorepo
  
                 </p>
          </ul>
        </section>
      </section>
    </>
  );
}
