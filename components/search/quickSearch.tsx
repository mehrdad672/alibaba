import React, { useState } from "react";
import {
  Airplanetoleft_Icon,
  Calender_Icon,
  Gobbler_Icon,
} from "../../public/svgs";
import AirplaneForm from "./airplaneForm";

type Props = {};

const QuickSearch = (props: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const activeHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <div
        onClick={activeHandler}
        className={`flex space-x-8 w-full visible justify-center transition-tranform duration-200 ease-in-out items-center cursor-pointer p-4 ${isActive && ' !h-0 opacity-0'}`}
      >
        <Gobbler_Icon />
        <p className="text-gray-400"> یک مسافر</p>
        <div className="flex">
          <h4>سه شنبه، 11 بهمن</h4>
          <Calender_Icon />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <h4>بلیط هواپیما تهران به اهواز</h4>
          <Airplanetoleft_Icon />
        </div>
      </div>
      <div className={`relative w-full flex justify-center h-auto transition-all duration-200 ease-in-out ${!isActive && 'h-0 invisible  opacity-0'} `}>
        <AirplaneForm />
            <button onClick={activeHandler} className="text-cyan-500 absolute top-0 left-20 bg-white rounded-3xl hover:bg-slate-300 px-2 py-1" type="button"> x بستن</button>
      </div>
    </div>
  );
};

export default QuickSearch;
