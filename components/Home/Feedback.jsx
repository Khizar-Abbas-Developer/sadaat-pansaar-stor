"use client";

import React, { useRef, useState, useEffect } from "react";
import userIcon from "@/public/assets/user-2.webp";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { feedback } from "@/public/assets/assets";

const Feedback = () => {
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const width = container.offsetWidth;

    const newIndex = Math.round(scrollLeft / width);
    setCurrentSlide(newIndex);
  };

  // Attach scroll listener
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-8 bg-[#f0f0f7] pb-[60px] px-[10px] sm:px-[20px] md:px-[170px] lg:px-[80px] xl:px-[130px] 2xl:px-[130px]">
      <div className="flex justify-between items-center text-black h-auto w-full my-6 px-[10px]">
        <div className="border-b-[0.5px] border-gray-300 w-full flex justify-between items-center">
          <div className="border-b-4 border-[#5FA800]">
            <p className="text-sm md:text-xl lg:text-lg uppercase">
              See What Our Customers Say
            </p>
          </div>
        </div>
      </div>

      {/* Carousel on small screens, grid on md+ */}
      <div
        ref={scrollRef}
        className="flex md:flex-wrap md:justify-center gap-4 overflow-x-auto md:overflow-x-hidden scroll-smooth snap-x snap-mandatory md:snap-none scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {feedback.map((item) => (
          <div
            key={item.id}
            className="min-w-full sm:min-w-full md:min-w-[295px] max-w-[295px] flex-shrink-0 md:flex-shrink md:flex-grow-0 flex flex-col gap-4 bg-white px-4 py-5 rounded-lg snap-start"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <IoIosStar key={index} className="text-[#66ac04] text-xl" />
                ))}
              </div>
              <div className="text-sm text-black">{item.message}</div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={userIcon}
                alt="userIcon"
                width={30}
                height={30}
                quality={100}
                className="object-cover"
              />
              <div className="text-sm font-medium text-black">{item.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots - only on small screens */}
      <div className="flex justify-center mt-4 md:hidden">
        {feedback.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === currentSlide ? "bg-[#5FA800]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
