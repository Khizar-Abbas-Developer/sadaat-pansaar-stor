"use client";
import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import product1 from "@/public/assets/products/product-001.webp";
import Link from "next/link";

// Dummy product image used for all cards; use item.image if available

const Card = ({ array }) => {
  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (index) => {
    setLikedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full px-2 sm:px-4 md:px-8">
      <div
        className="flex md:flex-wrap md:justify-start justify-start gap-[13px] overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide pb-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {array.map((item, index) => {
          const liked = likedItems.includes(index);
          return (
            <Link
              href={`/product/${"343dlfjdlfdf"}`}
              key={index}
              className="snap-start min-w-[200px] md:min-w-[180px] max-w-[200px] md:max-w-[180px] relative group p-[8px] flex flex-col gap-6 justify-between items-center mt-2 text-black border-2 rounded-2xl border-gray-300 shadow-md bg-white"
            >
              <div
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                onClick={() => toggleLike(index)}
              >
                {liked ? (
                  <FaHeart className="text-green-600 bg-white text-2xl cursor-pointer" />
                ) : (
                  <FaRegHeart className="text-white px-[5px] bg-green-600 text-2xl cursor-pointer rounded-full" />
                )}
              </div>

              <div>
                <Image
                  src={product1} // Replace with item.image if dynamic
                  alt="product"
                  width={162}
                  height={162}
                  className="rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-5 ml-[8px] w-full">
                <div className="flex flex-col gap-1">
                  <p className="text-left text-xs tracking-wider">DRY FRUITS</p>
                  <p className="text-sm tracking-wider">
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
                  <span className="bg-[#5FA800] rounded-full p-[6px]">
                    <FaShoppingCart className="text-white text-lg" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
