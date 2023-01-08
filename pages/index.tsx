import Head from 'next/head'
import Accordions from '../components/Accordions'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>M:R</title>
        <meta name="description" content="Developed by Mehrdad Roienyan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='font-iran'>
        <section id='header' className='px-4 py-3'>
          <Header />
        </section>
        <section id='hero'>
          
        </section>
        <section className='font-iran' id='fqa'>
          <Accordions/>
        </section>
       
      </main>
    </>
  )
}
