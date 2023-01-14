import Head from "next/head";
import { useEffect } from "react";
import Accordions from "../components/Accordions";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Inputd from "../components/search/inputItem";
import Search from "../components/search/Search";

export default function Home() {
  return (
    <>
      <Head>
        <title>M:R</title>
        <meta name="description" content="Developed by Mehrdad Roienyan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="header" className="px-4 py-3 font-iran max-w-full">
        <Header />
      </section>
      <main className="font-iran bg-[#f6f6f6] max-w-full">
        <section id="hero">
          <Hero source="/../public/hero-824e4df4.webp" />
        </section>
        <section className="z-30 translate-y-[-80px]" id="search">
          <Search />
        </section>
        
        <section className="font-iran" id="fqa">
          <Accordions />
        </section>
      </main>
    </>
  );
}
