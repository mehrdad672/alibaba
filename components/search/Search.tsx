import React, { useEffect, useLayoutEffect, useState } from "react";
import SearchTab from "./SearchTab";
import { useRouter } from "next/router";
import {
  Airplane_Icon,
  Airplanef_Icon,
  Bus_Icon,
  Train_Icon,
} from "../../public/svgs";
import Link from "next/link";
import Inputd from "./inputs/inputItem";
import AirplaneForm from "./forms/airplaneForm";
import ForeignAirplaneForm from "./forms/foreignAirplaneForm";
import TrainForm from "./forms/trainForm";
import BusForm from "./forms/busForm";

type Props = {};

const Search = (props: Props) => {
  const [activeTab, setActiveTab] = useState<string>("airplane");
  const [indicatiorPos, setIndicatorPos] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>();
  const router = useRouter();
  useLayoutEffect(() => {
    var elem = document.getElementById("airplane_tab");
    if (router.asPath === "/") {
      setActiveTab("airplane");
      window.document.title = "خرید بلیط هواپیما";
    }
    if (router.asPath === "/foreign") {
      setActiveTab("foreign");
      window.document.title = "خرید بلیط هواپیمای خارجی";
      var elem = document.getElementById("fairplane_tab");
    }
    if (router.asPath === "/train") {
      setActiveTab("train");
      window.document.title = "خرید بلیط قطار";
      var elem = document.getElementById("train_tab");
    }
    if (router.asPath === "/bus") {  
      setActiveTab("bus");
      window.document.title = "خرید بلیط اتوبوس";
      var elem = document.getElementById("bus_tab");
    }
    if (elem) {
      setIndicatorPos(elem.offsetLeft);
    }
  }, [router.asPath, screenWidth]);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const tab = document.getElementById("tab-indicator");
    if (tab) {
      tab.style.left = indicatiorPos.toString() + "px";
    }
  }, [indicatiorPos]);

  return (
    <div
      id="search_container"
      className="w-[1200px] flex flex-col max-w-full h-[256px] rounded-2xl mx-auto bg-white"
    >
      <div
        id="search_tabs_container"
        className=" relative w-full max-w-full flex justify-center items-center space-x-8 border-b border-gray-300 "
      >
        <div
          id="tab-indicator"
          className={`w-[100px]  max-w-full h-[5px] absolute bottom-0 tranirion-all duration-150 ease-in-out bg-blue-600 rounded-t-2xl  `}
        ></div>
        <button
          id="bus_tab"
          onClick={() => {
            setActiveTab("bus");
            router.push("/?page=3", "/bus", { shallow: true });
          }}
          className={`flex flex-col py-2 w-[100px] items-center justify-center ${
            activeTab === "bus" && "text-blue-600"
          }`}
        >
          <Bus_Icon />
          <span>اتوبوس</span>
        </button>
        <button
          id="train_tab"
          onClick={() => {
            setActiveTab("train");
            router.push("/?page=2", "/train", { shallow: true });
          }}
          className={`flex flex-col py-2 w-[100px] items-center justify-center ${
            activeTab === "train" && "text-blue-600"
          }`}
        >
          <Train_Icon />
          <span>قطار</span>
        </button>
        <button
          id="fairplane_tab"
          onClick={() => {
            setActiveTab("foreign");
            router.push("/?page=2", "/foreign", { shallow: true });
          }}
          className={`flex flex-col py-2 w-[100px] items-center justify-center ${
            activeTab === "foreign" && "text-blue-600"
          }`}
        >
          <Airplanef_Icon />
          <span>پرواز خارجی</span>
        </button>
        <button
          id="airplane_tab"
          onClick={() => {
            setActiveTab("airplane");
            router.push("/", undefined, { shallow: true });
          }}
          className={`flex flex-col py-2 w-[100px] items-center justify-center ${
            activeTab === "airplane" && "text-blue-600"
          }`}
        >
          <Airplane_Icon />
          <span>پرواز داخلی</span>
        </button>
      </div>
      {activeTab === "airplane" ? (
        <AirplaneForm />
      ) : activeTab === "foreign" ? (
        <ForeignAirplaneForm />
      ) : activeTab === "train" ? (
        <TrainForm />
      ) : (
        <BusForm />
      )}
    </div>
  );
};

export default Search;
