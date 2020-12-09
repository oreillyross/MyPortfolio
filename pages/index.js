import Link from "next/link";
import Hero from "../components/Hero";
import Head from "next/head";
import { LinksBar } from '../components/LinksBar.js'

export default function IndexPage() {
  return (
    <div>
    <Head>
      <title>Front End Engineer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Hero/>
      <LinksBar />
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/howiwork">
        <a>Work</a>
      </Link>
      After a long sabbatical I have returned to the world of software development. I tinkered with computers for as long as I can remember, starting out with Amiga BASIC, formerly studying CS, COBOL, Pascal, Delphi and working in Java in the late 90's. I left the industry in early 2000 disillusioned with the state of web applications and a yearning to see what else the world had to offer. After a 13 year long round-trip travelling the world in the field of travel security and risk management I re-enter the world of software development. Excited by how much has changed and pleased that cloud based computing is an actual thing now. 
Absorbed by the developer culture, and actively engaged with developing apps using HTML5, CSS3, Javascript (ES5, ES6+), React, NextJs, Gatsby, GraphQL, Node.js along with the host of great supporting libraries to many to mention.

    </div>
  );
}
