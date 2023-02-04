import React from "react";
import { Location_Icon } from "../../../public/svgs";

type Props = {
  options: Array<string>;
  handler: (newValue: string) => void;
};

const AutoComlete = (props: Props) => {
  const optList = props.options.map((opt) => (
    <span className="cursor-pointer flex justify-end items-center space-x-2 text-gray-500 px-4 py-3 w-full  hover:bg-slate-100" key={opt} onClick={() => props.handler(opt)}>
      <p>{opt}</p>
      <Location_Icon />
    </span>
  ));
  return (
    <div className="w-full flex flex-col space-y-3 items-end">{optList}</div>
  );
};

export default AutoComlete;
