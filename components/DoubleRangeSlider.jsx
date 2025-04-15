"use client";
import React, { useEffect, useState } from "react";
import product1 from "@/public/assets/products/product-001.webp";
import Image from "next/image";

export default function PriceRangeSlider({ getPriceFilter, heading }) {
  const MIN = 700;
  const MAX = 3000;

  const [priceRange, setPriceRange] = useState([800, 1400]);

  const handleMinChange = (e) => {
    const newMin = Number(e.target.value);
    if (newMin <= priceRange[1]) {
      setPriceRange([newMin, priceRange[1]]);
    }
  };

  const handleMaxChange = (e) => {
    const newMax = Number(e.target.value);
    if (newMax >= priceRange[0]) {
      setPriceRange([priceRange[0], newMax]);
    }
  };
  // 📤 Lift updated price to parent
  useEffect(() => {
    getPriceFilter(priceRange);
  }, [priceRange, getPriceFilter]);

  const trackLeft = ((priceRange[0] - MIN) / (MAX - MIN)) * 100;
  const trackWidth = ((priceRange[1] - priceRange[0]) / (MAX - MIN)) * 100;

  return (
    <div className="w-full max-w-md p-4 bg-white">
      <div className="flex justify-start items-center">
        <h3 className="text-lg font-semibold text-center">Select Price</h3>
      </div>
      <div className="relative h-28 flex items-center">
        {/* Track background */}
        <div className="absolute top-1/2 transform -translate-y-1/2 h-[6px] w-full bg-black rounded"></div>

        {/* Active track */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 h-[6px] bg-black rounded"
          style={{
            left: `${trackLeft}%`,
            width: `${trackWidth}%`,
          }}
        ></div>

        <input
          type="range"
          min={MIN}
          max={MAX}
          step="50"
          value={priceRange[0]}
          onChange={handleMinChange}
          className="absolute w-full z-20 pointer-events-auto appearance-none bg-transparent"
          style={{ top: "38%" }}
        />

        {/* Max slider */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          step="50"
          value={priceRange[1]}
          onChange={handleMaxChange}
          className="absolute w-full z-10 pointer-events-auto appearance-none bg-transparent"
          style={{ top: "60%" }}
        />
        <div className="mt-24 flex justify-between w-full items-center">
          <div className="flex">
            <button className="text-sm px-4 cursor-pointer py-1 text-white font-semibold rounded-full bg-[#5FA800]">
              FILTER
            </button>
          </div>
          <div className="flex gap-2">
            <p className="text-gray-500">Price:</p>
            <p className="text-sm font-bold mt-1">Rs {priceRange[0]}</p>
            <p className="mt-1">-</p>
            <p className="text-sm font-bold mt-1">Rs {priceRange[1]}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center my-10">
        <h3 className="text-lg font-semibold text-center">{heading}</h3>
      </div>
      {[1, 2, 3, 4, 5, 6].map((item, i) => {
        return (
          <React.Fragment key={i + 1}>
            <div className="flex justify-start items-center mt-10 mb-3">
              <div className="flex gap-4">
                <div className="">
                  <Image src={product1} alt="product" width={60} height={60} />
                </div>
                <div className="w-[60%]">
                  <p className="text-base text-gray-500">
                    Dry Fruit Gift Box 11 Portion
                  </p>
                  <p className="font-semibold">Rs 13,000</p>
                </div>
              </div>
            </div>
            <hr className="w-full bg-gray-200" />
          </React.Fragment>
        );
      })}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          background: #5fa800; /* <--- This is green */
          border-radius: 50%;
          cursor: pointer;
          margin-top: -7px;
        }
        input[type="range"]::-moz-range-thumb {
          height: 16px;
          width: 16px;
          background: #5fa800; /* <--- This is green */
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export const SidebarFilter = ({ getPriceFilter, heading }) => {
  return <PriceRangeSlider getPriceFilter={getPriceFilter} heading={heading} />;
};
