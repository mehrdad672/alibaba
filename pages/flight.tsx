import React from "react";
import Header from "../components/Header";
import QuickSearch from "../components/search/quickSearch";

type Props = {};

const flight = (props: Props) => {
  return (
    <>
      <section className="bg-white shadow-lg">
        <Header />
        <QuickSearch />
      </section>
      <main>
        <section id="search-result">
            
        </section>
       
      </main>
    </>
  );
};

export default flight;
