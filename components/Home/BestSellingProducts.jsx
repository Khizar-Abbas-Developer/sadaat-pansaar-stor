"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import product1 from "@/public/assets/products/product-001.webp";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Card from "../Card/Card";
import axios from "axios";
import { useSelector } from "react-redux";

const BestSellingProducts = ({ title, array }) => {
  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state.product.products);
  const arrayToLoop = (products || [])
    .filter((item) => item.bestSellingProduct)
    .slice(0, 6);
  useEffect(() => {
    if (arrayToLoop.length > 0) {
      setLoading(false);
    }
  }, [products]);

  return (
    <>
      {loading ? (
        <div className="w-full px-2 sm:px-4 md:px-8">
          <div
            className="flex md:flex-wrap md:justify-start justify-start gap-[13px] overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide pb-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <div
                  key={index}
                  className="animate-pulse snap-start min-w-[200px] md:min-w-[180px] max-w-[200px] md:max-w-[180px] h-[313px] p-[8px] flex flex-col gap-6 justify-between items-center mt-2 border-2 rounded-2xl border-gray-300 shadow-md bg-white"
                >
                  {/* Image Placeholder */}
                  <div className="w-[162px] h-[162px] bg-gray-300 rounded-lg" />

                  {/* Text Placeholders */}
                  <div className="flex flex-col gap-5 w-full">
                    <div className="flex flex-col gap-2">
                      <div className="h-3 w-[60%] bg-gray-300 rounded" />
                      <div className="h-4 w-full bg-gray-300 rounded" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="h-4 w-[50%] bg-gray-300 rounded" />
                      <div className="w-6 h-6 bg-gray-300 rounded-full" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8 bg-white py-[30px]">
          <div className="flex justify-between items-center text-black h-auto w-full my-[25pxx] px-[10px]">
            <div className="border-b-[0.5px] border-gray-300 w-full flex justify-between items-center">
              <div className="border-b-3 border-[#5FA800]">
                <p className="text-md md:text-xl lg:text-lg uppercase">
                  {title}
                </p>
              </div>
              <div className="border-b-3 flex justify-end items-center border-[#5FA800] cursor-pointer mr-[10px]">
                <p className="text-sm md:text-xl lg:text-lg text-[#5FA800]">
                  View More
                </p>
                <span>
                  <MdOutlineKeyboardArrowRight className="text-xl text-[#5FA800]" />
                </span>
              </div>
            </div>
          </div>
          <Card arrayData={arrayToLoop} />
        </div>
      )}
    </>
  );
};

export default BestSellingProducts;
