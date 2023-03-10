import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { Swap_Icon } from "../../../public/svgs";
import AutoCompleteInput from "../inputs/autoCompleteInput";
type Props = {};
const ForeignAirplaneForm: React.FC = (props: Props) => {
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");
  const [isTwoWay, setIsTwoWay] = useState<boolean>(false);
  const [startIsValid, setStartIsValid] = useState(true);
  const [endIsValid, setEndIsValid] = useState(true);
  const [endDateIsValid, setEndDateIsValid] = useState(true);
  const [startDateIsValid, setStartDateIsValid] = useState(true);

  const router = useRouter();

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
  const nextClickHandler = (id: string) => {
    document.getElementById('endInput')?.focus();
    console.log('run')
  };
  const endChangeHandler = (newValue: string) => {
    setEnd(newValue);
    setEndIsValid(true);
  };
  const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let formIsValid = true;
    if (start.trim().length === 0) {
      setStartIsValid(false);
      formIsValid = false;
    }
    if (end.trim().length === 0) {
      setEndIsValid(false);
      formIsValid = false;
    }
    if (startDate.trim().length === 0) {
      setStartDateIsValid(false);
      formIsValid = false;
    }
    if (endDate.trim().length === 0 && isTwoWay) {
      setEndDateIsValid(false);
      formIsValid = false;
    }
    if (formIsValid) {
      router.push({
        pathname: "/foreigns",
        query: { from: start, to: end },
      });
    }
  };
  return (
    <form className="w-full max-w-full flex items-end space-y-5 py-5 px-16 flex-col h-[140px]">
      <div className="flex justify-end">
        <select
          onChange={oneTwoWayHandler}
          className="text-right rounded-3xl border border-gray-300 text-gray-600 focus:outline-none"
        >
          <option className="text-gray-900 bg-white" value="??????">
            ??????
          </option>
          <option value="?????? ?? ??????????">?????? ?? ??????????</option>
        </select>
      </div>
      <div className="max-w-full flex justify-center items-center flex-row-reverse">
        <div className="flex relative flex-row-reverse space-x-1 items-center justify-end">
          <AutoCompleteInput
           
            isValid={startIsValid}
            id="fstartInput"
            value={start}
            changeHandler={startChangeHandler}
            options={["??????????", "??????????????", "??????????"]}
            width="212"
            label="???????? (??????)"
          />
          <button
            onClick={swap}
            className=" border border-gray-200 bg-slate-100 rounded-full mt-4 z-20 text-gray-400 "
          >
            <Swap_Icon />
          </button>
          <AutoCompleteInput
           
            isValid={endIsValid}
            id="fendInput"
            value={end}
            changeHandler={endChangeHandler}
            options={["??????????", "??????????????", "??????????"]}
            width="212"
            label="???????? (??????)"
          />
        </div>
        <div className="flex mr-4 ">
          <div className={`relative h-6 w-[120px]`}>
            <input
              className="peer  disabled:bg-gray-100 rounded-l-xl w-full focus:placeholder-transparent border border-gray-300 p-2 focus:ring-transparent focus:border-black focus:outline-none"
              type="date"
              id="freturn-date"
              value={endDate}
              disabled={!isTwoWay}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <label
              className={`transition-all  peer-disabled:bg-gray-100 duration-200  ease-in-out text-gray-400 text-lg absolute bg-white rounded-full z-10 top-[45%] px-1 right-2 peer-focus:-top-[45%] ${
                endDate && "-top-[45%] scale-75"
              } peer-focus:scale-75`}
              htmlFor="freturn-date"
            >
              ?????????? ??????????
            </label>
          </div>

          <div className={`relative h-6 w-[120px]`}>
            <input
              className="peer rounded-r-xl w-full focus:placeholder-transparent border border-gray-300 p-2 focus:ring-transparent focus:border-black focus:outline-none"
              type="date"
              id="fleave-date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <label
              className={`transition-all duration-200 ease-in-out text-gray-400 text-lg absolute bg-white rounded-full z-10 top-[45%] px-1 right-2 peer-focus:-top-[45%] ${
                startDate && "-top-[45%] scale-75"
              } peer-focus:scale-75`}
              htmlFor="fleave-date"
            >
              ?????????? ??????
            </label>
          </div>
        </div>
        <div className="flex justify-center flex-row-reverse items-center">
          <div className={`relative h-6 w-[120px] mr-3`}>
            <input
              className="peer w-full text-right rounded-xl focus:placeholder-transparent border border-gray-300 p-2 focus:ring-transparent focus:border-black focus:outline-none"
              type="number"
              id="fpassengers"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <label
              className={`transition-all  duration-200 ease-in-out text-gray-400 text-lg absolute bg-white rounded-full z-10 top-[45%] px-1 right-2 peer-focus:-top-[45%] ${
                amount && "-top-[45%] scale-75"
              } peer-focus:scale-75`}
              htmlFor="fpassengers"
            >
              ??????????????
            </label>
          </div>
        </div>
        <button
          onClick={submitHandler}
          className="w-32 mt-[15px] mr-10 px-4 py-2 rounded-2xl bg-[#fdb713]"
          type="submit"
        >
          ??????????
        </button>
      </div>
    </form>
  );
};

export default ForeignAirplaneForm;
