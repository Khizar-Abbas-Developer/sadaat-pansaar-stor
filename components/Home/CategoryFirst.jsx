"use client";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "@/components/Card/Card";
import categorySection1 from "@/public/assets/categorySection1.webp";
import Image from "next/image";

const CategoryFirst = () => {
  return (
    <div style={{ width: "100%", padding: "16px 8px", color: "black" }}>
      {/* Header */}
      <div
        className="flex justify-between items-center text-black h-auto w-full"
        style={{ margin: "25px 10px" }}
      >
        <div className="border-b-[0.5px] border-gray-300 w-full flex justify-between items-center">
          <div className="border-b-3 border-[#5FA800]">
            <p className="text-sm md:text-xl lg:text-lg">New Arrivals</p>
          </div>
          <div
            className="border-b-3 flex justify-center items-center border-[#5FA800] cursor-pointer"
            style={{ marginRight: "10px" }}
          >
            <p className="text-sm md:text-xl lg:text-lg">View More</p>
            <span>
              <MdOutlineKeyboardArrowRight className="text-gray-400 text-xl" />
            </span>
          </div>
        </div>
      </div>

      {/* Main content with image and cards */}
      <div data-flex-layout className="category-flex-layout">
        {/* Cards container */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Card array={[1, 2, 3, 4]} />
        </div>

        {/* Image container */}
        <div
          style={{
            alignSelf: "center",
            flexShrink: 0,
          }}
        >
          <Image
            src={categorySection1}
            alt="category"
            width={300}
            height={300}
            quality={100}
            style={{
              objectFit: "cover",
              borderRadius: "8px",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
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
