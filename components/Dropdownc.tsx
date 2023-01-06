import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useDetectClickOutside } from 'react-detect-click-outside';
import { Transition } from '@headlessui/react'
type Props = {
    label:string
    options:Array<{
        title:string
        href:string
    }>
};

const Dropdownc = ({options,label}: Props) => {
    const [dropActive , setDropActive]=useState<boolean>(false)
    const [drop, setDrop] = useState<boolean>(false)
    const dropHandler = ()=>{
        
        if (drop) {setDrop(false)
            console.log('drop')}
        
    }
    const divRef = useRef<HTMLDivElement>(null);
    // useEffect(() => {
    //     window.onclick = (event: MouseEvent) => {
       
    //       const target = event.target as HTMLDivElement
    //         | HTMLInputElement
    //         | HTMLParagraphElement
    //         | HTMLButtonElement
    //         | HTMLHeadingElement;
    
    //       if (target?.contains(divRef.current) && target !== divRef.current) {
    //          setDrop(false);
    //          console.log('test')
    //       } 
    //     }
    //   }, []);
      const optionsList = options.map(option => (
        <li className="border-gray-100 border-b" key={option.title}>
            <Link
              href={option.href}
              className="block text-right text-gray-500 text-lg  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
             {option.title}
            </Link>
          </li>
      ) )
      const ref = useDetectClickOutside({onTriggered: dropHandler});
  return (
    <div className="relative " ref={ref} >
      <button onClick={()=>(setDrop(!drop))}
        className="  bg-white  hover:bg-gray-100  text-gray-500 text-lg rounded-lg  px-2 py-2.5 text-center space-x-2 justify-center flex items-center "
        type="button"
      >
        <svg
          className="w-4 h-4 ml-2"
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
     { 
      <Transition
      show={drop}
      enter="transition-all duration-200 "
      enterFrom="opacity-0 "
      enterTo="opacity-100"
      leave="transition-all duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
     <div
      
        id="dropdown"
        className="z-10 w-36 shadow-lg top-[100%] transition-all duration-200 ease-in-out right-0 absolute  bg-white divide-y divide-gray-100 rounded-lg border border-gray-100  dark:bg-gray-700"
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
         
        >
         {optionsList}
            </ul>
      </div>
      </Transition>} 
    </div>
  );
};

export default Dropdownc;
