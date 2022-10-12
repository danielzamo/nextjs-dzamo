import Head from 'next/head'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Dzamo | static content</title>
        <meta name="description" content="Ansible, RHEL + derivate, Debian + derivate, KVM, Docker" />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <Skills />
    <Projects />
    </div>
  )
}
