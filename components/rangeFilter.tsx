import React from "react";
import { useAuth } from "./AuthContext";
import {
  ChangeEvent,
  FC,
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";

const RangeSlider = () => {
  const {
    minVal,
    maxVal,
    maxTimeChange,
    minTimeChange,
    maxFilterChange,
    minFilterChange,
  } = useAuth();
  const mapTime = (digit: number) => {
    if (digit === 0) {
      return [5, 30];
    }
    if (digit % 2 === 0) {
      const time = [5 + digit / 2, "30"];
      return time;
    } else {
      const time = [5 + (digit / 2 + 0.5), "00"];
      return time;
    }
  };

  const [rangeWith, setRangeWidth] = useState<number>(100);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);
  const minDes = useRef<HTMLDivElement>(null);
  const maxDes = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRangeWidth(Math.round((maxVal - minVal) / 0.34));

    if (range.current) {
      range.current.style.left = `${minVal / 0.34}%`;
      range.current.style.width = `${rangeWith - 2}%`;
    }
    if (minDes.current) {
      minDes.current.style.left = `${(minVal - 1) / 0.34}%`;
    }
    if (maxDes.current) {
      maxDes.current.style.left = `${(maxVal - 2) / 0.34}%`;
    }
  }, [minVal, maxVal]);
  const outChangeHandler = () => {
    maxFilterChange(maxVal);
    minFilterChange(minVal);
  };
  return (
    <div className="mt-10">
      <input
        type="range"
        min="0"
        max="34"
        step={1}
        value={minVal}
        ref={minValRef}
        onMouseUp={outChangeHandler}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 2);
          minTimeChange(value);

          event.target.value = value.toString();
        }}
        className="thumb pointer-events-none absolute h-0 w-[200px] outline-none thumb--zindex-3 hover:accent-cyan-200 accent-white z-30"
      />
      <input
        type="range"
        min="0"
        max="34"
        step={1}
        value={maxVal}
        ref={maxValRef}
        onMouseUp={outChangeHandler}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 2);
          maxTimeChange(value);

          event.target.value = value.toString();
        }}
        className="thumb pointer-events-none absolute h-0 w-[200px] outline-none thumb--zindex-4 accent-white hover:accent-cyan-200 z-30"
      />
      <div className="relative tracking-[1px] font-iran w-[200px]">
        <div
          className={`slider__track border-4 border-gray-200 rounded-full  absolute bg-[#02172c] z-10 w-full`}
        />
        <div
          ref={range}
          className={`slider__range border-4 rounded-full border-blue-400  w-full absolute bg-[#ca2129] z-20 `}
        />
        <span className="absolute -top-8 " ref={minDes}>
          {mapTime(minVal)[0]}:{mapTime(minVal)[1]}
        </span>
        <span className="absolute -top-8 pr-2 " ref={maxDes}>
          {mapTime(maxVal)[0]}:{mapTime(maxVal)[1]}
        </span>
      </div>
    </div>
  );
};

export default RangeSlider;
