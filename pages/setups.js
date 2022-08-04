import Head from 'next/head'
import About from '../components/home/About'
import Main from '../components/home/Main'
import Highlights from '../components/home/highlights/Highlights'

export default function Setups() {
  return (
    <div>
      <Head>
        <title>S Hub by JaxCore </title>
        <meta name="description" content="Description goes here" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <Highlights />
      <About />
    </div>
  )
}
