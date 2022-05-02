import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className>
      <Head>
        <title>Next js Food App.</title>
        <meta name="description" content="Studying next js with project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
    </div>
  )
}
