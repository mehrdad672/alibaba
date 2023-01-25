import Image from "next/image";
import React from "react";
import { SmalAirplane_Icon } from "../../public/svgs";
import zagros from "../../public/ZV.png";
import karon from "../../public/karon.png";
import aseman from "../../public/aseman.png";
import iranair from "../../public/iranair.png";
import mahan from "../../public/mahan.png";
type Props = {
  from: string;
  to: string;
  depTime: string;
  landTime: string;
  price: number;
  company: string;
  type: string;
  airplane: string;
};

const Ticket = ({
  from,
  to,
  depTime,
  landTime,
  price,
  company,
  type,
  airplane,
}: Props) => {
  
  return (
    <div className="w-full bg-white rounded-xl flex border border-gray-300 font-iran shadow-md mb-6 ">
      <div className="flex flex-col items-center space-y-3 py-10 px-4 border-r-gray-300 border-r justify-center">
        <div className="flex font-iran space-x-1 justify-center text-[#0077db]">
          <p className="text-gray-500">ریال</p>
          <p className="font-bold text-xl tracking-widest">{price.toLocaleString('fa-IR')}</p>
        </div>
        <div>
          <button className="w-[180px] rounded-2xl font-iran text-xl font-semibold tracking-wide bg-[#0077db]  text-white px-10 py-2 hover:bg-[#084d85]">
            انتخاب بلیط
          </button>
        </div>
      </div>
      <div className="flex px-4 py-3 items-center justify-end w-full space-x-8 ">
        <div>
          <div className="flex space-y-3 flex-col items-end justify-end">
            <div className="flex font-iran flex-row-reverse justify-start text-gray-500 space-x-4 py-3">
              <h5 className="rounded-2xl bg-slate-50 px-2 ml-2 ">{type}</h5>
              <h5 className="rounded-2xl bg-slate-50 px-2 ">اکونومی</h5>
              <h5 className="rounded-2xl bg-slate-50 px-2 font-sans capitalize ">{airplane}</h5>
            </div>
            <div className="flex items-center space-x-7">
              <div className="flex space-x-3  items-center">
                <h5 className="text-black font-bold text-2xl">
                  {landTime[0]} : {landTime[1]}
                </h5>
                <h5 className="text-black text-xl ">{to}</h5>
              </div>
              <div className="flex items-center">
                <div className="w-[10px] h-[10px] rounded-full border border-gray-400"></div>
                <div className="w-[140px] h-0 border border-gray-400"></div>
                <SmalAirplane_Icon />
              </div>
              <div className="flex space-x-3 items-center">
                <h5 className="text-black font-bold text-2xl">
                  {depTime[0]} : {depTime[1]}
                </h5>
                <h5 className="text-black text-xl ">{from}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 items-center justify-center">
          <div className="p-2 rounded-full border border-gray-300">
            <Image width={30} height={25} src={company==='کارون'?karon :company==='آسمان'?aseman:company==='ایران ایر'?iranair:company==='ماهان'?mahan:zagros} alt="airline" />
          </div>
          <h6>{company}</h6>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
