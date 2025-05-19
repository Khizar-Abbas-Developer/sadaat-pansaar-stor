import React from "react";
import almondImage from "@/public/assets/Almonds.webp";
import Image from "next/image";
import "./Marquee.css";

const Marquee = () => {
  const content = [...Array(30)].map((_, index) => (
    <div key={index} className="flex items-center gap-1 px-4">
      <Image
        src={almondImage}
        alt="Almonds"
        width={20}
        height={20}
        className="rounded-full"
      />
      <p className="text-sm underline text-white">Almonds</p>
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
