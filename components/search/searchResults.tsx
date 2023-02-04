import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Ticket from "./ticket";
import RangeFilter from "../rangeFilter";
import { useAuth } from "../AuthContext";
type Props = {};

const SearchResults = (props: Props) => {
  const {
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
  const [systemCheck, setSystemCheck] = useState<boolean>(false);
  const [charterCheck, setCharterCheck] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    fetch("/api/flights")
      .then((res) => res.json())
      .then((data) => {
        setAllTickets(
          data
            .filter(
              (tic: any) => tic.departureTime[0] >= mapTime(filteredMin)[0]
            )
            .filter(
              (tic: any) => tic.departureTime[0] <= mapTime(filteredMax)[0]
            )
            .filter((tic: any) =>
              systemCheck || charterCheck
                ? (systemCheck && tic.ticketType === "سیستمی") ||
                  (charterCheck && tic.ticketType === "چارتری")
                : tic
            )
        );
      });
  }, [router, filteredMax, filteredMin, systemCheck, charterCheck]);

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
    <div className="flex justify-around px-3  mt-10 py-3 font-iran  ">
      <div className="w-[850px] " id="display-results">
        {ticketsList}
      </div>
      <div
        className="w-[350px] p-3 sticky top-20 bg-white rounded-xl border border-gray-200 shadow-md h-1/2 "
        id="filter-section"
      >
        <p className=" text-right text-gray-600 font-semibold text-lg px-4 border-b py-2 tracking-[1px] border-b-gray-200 ">
          {ticketsList.length} : نتایج
        </p>
        <div className=" border-b border-b-gray-200">
          <h5 className="text-right px-4 text-gray-600 text-lg tracking-[1px] mt-3 font-semibold">
            ساعت حرکت
          </h5>
          <div className="flex justify-center pb-8">
            <RangeFilter />
          </div>
        </div>
        <div className=" border-b py-3 border-b-gray-200">
          <h5 className="text-right px-4 pb-3 text-gray-600 text-lg tracking-[1px] mt-3 font-semibold">
            نوع بلیط
          </h5>
          <div className="px-4 pb-4 text-gray-600">
            <div className="flex items-center justify-end space-x-2">
              <label htmlFor="system">سیستمی</label>
              <input
                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-transparent focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="checkbox"
                id="system"
                checked={systemCheck}
                onChange={() => setSystemCheck(!systemCheck)}
              />
            </div>
            <div className=" flex items-center justify-end space-x-2">
              <label htmlFor="charter">چارتر</label>
              <input
                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-transparent focus:ring-2 dark:bg-gray-700 dark:border-gray-600  "
                type="checkbox"
                id="charter"
                checked={charterCheck}
                onChange={() => setCharterCheck(!charterCheck)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
