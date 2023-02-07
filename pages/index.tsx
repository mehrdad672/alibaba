import Head from "next/head";
import Image from "next/image";
import Accordions from "../components/Accordions";
import Footer from "../components/footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Insurance from "../components/Insurance";
import Search from "../components/search/Search";
import Scroller from "../components/UI/scroller";
import book from "../public/images/Book.png";
import card from "../public/images/card.png";
export default function Home() {
  return (
    <div className="bg-[#f6f6f6]">
      <Head>
        <title>M:R</title>
        <meta name="description" content="Developed by Mehrdad Roienyan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="px-4 py-3 bg-white font-iran max-w-full">
        <Header />
      </header>
      <main className="font-iran bg-[#f6f6f6] max-w-full">
        <section id="hero">
          <Hero source="/../public/hero-824e4df4.webp" />
        </section>
        <section
          className="z-30 translate-y-[-80px] font-iran"
          id="search_Form"
        >
          <Search />
          <Scroller/>
        </section>
        <Insurance />
        <div className="flex items-center my-8 justify-between mx-auto w-[1200px] ">
          <Image className="rounded-xl" width={585} height={228} src={card} alt="card" />
          <Image className="rounded-xl" width={585} height={228} src={book} alt="book" />
        </div>
        
        <section className="font-iran mb-5" id="fqa">
          <Accordions />
        </section>
      </main>
      <section className="mt-10 bg-white">
        <Footer />
      </section>
      
    </div>
  );
}
