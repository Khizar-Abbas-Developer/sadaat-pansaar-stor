import React from "react";
import Image from "next/image";
import layoutOne from "@/public/assets/home-posters/3-min.png";
import layoutTwo from "@/public/assets/home-posters/2-min.png";

const SecondLayout = () => {
  return (
    <div className="flex lg:flex-row pb-8 px-[2.5px] items-center flex-col justify-center gap-8 overflow-hidden rounded-lg transition-all duration-300 ease-in-out">
      <div className="text-black group overflow-hidden rounded-lg transition-all duration-700 ease-in-out cursor-pointer">
        <Image
          src={layoutOne}
          alt="layout one"
          width={525}
          height={500}
          className="object-cover transition-transform duration-1000 transform group-hover:scale-110"
          quality={100}
          priority={true}
        />
      </div>
      <div className="text-black group overflow-hidden rounded-lg transition-all duration-700 ease-in-out cursor-pointer">
        <Image
          src={layoutTwo}
          alt="layout two"
          width={525}
          height={500}
          className="object-cover transition-transform duration-1000 transform group-hover:scale-110"
          quality={100}
          priority={true}
        />
      </div>
    </div>
  );
};

export default SecondLayout;
