"use client";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "@/components/Card/Card";
import Image from "next/image";

const CategoryFirst = ({
  positionBeginning,
  heading,
  categorySectionImage,
}) => {
  return (
    <div className="w-full px-[8px] py-[16px] text-black">
      {/* Header */}
      <div className="flex justify-between items-center text-black h-auto w-full mx-[10px] my-[25px]">
        <div className="border-b-[0.5px] border-gray-300 w-full flex justify-between items-center">
          <div className="border-b-3 border-[#5FA800]">
            <p className="text-sm md:text-xl lg:text-lg uppercase">{heading}</p>
          </div>
          <div className="border-b-3 flex justify-center items-center border-[#5FA800] cursor-pointer mr-[10px]">
            <p className="text-sm md:text-xl lg:text-lg">View More</p>
            <span>
              <MdOutlineKeyboardArrowRight className="text-gray-400 text-xl" />
            </span>
          </div>
        </div>
      </div>

      {/* Main content with image and cards */}
      <div data-flex-layout className="category-flex-layout">
        {/* Conditional rendering of image and cards */}
        {positionBeginning ? (
          // If positionBeginning is true, image comes first
          <>
            {/* Image container */}
            <div className="self-center flex-shrink-0 lg:mt-12">
              <Image
                src={categorySectionImage}
                alt="category"
                width={300}
                height={300}
                quality={100}
                className="object-cover rounded-lg max-w-full h-auto"
              />
            </div>

            {/* Cards container */}
            <div className="justify-center flex-1 flex-wrap flex gap-[12px]">
              <Card array={[1, 2, 3, 4]} />
            </div>
          </>
        ) : (
          // If positionBeginning is false, image comes after cards
          <>
            {/* Cards container */}
            <div className="justify-center flex-1 flex-wrap flex gap-[12px]">
              <Card array={[1, 2, 3, 4]} />
            </div>

            {/* Image container */}
            <div className="self-center flex-shrink-0 lg:mt-16">
              <Image
                src={categorySectionImage}
                alt="category"
                width={300}
                height={300}
                quality={100}
                className="object-cover rounded-[8px] max-w-full h-auto"
              />
            </div>
          </>
        )}
      </div>

      {/* Media queries and default styles */}
      <style jsx>{`
        .category-flex-layout {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 16px;
        }

        @media (min-width: 1024px) {
          .category-flex-layout {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
};

export default CategoryFirst;
