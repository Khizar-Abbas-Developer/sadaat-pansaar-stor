"use client";
import React, { useState } from "react";
import { Range } from "react-range";
import product1 from "@/public/assets/products/product-001.webp";
import Image from "next/image";

export default function PriceRangeSlider({
  getPriceFilter,
  heading,
  initialPriceRange,
}) {
  const MIN = 100;
  const MAX = 19000;

  const [priceRange, setPriceRange] = useState(
    () => initialPriceRange || [MIN, MAX]
  );

  const handleRangeChange = (values) => {
    setPriceRange(values);
  };

  const handleInputChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = Number(value);
    setPriceRange(newRange);
  };

  const handleInputBlur = () => {
    let [min, max] = priceRange;
    if (min < MIN) min = MIN;
    if (max > MAX) max = MAX;
    if (min > max) min = max;
    setPriceRange([min, max]);
  };

  return (
    <div className="w-full max-w-md p-4 bg-white custom-scroll">
      <div className="flex justify-start items-center">
        <h3 className="text-lg font-semibold text-center">Select Price</h3>
      </div>

      {/* Custom Range Slider */}
      <div className="my-6">
        <Range
          step={50}
          min={MIN}
          max={MAX}
          values={priceRange}
          onChange={handleRangeChange}
          renderTrack={({ props, children }) => {
            const { key, ...rest } = props;
            return (
              <div
                key={key}
                {...rest}
                className="w-full h-2 rounded-full my-4"
                style={{
                  background: `linear-gradient(to right, #f97316 ${
                    ((priceRange[0] - MIN) / (MAX - MIN)) * 100
                  }%, #5fa800 ${
                    ((priceRange[1] - MIN) / (MAX - MIN)) * 100
                  }%, #e5e7eb 100%)`,
                }}
              >
                {children}
              </div>
            );
          }}
          renderThumb={({ props }) => {
            const { key, ...rest } = props;
            return (
              <div
                key={key}
                {...rest}
                className="h-5 w-5 bg-[#5FA800] rounded-full shadow-md border-2 border-white"
              />
            );
          }}
        />
        <div className="flex justify-between gap-4">
          <div className="w-full">
            <label className="text-xs font-medium">
              From: Rs {priceRange[0]}
            </label>
            <input
              type="number"
              className="w-full border rounded px-2 py-1 mt-1"
              value={priceRange[0]}
              min={MIN}
              max={priceRange[1]}
              onChange={(e) => handleInputChange(0, e.target.value)}
              onBlur={handleInputBlur}
            />
          </div>
          <div className="w-full">
            <label className="text-xs font-medium">
              To: Rs {priceRange[1]}
            </label>
            <input
              type="number"
              className="w-full border rounded px-2 py-1 mt-1"
              value={priceRange[1]}
              min={priceRange[0]}
              max={MAX}
              onChange={(e) => handleInputChange(1, e.target.value)}
              onBlur={handleInputBlur}
            />
          </div>
        </div>
      </div>

      {/* Filter Button */}
      <div className="flex flex-col-reverse gap-4 justify-between items-center mt-6">
        <button
          className="text-sm px-4 py-1 text-white font-semibold rounded-full bg-[#5FA800]"
          onClick={() => getPriceFilter(priceRange)}
        >
          FILTER
        </button>
        <p className="text-gray-600 text-sm">
          Price: Rs {priceRange[0]} - Rs {priceRange[1]}
        </p>
      </div>

      {/* Product List Preview */}
      <div className="flex justify-start items-center my-10">
        <h3 className="text-lg font-semibold text-center">{heading}</h3>
      </div>

      {[1, 2, 3, 4, 5, 6].map((item, i) => (
        <React.Fragment key={i}>
          <div className="flex justify-start items-center mt-10 mb-3">
            <div className="flex gap-4">
              <div>
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
      ))}
    </div>
  );
}

export const SidebarFilter = ({
  getPriceFilter,
  heading,
  initialPriceRange,
}) => {
  return (
    <PriceRangeSlider
      getPriceFilter={getPriceFilter}
      heading={heading}
      initialPriceRange={initialPriceRange}
    />
  );
};
