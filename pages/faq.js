import Head from 'next/head'
import FAQs from '../components/faq/FAQs'

export default function FAQ() {
  return (
    <div>
      <Head>
        <title>S Hub by JaxCore </title>
        <meta name="description" content="Description goes here" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <FAQs />
    </div>
  )
}
