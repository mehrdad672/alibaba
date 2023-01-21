import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import QuickSearch from "../components/search/quickSearch";
import SearchResults from "../components/search/searchResults";
import Ticket from "../components/search/ticket";

type Props = {};

const flight = (props: Props) => {
  const [allTickets, setAllTickets] = useState<any>([]);
  const router = useRouter();
  useEffect(() => {
    fetch("/api/flights")
      .then((res) => res.json())
      .then((data) => setAllTickets(data));
  }, [router]);

  const ticketsList = allTickets.map((tic: any) => {
    return (
      <Ticket
        from={"shiraz"}
        to={"tehran"}
        depTime={tic.departureTime}
        landTime={tic.arrivalTime}
        price={tic.price}
        company={tic.company}
        airplane={tic.airplane}
        type={tic.ticketType}
      />
    );
  });
  return (
    <>
      <section className="bg-white shadow-lg font-iran">
        <Header />
        <QuickSearch />
      </section>
      <main>
        <section id="search-result">
          <SearchResults />
          
        </section>
      </main>
    </>
  );
};

export default flight;
