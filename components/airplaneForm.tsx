import React, { useState } from "react";
import Inputd from "./inputItem";
import { RangeDatePicker, DatePicker as Dp } from "jalali-react-datepicker";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { Value } from "react-multi-date-picker";
import { Swap_Icon } from "../public/svgs";
type Props = {};

const AirplaneForm = (props: Props) => {

  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [amount, setAmount] = useState<number | string>("");
  const [isTwoWay, setIsTwoWay] = useState<boolean>(false);
const swap = (e: React.FormEvent<HTMLButtonElement>)=>{
  e.preventDefault()
  const curStart = start;
  const curEnd = end;
  setEnd(curStart)
  setStart(curEnd)
}
const oneTwoWayHandler = (e: { preventDefault: () => void; })=>{
e.preventDefault()
setIsTwoWay(!isTwoWay)

}
  return (
    <form className="w-full max-w-full flex items-end space-y-5 py-5 px-16 flex-col h-[140px]">
      <div className="flex justify-end">
        <select onChange={oneTwoWayHandler} className="text-right rounded-3xl border border-gray-300 text-gray-400 focus:outline-none">
          <option value="رفت">رفت</option>
          <option value="رقت و برگشت">رفت و برگشت</option>
        </select>
      </div>
      <div className="max-w-full flex justify-center items-center flex-row-reverse">
        <div className="flex flex-row-reverse items-center justify-end">
          <div className={`relative h-6 w-[212px]`}>
            <input
              className="peer text-right w-full rounded-r-xl focus:placeholder-transparent border border-gray-300 p-2 focus:outline-none"
              type="text"
              id="airplane_start"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
            <label
              className={`transition-all duration-200 ease-in-out text-gray-400 text-lg absolute bg-white rounded-full z-10 top-[45%] px-1 right-2 peer-focus:-top-[45%] ${
                start && "-top-[45%] scale-75"
              } peer-focus:scale-75`}
              htmlFor="airplane_start"
            >
              مبدا (شهر)
            </label>
            <button onClick={swap} className="absolute border border-gray-200 bg-slate-100 rounded-full  -left-[10px] z-20 text-gray-400 top-1/2">
              <Swap_Icon />
            </button>
          </div>
          <div className={`relative h-6 w-[212px]`}>
            <input
              className="peer text-right pr-5 w-full rounded-l-xl focus:placeholder-transparent border border-gray-300 p-2 focus:outline-none"
              type="text"
              id="airplane_end"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
            <label
              className={`transition-all duration-200 ease-in-out text-gray-400 text-lg absolute bg-white rounded-full z-10 top-[45%] px-1 right-3 peer-focus:-top-[45%] ${
                end && "-top-[45%] scale-75"
              } peer-focus:scale-75`}
              htmlFor="airplane_end"
            >
              مقصد (شهر)
            </label>
          </div>
        </div>
        <div className="flex mr-4 ">
          <div className={`relative h-6 w-[120px]`}>
            <input
              className="peer disabled:bg-gray-100 rounded-l-xl w-full focus:placeholder-transparent border border-gray-300 p-2 focus:outline-none"
              type="date"
              id="return-date"
              value={endDate}
              disabled={!isTwoWay}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <label
              className={`transition-all peer-disabled:bg-gray-100 duration-200  ease-in-out text-gray-400 text-lg absolute bg-white rounded-full z-10 top-[45%] px-1 right-2 peer-focus:-top-[45%] ${
                endDate && "-top-[45%] scale-75"
              } peer-focus:scale-75`}
              htmlFor="return-date"
            >
              تاریخ برگشت
            </label>
          </div>

          <div className={`relative h-6 w-[120px]`}>
            <input
              className="peer rounded-r-xl w-full focus:placeholder-transparent border border-gray-300 p-2 focus:outline-none"
              type="date"
              id="leave-date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <label
              className={`transition-all duration-200 ease-in-out text-gray-400 text-lg absolute bg-white rounded-full z-10 top-[45%] px-1 right-2 peer-focus:-top-[45%] ${
                startDate && "-top-[45%] scale-75"
              } peer-focus:scale-75`}
              htmlFor="leave-date"
            >
              تاریخ رفت
            </label>
          </div>
        </div>
        <div className="flex justify-center flex-row-reverse items-center">
          <div className={`relative h-6 w-[120px] mr-3`}>
            <input
              className="peer w-full text-right rounded-xl focus:placeholder-transparent border border-gray-300 p-2 focus:outline-none"
              type="number"
              id="passengers"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <label
              className={`transition-all  duration-200 ease-in-out text-gray-400 text-lg absolute bg-white rounded-full z-10 top-[45%] px-1 right-2 peer-focus:-top-[45%] ${
                amount && "-top-[45%] scale-75"
              } peer-focus:scale-75`}
              htmlFor="passengers"
            >
              مسافران
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

export default AirplaneForm;