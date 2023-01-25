import React from "react";
import { UserCircleIcon,PrinterIcon,QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

import Headeritem from "./Headeritem";

import Dropdownc from "./Dropdownc";
import Image from "next/image";
type Props = {};

const Header = (props: Props) => {
    const moreOptions = [{title:'علی بابا پلاس',href:'/'},{title:'مجله علی بابا',href:'/'},{title:'بیمه مسافرتی',href:'/'}]
    const hotelOptions = [{title:'هتل',href:'/'},{title:'ویلا و اقامتگاه',href:'/'}]
    const ticketOptions = [{title:'پرواز داخلی',href:'/'},{title:'پرواز خارجی',href:'/'},{title:'قطار',href:'/'}]
  return (
    <header className="flex max-w-full justify-between items-center">
      <div className="flex space-x-2">
        <Headeritem Icon={UserCircleIcon} Title=' ورود یا ثبت نام' />
        <Headeritem Icon={PrinterIcon} Title='پیگیری خرید' />
        <Headeritem Icon={QuestionMarkCircleIcon} Title='مرکز پشتیبانی آنلاین' />
      </div>
      <div>

      </div>
      <div className="flex justify-evenly items-center space-x-10">
    <div className="flex space-x-4">
      <Dropdownc options={moreOptions} label='بیشتر'/>
      <Dropdownc options={hotelOptions} label='اقامت'/>
      <Dropdownc options={ticketOptions} label='بلیط'/>
      </div>
      <Image src='/Alibaba-Logo-02.jpg' alt="logo" width={150} height={15} />
      </div>
     
    </header>
  );
};

export default Header;
