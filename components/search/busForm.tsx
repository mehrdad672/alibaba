import React, { useState } from "react";
import { Swap_Icon } from "../../public/svgs";
type Props = {};
const BusForm = (props: Props) => {
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const [startDate, setStartDate] = useState<string>();
 
  

  const swap = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const curStart = start;
    const curEnd = end;
    setEnd(curStart);
    setStart(curEnd);
  };
 
  return (
    <form className="w-full max-w-full flex items-center justify-center space-y-5 py-5 px-16 flex-col h-[140px]">
     
      <div className="max-w-full flex justify-center items-center flex-row-reverse">
        <div className="flex flex-row-reverse items-center justify-end">
          <div className={`relative group h-6 w-[212px]`}>
            <input
              className="peer text-right w-full rounded-r-xl focus:placeholder-transparent border border-gray-300 p-2 focus:outline-none"
              type="text"
              id="bus_start"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
            <label
              className={`transition-all duration-200 ease-in-out text-gray-400 text-lg absolute bg-white rounded-full z-10 top-[45%] px-1 right-2 peer-focus:-top-[45%] ${
                start && "-top-[45%] scale-75"
              } peer-focus:scale-75`}
              htmlFor="fairplane_start"
            >
              مبدا ( شهر و پایانه)
            </label>
            <button
              onClick={swap}
              className="absolute border border-gray-200 bg-slate-100 rounded-full  -left-[10px] z-20 text-gray-400 top-1/2"
            >
              <Swap_Icon />
            </button>
          </div>
          <div className={`relative h-6 w-[212px]`}>
            <input
              className="peer text-right pr-5 w-full rounded-l-xl focus:placeholder-transparent border border-gray-300 p-2 focus:outline-none"
              type="text"
              id="bus_end"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
            <label
              className={`transition-all duration-200 ease-in-out text-gray-400 text-lg absolute bg-white rounded-full z-10 top-[45%] px-1 right-3 peer-focus:-top-[45%] ${
                end && "-top-[45%] scale-75"
              } peer-focus:scale-75`}
              htmlFor="fairplane_end"
            >
              مقصد (شهر و پایانه)
            </label>
          </div>
        </div>
        <div className="flex mr-4 ">
         

          <div className={`relative h-6 w-[120px]`}>
            <input
              className="peer rounded-xl w-full focus:placeholder-transparent border border-gray-300 p-2 focus:outline-none"
              type="date"
              id="bus-date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <label
              className={`transition-all duration-200 ease-in-out text-gray-400 text-lg absolute bg-white rounded-full z-10 top-[45%] px-1 right-2 peer-focus:-top-[45%] ${
                startDate && "-top-[45%] scale-75"
              } peer-focus:scale-75`}
              htmlFor="bus-date"
            >
              تاریخ 
            </label>
          </div>
        </div>
        <button
          className="w-32 mt-[15px] mr-10 px-4 py-2 rounded-2xl bg-[#fdb713]"
          type="submit"
        >
          جستجو
        </button>
        <h1></h1>
      </div>
    </form>
  );
};

export default BusForm;
