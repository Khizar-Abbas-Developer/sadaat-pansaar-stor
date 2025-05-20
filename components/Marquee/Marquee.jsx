import React from "react";
import almondImage from "@/public/assets/Almonds.webp";
import Image from "next/image";
import "./Marquee.css";
import { categoryCirclesList } from "@/public/assets/rounded-categories/roundedCategories";

const Marquee = () => {
  const content = categoryCirclesList.map((item, index) => (
    <div className="flex items-center gap-1 px-4" key={index}>
      <div className="w-[27px] h-[27px] md:w-[27px] md:h-[27px] rounded-full overflow-hidden">
        <Image
          src={item.image}
          alt={`category${item.id}`}
          width={160}
          height={160}
          quality={100}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-sm underline text-white">{item.title}</p>
      <span className="text-red-500 text-sm ml-2"> {`||`} </span>
    </div>
  ));

  return (
    <div className="h-[29.5px] bg-[#2c2c2c] lg:bg-[rgb(44,44,44)] text-white">
      <div className="marquee-container">
        <div className="marquee-content">
          <div className="marquee-group">{content}</div>
          <div className="marquee-group">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
