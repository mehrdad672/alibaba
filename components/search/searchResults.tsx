import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Ticket from './ticket'

type Props = {}

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
    <div className='flex justify-center mt-4 '>
        <div className='w-[850px] ' id='display-results'>
           {ticketsList} 
        </div>
        <div id='filter-section'></div>
    </div>
  )
}

export default SearchResults