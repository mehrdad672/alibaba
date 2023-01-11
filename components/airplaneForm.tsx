import React from "react";
import Inputd from "./inputItem";

type Props = {};

const AirplaneForm = (props: Props) => {
  return (
    <div className="w-full max-w-full flex items-end space-y-5 py-5 px-4 flex-col h-[140px]">
      <div className="flex justify-end">
        <select className="text-right rounded-3xl border border-gray-300 text-gray-400 focus:outline-none">
          <option value="رفت">رفت</option>
          <option value="رقت و برگشت">رفت و برگشت</option>
        </select>
      </div>
      <div className="max-w-full flex justify-center items-center flex-row-reverse">
        <div className="flex flex-row-reverse items-center justify-end">
          <div className={`relative h-6 w-[212px]`}>
            <input
              className="peer w-full focus:placeholder-transparent border border-gray-300 p-2 focus:outline-none"
              type="text"
              id="airplane_start"
            />
            <label
              className=" transition-all duration-200 ease-in-out text-gray-400 text-lg absolute bg-white rounded-full  z-10  top-[45%]  px-1 right-2  peer-focus:-top-[45%] peer-focus:scale-75   "
              htmlFor="airplane_start"
            >
              مبدا (شهر)
            </label>
          </div>
          <div className={`relative h-6 w-[212px]`}>
            <input
              className="peer w-full focus:placeholder-transparent border border-gray-300 p-2 focus:outline-none"
              type="text"
              id="airplane_end"
            />
            <label
              className=" transition-all duration-200 ease-in-out text-gray-400 text-lg absolute bg-white rounded-full  z-10  top-[45%]  px-1 right-2  peer-focus:-top-[45%] peer-focus:scale-75   "
              htmlFor="airplane_end"
            >
              مقصد (شهر)
            </label>
          </div>
        </div>
        <div className="flex mr-4 ">
          <div className={`relative h-6 w-[120px]`}>
            <input
              className="peer w-full focus:placeholder-transparent border border-gray-300 p-2 focus:outline-none"
              type="text"
              id="return-date"
            />
            <label
              className=" transition-all duration-200 ease-in-out text-gray-400 text-lg absolute bg-white rounded-full  z-10  top-[45%]  px-1 right-2  peer-focus:-top-[45%] peer-focus:scale-75   "
              htmlFor="return-date"
            >
              تاریخ برگشت
            </label>
          </div>
          <div className={`relative h-6 w-[120px]`}>
            <input
              className="peer w-full focus:placeholder-transparent border border-gray-300 p-2 focus:outline-none"
              type="text"
              id="leave-date"
            />
            <label
              className=" transition-all duration-200 ease-in-out text-gray-400 text-lg absolute bg-white rounded-full  z-10  top-[45%]  px-1 right-2  peer-focus:-top-[45%] peer-focus:scale-75   "
              htmlFor="leave-date"
            >
              تاریخ رفت
            </label>
          </div>
        </div>
        <div className="flex items-center">
          <div className={`relative h-6 w-[120px] mr-3`}>
            <input
              className="peer w-full focus:placeholder-transparent border border-gray-300 p-2 focus:outline-none"
              type="text"
              id="passengers"
            />
            <label
              className=" transition-all duration-200 ease-in-out text-gray-400 text-lg absolute bg-white rounded-full  z-10  top-[45%]  px-1 right-2  peer-focus:-top-[45%] peer-focus:scale-75   "
              htmlFor="passengers"
            >
              مسافران
            </label>
          </div>
          <button
            className="w-32 px-4 py-2 rounded-2xl bg-[#fdb713]"
            type="submit"
          >
            جستجو
          </button>
        </div>
      </div>
    </div>
  );
};

export default AirplaneForm;
