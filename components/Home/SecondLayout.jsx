import React from "react";
import Image from "next/image";
import layoutOne from "@/public/assets/layout3.webp";
import layoutTwo from "@/public/assets/layout4.webp";

const SecondLayout = () => {
  return (
    <div className="flex lg:flex-row px-[2.5px] items-center flex-col justify-center gap-8 overflow-hidden rounded-lg transition-all duration-300 ease-in-out">
      <div className="text-black group overflow-hidden rounded-lg transition-all duration-700 ease-in-out cursor-pointer">
        <Image
          src={layoutOne}
          alt="layout one"
          width={605}
          height={605}
          className="object-cover transition-transform duration-1000 transform group-hover:scale-110"
          quality={100}
          priority={true}
        />
      </div>
      <div className="text-black group overflow-hidden rounded-lg transition-all duration-700 ease-in-out cursor-pointer">
        <Image
          src={layoutTwo}
          alt="layout two"
          width={605}
          height={605}
          className="object-cover transition-transform duration-1000 transform group-hover:scale-110"
          quality={100}
          priority={true}
        />
      </div>
    </div>
  );
};

export default SecondLayout;
