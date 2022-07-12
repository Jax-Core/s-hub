import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Highlights from '../components/Highlights'

export default function Home() {
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
