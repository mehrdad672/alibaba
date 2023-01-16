import React, { useEffect, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { Location_Icon } from "../../public/svgs";

type Props = {
  options: Array<string>;
  width:string
  label:string
};

const AutoCompleteInput = ({ options, width,label }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>();
  const [optionsList, setOptionsList] = useState<string[]>(options);
  const clickHandler = (e: any) => {
    setIsActive(true);
  };
  const clickOutsideHandler = () => {
    setIsActive(false);
  };
  const submitHandler = (value: string) => {
    setInputValue(value);
    setIsActive(false);
  };
  const inputChangeHandler = (e: any) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    const oldOptions = optionsList
    if(inputValue){
        setOptionsList (oldOptions.filter(item=>item.includes(inputValue)))
    }else{
        setOptionsList(options)
    }
    

  }, [options, inputValue]);
  const optionss = ["1", "2", "3"];
  const sRef = useDetectClickOutside({ onTriggered: clickOutsideHandler });
  const optList = optionsList.map((opt) => (
    <span
      onClick={() => {
        submitHandler(opt);
      }}
      className="cursor-pointer flex justify-end items-center space-x-2 text-gray-500 px-4 py-3 w-full  hover:bg-slate-100"
      key={opt}
    >
      <p>{opt}</p>
      <Location_Icon />
    </span>
  ));
  return (
    <div ref={sRef} className={`relative h-6 w-[${width}px]`}>
      <input
      dir="rtl"
      autoComplete="off"
        onClick={clickHandler}
        className="relative w-full text-right rounded-xl  border border-gray-300 p-2 focus:outline-none"
        type="text"
        id="id"
        value={inputValue}
        onChange={inputChangeHandler}
      />
      <label
        className={`transition-all  duration-200 ease-in-out text-gray-400 text-lg absolute bg-white rounded-full z-10 top-[40%] px-1 right-2 ${
          isActive && "!-top-[50%] !scale-75"
        }   ${inputValue && "!-top-[50%] !scale-75"} `}
        htmlFor="id"
      >
       {label}
      </label>
      <div
        className={`transition-all duration-100 ease-in absolute top-6 invisible !w-full opacity-100 overflow-y-auto border-gray-300 border rounded-xl shadow-md bg-white z-30 ${
          isActive && "!top-12 !visible"
        }`}
      >
        <p className="text-right pr-5 border border-b-gray-200 bg-slate-100 rounded-xl text-gray-500 w-full">
          پرتردد
        </p>
        <div className="w-full flex flex-col space-y-3 items-end">
          {optList}
        </div>
      </div>
    </div>
  );
};

export default AutoCompleteInput;
