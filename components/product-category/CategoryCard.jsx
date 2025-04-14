"use client";
import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

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
    <div className="w-full px-1 sm:px-6 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
        {array.map((item, index) => {
          const liked = likedItems.includes(index);
          return (
            <div
              key={index}
              className="relative group p-2 flex flex-col gap-6 justify-between items-center text-black border-2 rounded-2xl border-gray-300 shadow-md bg-white"
            >
              <div
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                onClick={() => toggleLike(index)}
              >
                {liked ? (
                  <FaRegHeart className="text-white px-[5px] bg-green-600 text-2xl cursor-pointer rounded-full" />
                ) : (
                  <FaRegHeart className="text-white px-[5px] bg-green-600 text-2xl cursor-pointer rounded-full" />
                )}
              </div>

              <div className="w-full">
                <Image
                  src={product1} // Replace with item.image if dynamic
                  alt="product"
                  width={250}
                  height={250}
                  className="rounded-lg object-contain"
                />
              </div>

              <div className="flex flex-col gap-5 w-full">
                <div className="flex flex-col gap-1">
                  <p className="text-left text-xs tracking-wider text-gray-500">
                    DRY FRUITS
                  </p>
                  <p className="text-sm tracking-wider font-medium">
                    {item.name || "Brazil Nuts Without Shell 250g Pack"}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-light text-gray-500 text-md tracking-wide">
                      From:{" "}
                    </span>
                    <span className="font-semibold">
                      {item.price || "₨2,500"}
                    </span>
                  </div>
                  <span className="bg-[#5FA800] rounded-full p-2">
                    <FaShoppingCart className="text-white text-lg" />
                  </span>
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
