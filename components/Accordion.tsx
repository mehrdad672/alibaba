import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import {ArrowDownIcon,QuestionMarkCircleIcon} from '@heroicons/react/24/outline'
type Props = {
  question:string
  answer:string
};

const Accordion = ({question , answer}: Props) => {
  const [isActive , setIsActive] = useState(false)
  return (
    <div className="w-[70%] mx-auto rounded-xl px-8 py-4 border border-gray-300  max-w-full z-30">
      
        <button onClick={()=>setIsActive(!isActive)} className="py-2 w-full">
          <div className="flex justify-between items-center group">
            <div className="group-hover:bg-cyan-100 p-1 rounded-full ">
              {isActive ? <ArrowDownIcon className="w-4 h-4 text-gray-600 rotate-180 " /> :<ArrowDownIcon className="w-4 h-4 text-gray-600  " /> }
            </div>
            <div className="flex items-center space-x-3">
              <h3 className="text-gray-700 font-semibold text-lg">{question}</h3>
              <QuestionMarkCircleIcon className="w-8 h-8 text-cyan-600" />
            </div>
          </div>
        </button>
        <p className={`transition-all ease-in-out duration-200 text-gray-500 text-right ${isActive ? 'inline-flex h-auto':' hidden h-0 '}`} >
        {answer}
        </p>
      
    </div>
  );
};

export default Accordion;
