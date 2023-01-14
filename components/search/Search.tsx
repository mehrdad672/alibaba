import React, { useEffect, useState } from "react";
import SearchTab from "./SearchTab";
import { useRouter } from "next/router";
import {
  Airplane_Icon,
  Airplanef_Icon,
  Bus_Icon,
  Train_Icon,
} from "../../public/svgs";
import Link from "next/link";
import Inputd from "./inputItem";
import AirplaneForm from "./airplaneForm";
import ForeignAirplaneForm from "./foreignAirplaneForm";
import TrainForm from "./trainForm";
import BusForm from "./busForm";

type Props = {};

const Search = (props: Props) => {
  // useEffect(()=> {
  //  async function fetchData () {
  //   const request= await api.get('train.json')
  //   console.log(request)
  //   return request
  //  }
  //  fetchData()
  // },[])
  const [activeTab, setActiveTab] = useState<string>("airplane");

const router = useRouter()
useEffect(()=>{
  if (router.asPath==='/'){setActiveTab('airplane')
  document.title = 'خرید بلیط هواپیما'}
  if (router.asPath==='/foreign'){setActiveTab('foreign')
  document.title = 'خرید بلیط هواپیمای خارجی'}
  if (router.asPath==='/train'){setActiveTab('train')
  document.title = 'خرید بلیط قطار'}
  if (router.asPath==='/bus'){setActiveTab('bus')
  document.title = 'خرید بلیط اتوبوس'}
},[router.asPath])

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
          className={`w-[100px]  max-w-full h-[5px] absolute bottom-0 tranirion-all duration-150 ease-in-out bg-blue-600 rounded-t-2xl ${
            activeTab === "airplane" && "right-[335px]"
          } ${activeTab === "foreign" && "right-[467px]"} ${
            activeTab === "train" && "right-[599px]"
          } ${activeTab === "bus" && "right-[731px]"} `}
        ></div>
        <button
          onClick={() => {setActiveTab("bus")
          router.push('/?page=3', '/bus', { shallow: true })}}
          className={`flex flex-col py-2 w-[100px] items-center justify-center ${
            activeTab === "bus" && "text-blue-600"
          }`}
        >
          <Bus_Icon />
          <span>اتوبوس</span>
        </button>
        <button
          onClick={() => {setActiveTab("train")
          router.push('/?page=2', '/train', { shallow: true })}}
          className={`flex flex-col py-2 w-[100px] items-center justify-center ${
            activeTab === "train" && "text-blue-600"
          }`}
        >
          <Train_Icon />
          <span>قطار</span>
        </button>
        <button
          onClick={() => {setActiveTab("foreign")
          router.push('/?page=2', '/foreign', { shallow: true })}}
          className={`flex flex-col py-2 w-[100px] items-center justify-center ${
            activeTab === "foreign" && "text-blue-600"
          }`}
        >
          <Airplanef_Icon />
          <span>پرواز خارجی</span>
        </button>
        <button
          onClick={() => {setActiveTab("airplane")
          router.push('/', undefined, { shallow: true })}}
          className={`flex flex-col py-2 w-[100px] items-center justify-center ${
            activeTab === "airplane" && "text-blue-600"
          }`}
        >
          <Airplane_Icon />
          <span>پرواز داخلی</span>
        </button>
      </div>
      {activeTab === 'airplane' && <AirplaneForm />}
      {activeTab === 'foreign' && <ForeignAirplaneForm />}
      {activeTab === 'train' && <TrainForm />}
      {activeTab === 'bus' && <BusForm />}
    </div>
  );
};

export default Search;
