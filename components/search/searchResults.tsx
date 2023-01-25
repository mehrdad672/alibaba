import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Ticket from "./ticket";
import MultiRangeSlider from "../multiRangeSlider";
import RangeSlider from "../multiRangeSlider";
type Props = {};

const SearchResults = (props: Props) => {
  const [allTickets, setAllTickets] = useState<any>([]);
  const router = useRouter();
  useEffect(() => {
    fetch("https://alibaba-45er.vercel.app/api/flights")
      .then((res) => res.json())
      .then((data) => setAllTickets(data));
  }, [router]);

  const ticketsList = allTickets.map((tic: any) => {
    return (
      <Ticket
        from={"شیراز"}
        to={"تهران"}
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
    <div className="flex justify-around  mt-4  ">
      <div className="w-[850px] " id="display-results">
        {ticketsList}
      </div>
      <div
        className="w-[300px] p-3  bg-white rounded-xl border border-gray-200 shadow-md h-screen "
        id="filter-section"
      >
        <div className="flex flex-col justify-center items-center">
          <RangeSlider min={0} max={48} />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
