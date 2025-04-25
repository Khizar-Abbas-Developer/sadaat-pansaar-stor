"use client";
import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import product1 from "@/public/assets/products/product-001.webp";

const CategoryCard = ({ array }) => {
  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (index) => {
    setLikedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full px-2 sm:px-4 md:px-6 lg:px-10 xl:px-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {array.map((item, index) => {
          const liked = likedItems.includes(index);
          return (
            <div
              key={index}
              className="relative group flex flex-col w-full sm:w-[48%] md:w-[31%] lg:w-[23%] xl:w-[18%] justify-between border rounded-2xl shadow-md bg-white overflow-hidden transition-transform duration-300 hover:scale-[1.02] mx-auto"
            >
              {/* Like Button */}
              <div
                className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                onClick={() => toggleLike(index)}
              >
                {liked ? (
                  <FaHeart className="text-white bg-green-600 text-xl p-1 rounded-full" />
                ) : (
                  <FaRegHeart className="text-white bg-green-600 text-xl p-1 rounded-full" />
                )}
              </div>

              {/* Product Image */}
              <div className="w-full h-[180px] md:h-[200px] flex items-start justify-center px-2 py-2">
                <Image
                  src={product1}
                  alt="product"
                  width={320}
                  height={250}
                  className="rounded-2xl object-contain max-h-full w-auto h-full"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-between gap-4 px-3 py-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[11px] text-gray-500 tracking-wide">
                    DRY FRUITS
                  </p>
                  <p className="text-sm md:text-base font-medium text-gray-800 tracking-wide line-clamp-2">
                    {item.name || "Brazil Nuts Without Shell 250g Pack"}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-500">From: </span>
                    <span className="font-semibold text-black text-sm md:text-base">
                      {item.price || "₨2,500"}
                    </span>
                  </div>
                  <div className="bg-green-600 p-2 rounded-full cursor-pointer hover:bg-green-700 transition-colors">
                    <FaShoppingCart className="text-white text-lg" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryCard;
