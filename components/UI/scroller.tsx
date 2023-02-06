import { ArrowLeftIcon } from "../../public/svgs";
import React, { useEffect, useState } from "react";

type Props = {};
const options = [
  "translate-y-0",
  "translate-y-[-50px]",
  "translate-y-[-100px]",
  "translate-y-[-150px]",
];
const Scroller = (props: Props) => {
  const [slider, setSlider] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      slider < 3 ? setSlider(slider + 1) : setSlider(0);
      //   setSlider((prev)=>prev===3 ? 0 :(prev + 1))
    }, 2000);
    return () => clearInterval(interval);
  }, [slider]);
  return (
    <div className="w-[1200px] mt-10 h-[200px] bg-[#fdb713] flex justify-between items-center mx-auto rounded-xl">
      <div className="bg-white w-[250px] h-[130px]  rounded-r-xl flex items-center justify-center">
        <span className="flex bg-black text-white items-center justify-center p-1 rouunded-2xl ">
          <ArrowLeftIcon />
          <p className=" font-semibold font-iran ">نشانه ها را دنبال کن</p>
        </span>
      </div>
      <div
        role="container"
        className="flex flex-col justify-center  mr-32 space-y-3 max-w-full"
      >
        <div className="relative max-h-[50px] h-[50px] overflow-hidden w-[500px] ">
          <span
            className={`absolute top-0 ${options[slider]} w-[500px] transition-all duration-200 ease-scroll mx-auto  hover:text-red-500 group group-hover:border border-black`}
          >
            <span className="flex items-center justify-between w-[500px] ">
              <span className="text-5xl w-[100px] font-bold text-black ">
                شومینه
              </span>
              <span className="text-white text-4xl">|</span>
              <span className="text-5xl w-[100px] font-bold text-black ">
                جنگل
              </span>
              <span className="text-white text-4xl">|</span>
              <span className="text-5xl w-[100px] font-bold text-black ">
                کلبه
              </span>
            </span>
            <span className="flex items-center justify-between w-[500px] ">
              <span className="text-5xl w-[100px] font-bold text-black ">
                چادر
              </span>
              <span className="text-white text-4xl">|</span>
              <span className="text-5xl w-[100px] font-bold text-black ">
                ستاره
              </span>
              <span className="text-white text-4xl">|</span>
              <span className="text-5xl w-[100px] font-bold text-black ">
                کویر
              </span>
            </span>
            <span className="flex items-center justify-between w-[500px]">
              <span className="text-5xl w-[100px] font-bold text-black ">
                سوغاتی
              </span>
              <span className="text-white text-4xl">|</span>
              <span className="text-5xl w-[100px] font-bold text-black ">
                گردش
              </span>
              <span className="text-white text-4xl">|</span>
              <span className="text-5xl w-[100px] font-bold text-black ">
                بازار
              </span>
            </span>
            <span className="flex items-center justify-between w-[500px] ">
              <span className="text-5xl w-[100px] font-bold text-black ">
                ردپا
              </span>
              <span className="text-white text-4xl">|</span>
              <span className="text-5xl w-[100px] font-bold text-black ">
                موج
              </span>
              <span className="text-white text-4xl">|</span>
              <span className="text-5xl w-[100px] font-bold text-black ">
                ساحل
              </span>
            </span>
          </span>
        </div>
        <hr className="border border-black w-full" />
        <span className="mx-auto">
          <p className="text-4xl font-bold tracking-[3px]  text-black">
            علی بابا،همسفر هر سفر{" "}
          </p>
        </span>
      </div>
    </div>
  );
};

export default Scroller;
