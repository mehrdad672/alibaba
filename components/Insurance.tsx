import React from "react";
import { ArrowLeftIcon } from "../public/svgs";

type Props = {};

const Insurance = (props: Props) => {
  return (
    <div className="w-[1200px] mx-auto mb-5 justify-around bg-white rounded-xl border border-gray-200 shadow-md h-36 flex ">
      <div className="flex flex-col space-y-3 items-center justify-center">
        <img
          src="https://cdn.alibaba.ir/h2/desktop/assets/images/insurance-icon-61c8b022.svg"
          alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/insurance-icon-61c8b022.svg"
          width="64"
          height="64"
        />
        <button className="flex items-center space-x-1 hover:bg-cyan-50 rounded-xl transition-all duration-150 ease-in-out p-2">
          <ArrowLeftIcon />
          <p className="text-gray-700 font-semibold font-iran ">
            بیمه مسافرتی خارجی
          </p>
        </button>
      </div>
      <div className="flex flex-col space-y-3 items-center justify-center">
        <img
          src="https://cdn.alibaba.ir/h2/desktop/assets/images/visa-icon-272a487a.svg"
          alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/visa-icon-272a487a.svg"
          width="64"
          height="64"
        />
        <button className="flex items-center space-x-1 hover:bg-cyan-50 rounded-xl transition-all duration-150 ease-in-out p-2">
          <ArrowLeftIcon />
          <p className="text-gray-700 font-semibold font-iran ">ویزای دبی</p>
        </button>
      </div>
    </div>
  );
};

export default Insurance;
