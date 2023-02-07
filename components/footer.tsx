import React from "react";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="grid grid-cols-6 font-iran mx-auto px-24 py-10 w-full max-w-full rounded-lg mt-10 ">
      <div className="col-span-3 flex flex-col space-y-3 items-start">
        <img
          className="w-[189px] h-[30px]"
          src="https://cdn.alibaba.ir/h2/desktop/assets/images/shawl_logotype-d8721a14.svg"
          alt="alibaba"
        />
        <p className="text-gray-500">تلفن پشتیبانی: 4390000-021</p>
        <p className="text-gray-500">
          دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه چهارم،
          بن‌بست گل‌ها، پلاک 1
        </p>
        <div className="flex space-x-4">
            <img className="w-[80px] h-[80px] rounded-xl" src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/state-airline-f45c55b2.svg" alt="" />
            <img className="w-[80px] h-[80px] rounded-xl" src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/passenger-rights-48368f81.svg" alt="" />
            <img className="w-[80px] h-[80px] rounded-xl" src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/samandehi-6e2b448a.png" alt="" />
            <img className="w-[80px] h-[80px] rounded-xl" src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/aira-682b7c43.png" alt="" />
        </div>
      </div>
      <div className="col-span-1 text-right">
        <h5 className="text-gray-800 text-xl font-bold mb-3">اطلاعات تکمیلی</h5>
        <ul className="flex space-y-2  text-gray-500 font-semibold   flex-col text-right items-end justify-end">
          <li> باشگاه همسفران</li>
          <li>فروش سازمانی </li>
          <li>همکاری با آژانس ها</li>
          <li>فرصت های شغلی</li>
        </ul>
      </div>
      <div className="col-span-1 text-right">
        <h5 className="text-gray-800 text-xl font-bold mb-3">خدمات مشتریان</h5>
        <ul className="flex space-y-2  text-gray-500 font-semibold  flex-col text-right items-end justify-end">
          <li>مرکز پشتیبانی آنلاین</li>
          <li>راهنمای خرید</li>
          <li>راهمای استرداد</li>
          <li>قوانین و مقررات</li>
          <li>پرسش و پاسخ</li>
        </ul>
      </div>
      <div className="col-span-1 text-right">
        <h5 className="text-gray-800 text-xl font-bold mb-3">علی بابا</h5>
        <ul className="flex space-y-2 text-gray-500 font-semibold   flex-col text-right items-end justify-end">
          <li>درباره ما</li>
          <li>تماس با ما</li>
          <li>چرا علی بابا</li>
          <li>علی بابا پلاس</li>
          <li>بیمه مسافرتی</li>
          <li>مجله علی بابا</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
