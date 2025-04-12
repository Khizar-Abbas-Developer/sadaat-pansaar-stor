"use client";
import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import product1 from "@/public/assets/products/product-001.webp";
import Image from "next/image";

const Card = ({ array }) => {
  return (
    <>
      <div className="flex flex-wrap gap-[13px] md:justify-start lg:justify-start justify-center">
        {array.map((item, index) => {
          const [liked, setLiked] = useState(false);
          return (
            <React.Fragment key={index}>
              <div className="relative group p-[8px] flex w-48 shadow-md flex-col gap-6 justify-between items-center mt-10 text-black border-2 rounded-2xl border-gray-300">
                <div
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  onClick={() => setLiked(!liked)}
                >
                  {liked ? (
                    <FaHeart className="text-green-600 bg-white text-2xl cursor-pointer" />
                  ) : (
                    <FaRegHeart className="text-white px-[5px]  bg-green-600 text-2xl cursor-pointer rounded-full" />
                  )}
                </div>
                <div className="">
                  <Image
                    src={product1}
                    alt="product"
                    width={162}
                    height={162}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-5 ml-[8px]">
                  <div className="flex flex-col gap-1">
                    <p className="text-left text-xs tracking-wider">
                      DRY FRUITS
                    </p>
                    <p className="text-sm tracking-wider">
                      Brazil Nuts Without Shell 250g Pack
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="">
                      <span className="font-light text-gray-500 text-md tracking-wide">
                        From:{}
                      </span>
                      <span className="font-semibold">₨2,500</span>
                    </div>
                    <span className="bg-[#5FA800] rounded-full p-[6px]">
                      <FaShoppingCart className="text-white text-lg" />
                    </span>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Card;
