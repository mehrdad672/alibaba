import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Ticket from "./ticket";
import RangeFilter from "../rangeFilter";
import { useAuth } from "../AuthContext";
type Props = {};

const SearchResults = (props: Props) => {
  const {
    minVal,
    maxVal,
    maxTimeChange,
    minTimeChange,
    filteredMax,
    filteredMin,
  } = useAuth();
  const mapTime = (digit: number) => {
    if (digit === 0) {
      return [5, 30];
    }
    if (digit % 2 === 0) {
      const time = [5 + digit / 2, 30];
      return time;
    } else {
      const time = [5 + (digit / 2 + 0.5), 0];
      return time;
    }
  };
  const [allTickets, setAllTickets] = useState<any>([]);
  const [sliderMin, setsliderMin] = useState<number[]>();
  const [sliderMax, setsliderMax] = useState<number[]>();
  const router = useRouter();
  useEffect(() => {
    fetch("https://alibaba-45er.vercel.app/api/flights")
      .then((res) => res.json())
      .then((data) =>
        setAllTickets(
          data
            .filter(
              (tic: any) => tic.departureTime[0] >= mapTime(filteredMin)[0]
            )
            .filter(
              (tic: any) => tic.departureTime[0] <= mapTime(filteredMax)[0]
            )
        )
      );
    console.log(router.query.to);
  }, [router, filteredMax, filteredMin]);

  // useEffect(()=>{

  //   const rawTickets=allTickets

  //   const filteredTickets=rawTickets.filter((tic:any)=>(tic.departureTime[0]>=mapTime(filteredMin)[0]))

  //   setAllTickets(filteredTickets)

  // },[filteredMax,filteredMin])

  const onSliderChange = (minmax: number[]) => {
    setsliderMin(mapTime(minmax[0]));
    setsliderMax(mapTime(minmax[1]));
    console.log("test");
  };

  const ticketsList = allTickets.map((tic: any) => {
    return (
      <Ticket
        from={router.query.from ? router.query.from : ""}
        to={router.query.to ? router.query.to : ""}
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
    <div className="flex justify-around  mt-10 py-3  ">
      <div className="w-[850px] " id="display-results">
        {ticketsList}
      </div>
      <div
        className="w-[300px] p-3 sticky top-20 bg-white rounded-xl border border-gray-200 shadow-md h-1/2 "
        id="filter-section"
      >
        <div className="flex flex-col justify-center items-center">
          <RangeFilter change={onSliderChange} min={0} max={48} /> <br />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
