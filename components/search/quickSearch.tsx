import React, { useState } from "react";
import {
  Airplanetoleft_Icon,
  Calender_Icon,
  Gobbler_Icon,
  Train_Icon2,
  Bus_Icon2,
} from "../../public/svgs";
import AirplaneForm from "./forms/airplaneForm";
import ForeignAirplaneForm from "./forms/foreignAirplaneForm";
import TrainForm from "./forms/trainForm";
import BusForm from "./forms/busForm";
import { useRouter } from "next/router";

type Props = {};

const QuickSearch = (props: Props) => {
  const router = useRouter();
  const from = router.query.from;
  const to = router.query.to;
  const transportation = router.asPath;
  const [isActive, setIsActive] = useState<boolean>(false);
  const activeHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <div
      className={`w-full bg-white transition-all duration-200 font-iran ease-in-out h-[70px] ${
        isActive && "!h-[120px]"
      }`}
    >
      <div
        onClick={activeHandler}
        className={`flex space-x-8 w-full visible justify-center transition-tranform duration-200 ease-in-out items-center cursor-pointer p-4 ${
          isActive && " hidden"
        }`}
      >
        <Gobbler_Icon />
        <p className="text-gray-400"> یک مسافر</p>
        <div className="flex">
          <h4>سه شنبه، 11 بهمن</h4>
          <Calender_Icon />
        </div>
        <div className="flex items-center justify-center space-x-2">
          {transportation.includes("flight") ||
          transportation.includes("foreigns") ? (
            <div className="flex items-center justify-center space-x-2">
              <h4>
                بلیط هواپیما {from} به {to}
              </h4>
              <Airplanetoleft_Icon />
            </div>
          ) : transportation.includes("train") ? (
            <div className="flex items-center justify-center space-x-2">
              <h4>
                بلیط قطار {from} به {to}
              </h4>
              <Train_Icon2 />
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <h4>
                بلیط اتوبوس {from} به {to}
              </h4>
              <Bus_Icon2 />
            </div>
          )}
        </div>
      </div>
      <div
        className={`relative w-full flex justify-center h-auto transition-all duration-200 ease-in-out ${
          !isActive && " hidden  "
        } `}
      >
        {transportation.includes("flight") ? (
          <AirplaneForm />
        ) : transportation.includes("foreign") ? (
          <ForeignAirplaneForm />
        ) : transportation.includes("train") ? (
          <TrainForm />
        ) : (
          <BusForm />
        )}

        <button
          onClick={activeHandler}
          className="text-cyan-500 absolute top-0 left-20 bg-white rounded-3xl hover:bg-slate-300 px-2 py-1"
          type="button"
        >
          x بستن
        </button>
      </div>
    </div>
  );
};

export default QuickSearch;
