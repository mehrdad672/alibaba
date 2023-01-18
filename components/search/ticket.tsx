import Image from "next/image";
import React from "react";
import { SmalAirplane_Icon } from "../../public/svgs";
import zagros from "../../public/ZV.png";
type Props = {};

const Ticket = (props: Props) => {
  return (
    <div className="w-full bg-white rounded-xl flex border border-gray-300 font-iran ">
      <div className="flex flex-col items-center space-y-3 py-10 px-4 border-r-gray-300 border-r justify-center">
        <div className="flex font-iran space-x-1 justify-center text-[#0077db]">
          <p className="text-gray-500">ریال</p>
          <p className="font-bold text-xl tracking-widest">10934205</p>
        </div>
        <div>
          <button className="w-[180px] rounded-2xl font-iran text-xl font-semibold tracking-wide bg-[#0077db]  text-white px-10 py-2 hover:bg-[#084d85]">
            انتخاب بلیط
          </button>
        </div>
      </div>
      <div className="flex px-4 py-3 items-start justify-end w-full space-x-8 ">
        <div>
          <div className="flex space-y-3 flex-col items-center justify-end">
            <div className="flex font-iran flex-row-reverse justify-start text-gray-500 space-x-4 py-3">
              <h5 className="rounded-2xl bg-slate-50 px-2 ml-2 ">سیستمی</h5>
              <h5 className="rounded-2xl bg-slate-50 px-2 ">اکونومی</h5>
              <h5 className="rounded-2xl bg-slate-50 px-2 ">boeing MD</h5>
            </div>
            <div className="flex items-center space-x-7">
              <div className="flex space-x-3  items-center">
                <h5 className="text-black font-bold text-2xl">16:15</h5>
                <h5 className="text-black text-xl ">اهواز</h5>
              </div>
              <div className="flex items-center">
                <div className="w-[10px] h-[10px] rounded-full border border-gray-400"></div>
                <div className="w-[140px] h-0 border border-gray-400"></div>
                <SmalAirplane_Icon />
              </div>
              <div className="flex space-x-3 items-center">
                <h5 className="text-black font-bold text-2xl">15:00</h5>
                <h5 className="text-black text-xl ">تهران</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 items-center justify-center">
          <div className="p-2 rounded-full border border-gray-300">
            <Image width={30} height={25} src={zagros} alt="airline" />
          </div>
          <h6>زاگرس</h6>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
