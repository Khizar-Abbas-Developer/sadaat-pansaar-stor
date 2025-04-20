import React from "react";
import { ImCross } from "react-icons/im";
import product1 from "@/public/assets/products/product-001.webp";
import Image from "next/image";

const WhishList = () => {
  return (
    <div className="h-auto mt-40 px-4 sm:px-8 md:px-12 lg:px-40 py-10 md:py-16">
      <div className="flex flex-col w-full">
        {/* Header */}
        <div className="hidden sm:grid grid-cols-5 font-semibold text-gray-600 text-sm uppercase mb-3">
          <div className="col-span-2">Product Name</div>
          <div className="text-start">Unit Price</div>
          <div className="text-start">Stock Status</div>
        </div>
        <hr className="mb-4 hidden sm:block" />
        {[1, 2, 3].map((item) => {
          return (
            <div
              className="grid grid-cols-1 sm:grid-cols-5 sm:items-center w-full gap-y-6 sm:gap-y-0 my-3"
              key={item}
            >
              {/* Product Info */}
              <div className="col-span-2 flex items-center gap-4">
                <div className="cursor-pointer text-gray-700 hover:text-red-600 border border-black p-1 rounded-full">
                  <ImCross size={9} />
                </div>
                <Image
                  src={product1}
                  alt="product"
                  width={60}
                  height={60}
                  className="object-cover rounded"
                />
                <p className="text-sm font-medium text-gray-800 hidden sm:block">
                  Dried Pineapple (250gm Pack)
                </p>
              </div>

              {/* Product name for mobile */}
              <div className="sm:hidden">
                <p className="text-sm font-medium text-gray-800">
                  Dried Pineapple (250gm Pack)
                </p>
              </div>

              {/* Unit Price */}
              <div className="text-sm text-start">
                <span className="sm:hidden font-semibold">Price: </span>
                From: <span className="font-bold">₨1,000</span>
              </div>

              {/* Stock + Buttons */}
              <div className="flex justify-start items-center gap-2">
                <span className="px-3 py-2 text-sm font-medium bg-green-400 text-black rounded cursor-pointer">
                  In Stock
                </span>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-2">
                <button className="bg-[#5FA800] text-white px-4 py-2 text-sm font-semibold rounded w-full sm:w-auto cursor-pointer">
                  Add to Cart
                </button>
                <button className="bg-[#5FA800] text-white px-4 py-2 text-sm font-semibold rounded w-full sm:w-auto cursor-pointer">
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhishList;
