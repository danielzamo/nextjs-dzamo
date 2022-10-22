import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
/*
import About from "../components/About";
import Contact from "../components/Contact";
*/

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel Zamo | Linux</title>
        <meta name="description" content="Next portfolio to Daniel Oscar Zamo" />
        <meta name="description" content="Ansible, RHEL, Red Hat Enterprise Linux, git, Markdown, Gitlab, Github" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <Projects />
      <Skills />
      {/** <About />
            <Contact />
      
      */}
    </div>
  );
}
