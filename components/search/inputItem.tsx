import React from "react";

type Props = {
  width: string;
  label: string;
  id: string;
};

const Inputd = ({ width, label, id }: Props) => {
  return (
    <div className={`relative h-6 ${width}`}>
      <input
        className="peer w-full focus:placeholder-transparent border border-gray-300 p-2 focus:outline-none"
        type="text"
        id={id}
      />
      <label
        className=" transition-all duration-200 ease-in-out text-gray-400 text-lg absolute bg-white rounded-full  z-10  top-[45%]  px-1 right-2  peer-focus:-top-[45%] peer-focus:scale-75   "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Inputd;
