import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { Transition } from "@headlessui/react";
type Props = {
  label: string;
  options: Array<{
    title: string;
    href: string;
  }>;
};

const Dropdownc = ({ options, label }: Props) => {
  const [drop, setDrop] = useState<boolean>(false);
  const dropHandler = () => {
    if (drop) {
      setDrop(false);
    }
  };
  const optionsList = options.map((option) => (
    <li className="border-gray-100 border-b" key={option.title}>
      <Link
        href={option.href}
        className="block text-right w-[120px] text-gray-500 text-lg  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {option.title}
      </Link>
    </li>
  ));
  const ref = useDetectClickOutside({ onTriggered: dropHandler });
  return (
    <div className="relative font-semibold " ref={ref}>
      <button
        onClick={() => setDrop(!drop)}
        className="  bg-white  hover:bg-gray-100  text-gray-500 text-lg rounded-lg  px-2 py-2.5 text-center space-x-2 justify-center flex items-center "
        type="button"
      >
        <svg
          className={`w-4 h-4 ml-2 ${drop && "rotate-180"}`}
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
        {label}
      </button>

      <div
        id="dropdown"
        className={` ${
          drop
            ? "translate-y-0 opacity-100 h-auto w-auto z-50"
            : "translate-y-[-20px] opacity-0 -z-50"
        }  w-36  shadow-lg top-[100%] transition-transform duration-200 ease-in-out right-0 absolute  bg-white  rounded-lg border border-gray-100`}
      >
        <ul className="py-1 text-sm text-gray-700 ">{optionsList}</ul>
      </div>
    </div>
  );
};

export default Dropdownc;
