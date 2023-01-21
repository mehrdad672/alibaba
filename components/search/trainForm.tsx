import React, { useRef, useState } from "react";
import { Swap_Icon } from "../../public/svgs";
import AutoCompleteInput from "./autoCompleteInput";
type Props = {};
const TrainForm: React.FC = (props: Props) => {
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [amount, setAmount] = useState<number | string>("");
  const [isTwoWay, setIsTwoWay] = useState<boolean>(false);
  const [gender, setGender] = useState<string>("both");
  const [startIsValid, setStartIsValid] = useState(true);
  const [endIsValid, setEndIsValid] = useState(true);
  const [endDateIsValid, setEndDateIsValid] = useState(true);
  const [startDateIsValid, setStartDateIsValid] = useState(true);
  const swap = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const curStart = start;
    const curEnd = end;
    setEnd(curStart);
    setStart(curEnd);
  };
  const oneTwoWayHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsTwoWay(!isTwoWay);
  };
  const startChangeHandler = (newValue: string) => {
    setStart(newValue);
    setStartIsValid(true);
  };
  const endChangeHandler = (newValue: string) => {
    setEnd(newValue);
    setEndIsValid(true);
  };
  return (
    <form className="w-full max-w-full flex items-end space-y-5 py-5 px-16 flex-col h-[140px]">
      <div className="flex flex-row-reverse justify-end">
        <select
          onChange={oneTwoWayHandler}
          className="text-right rounded-3xl border mx-2 border-gray-300 text-gray-600 focus:outline-none"
        >
          <option className="text-gray-900 bg-white" value="رفت">
            رفت
          </option>
          <option value="رقت و برگشت">رفت و برگشت</option>
        </select>
        <select
          onChange={(e) => setGender(e.target.value)}
          className="text-right rounded-3xl border border-gray-300 text-gray-600 focus:outline-none"
        >
          <option className="text-gray-900 bg-white" value="both">
            مسافرین عادی
          </option>
          <option value="man">ویژه برادران</option>
          <option value="woman">ویژه خواهران</option>
        </select>
      </div>
      <div className="max-w-full flex justify-center items-center flex-row-reverse">
        <div className="flex relative flex-row-reverse space-x-1 items-center justify-end">
          <AutoCompleteInput
            isValid={startIsValid}
            id="tstartInput"
            value={start}
            changeHandler={startChangeHandler}
            options={["تهران", "اهواز", "شیراز"]}
            width="212"
            label="مبدا (شهر)"
          />
          <button
            onClick={swap}
            className=" border border-gray-200 bg-slate-100 rounded-full mt-4 z-20 text-gray-400 "
          >
            <Swap_Icon />
          </button>
          <AutoCompleteInput
            isValid={endIsValid}
            id="tendInput"
            value={end}
            changeHandler={endChangeHandler}
            options={["تهران", "اهواز", "شیراز"]}
            width="212"
            label="مقصد (شهر)"
          />
        </div>
        <div className="flex mr-4 ">
          <div className={`relative h-6 w-[120px]`}>
            <input
              className="peer disabled:bg-gray-100 rounded-l-xl w-full focus:placeholder-transparent border border-gray-300 p-2 focus:outline-none"
              type="date"
              id="treturn-date"
              value={endDate}
              disabled={!isTwoWay}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <label
              className={`transition-all  peer-disabled:bg-gray-100 duration-200  ease-in-out text-gray-400 text-lg absolute bg-white rounded-full z-10 top-[45%] px-1 right-2 peer-focus:-top-[45%] ${
                endDate && "-top-[45%] scale-75"
              } peer-focus:scale-75`}
              htmlFor="treturn-date"
            >
              تاریخ برگشت
            </label>
          </div>

          <div className={`relative h-6 w-[120px]`}>
            <input
              className="peer rounded-r-xl w-full focus:placeholder-transparent border border-gray-300 p-2 focus:outline-none"
              type="date"
              id="tleave-date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <label
              className={`transition-all duration-200 ease-in-out text-gray-400 text-lg absolute bg-white rounded-full z-10 top-[45%] px-1 right-2 peer-focus:-top-[45%] ${
                startDate && "-top-[45%] scale-75"
              } peer-focus:scale-75`}
              htmlFor="tleave-date"
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
              id="tpassengers"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <label
              className={`transition-all  duration-200 ease-in-out text-gray-400 text-lg absolute bg-white rounded-full z-10 top-[45%] px-1 right-2 peer-focus:-top-[45%] ${
                amount && "-top-[45%] scale-75"
              } peer-focus:scale-75`}
              htmlFor="tpassengers"
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
      </div>
    </form>
  );
};

export default TrainForm;
