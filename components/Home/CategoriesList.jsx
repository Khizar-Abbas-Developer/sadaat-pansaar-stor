"use client";

import Image from "next/image";
import React, { useRef } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import Link from "next/link";
import { categoryCirclesList } from "@/public/assets/rounded-categories/roundedCategories";

const CategoriesList = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#EFF5E9] py-10 px-4 md:px-10 lg:px-32 xl:px-36">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-300 pb-4">
        <div className="border-b-2 border-[#5FA800]">
          <p className="text-base md:text-lg lg:text-xl font-semibold text-black uppercase">
            Shop by feature categories
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center cursor-pointer text-sm md:text-md lg:text-md text-[#5FA800]">
          <p className="mr-1">View More</p>
          <MdOutlineKeyboardArrowRight className="text-gray-400 text-xl" />
        </div>
      </div>

      {/* Scrollable Categories List with Arrows */}
      <div className="relative mt-6">
        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {categoryCirclesList.map((item) => (
            <Link
              href={`product-category/${item.category}`}
              key={item.id}
              className="snap-start flex-shrink-0 md:flex-shrink-0 flex flex-col items-center gap-2 transition-transform duration-300 transform hover:scale-110 cursor-pointer w-[140px] md:w-[180px]"
            >
              <div className="w-[120px] h-[120px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={`category${item.id}`}
                  width={160}
                  height={160}
                  quality={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-sm md:text-base text-black">
                {item.title}
              </p>
            </Link>
          ))}
        </div>

        {/* Left Arrow - Only on md+ */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black rounded-full shadow-md w-10 h-10 z-10"
        >
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>

        {/* Right Arrow - Only on md+ */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black rounded-full shadow-md w-10 h-10 z-10"
        >
          <MdOutlineKeyboardArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default CategoriesList;
