import React from "react";
import Accordion from "./Accordion";

type Props = {};

const Accordions = (props: Props) => {
  const qanda = [
    {
      question: "چند روز قبل از پرواز، بلیط هواپیما را بخریم؟",
      answer:
        "امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید.",
    },
    {
      question: "در هر پرواز، میزان بار مجاز چقدر است؟",
      answer:
        "میزان مجاز بار به کلاس پرواز و کلاس نرخی بلیط بستگی دارد. هنگام خرید آنلاین بلیط هواپیما می‌توانید میزان بار مجاز را در اطلاعات بلیط ببینید. طبیعی است که اگر میزان بارتان بیش از حد مجاز باشد، باید جریمه پرداخت کنید.",
    },
    {
      question: "نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟",
      answer:
        "نرخ بلیط کودکان و نوزادان به کلاس پرواز و کلاس نرخی بستگی دارد. به صورت کلی، قیمت بلیط مسافر کودک (2 الی 12 سال) معادل 50 الی 100 درصد بلیط بزرگسال، و قیمت بلیط مسافر نوزاد (تا دو سال) 10 درصد بلیط بزرگسال است. هنگام تهیه بلیط هواپیما به این نکته توجه داشته باشید.",
    },
    {
      question: "رزرو آنلاین بلیط هواپیما هزینه بیشتری از خرید حضوری دارد؟",
      answer:
        "خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید.",
    },
    {
      question:
        "آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟",
      answer:
        "وقتی از علی‌بابا یعنی بهترین سایت خرید بلیط هواپیما ، بلیطتان را رزرو می‌کنید، خیالتان آسوده است که امکان استرداد وجه در صورت کنسل کردن بلیط وجود دارد. میزان جریمه را هم هنگام رزرو آنلاین بلیط هواپیما در قسمت قوانین استرداد بخوانید. میزان جریمه به نوع بلیط، کلاس پروازی، کلاس نرخی و... بستگی دارد.",
    },
  ];
  return (
    <div className=" bg-white max-w-full">
      {qanda.map((qa) => (
        <Accordion
          question={qa.question}
          answer={qa.answer}
          key={qa.question}
        />
      ))}
    </div>
  );
};

export default Accordions;
