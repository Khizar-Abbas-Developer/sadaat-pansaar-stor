"use client";
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import product1 from "@/public/assets/products/product-001.webp";
import Link from "next/link";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavouriteProduct } from "@/redux/products/productSlice";

// Dummy product image used for all cards; use item.image if available

const Card = ({ arrayData }) => {
  const dispatch = useDispatch();
  const favouriteProducts = useSelector(
    (state) => state.product.favouriteProducts
  );

  const toggleLike = (item) => {
    if (item) {
      dispatch(toggleFavouriteProduct(item));
    }
  };

  return (
    <>
      <div className="w-full px-2 sm:px-4 md:px-8">
        <div
          className="flex md:flex-wrap md:justify-start justify-start gap-[13px] overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide pb-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {arrayData &&
            arrayData.length > 0 &&
            arrayData.slice(0, 6).map((item, index) => {
              const isLiked = favouriteProducts.some(
                (fav) => fav._id === item._id
              );
              return (
                <React.Fragment key={index}>
                  <div
                    key={index}
                    className="snap-start min-w-[200px] md:min-w-[180px] max-w-[200px] md:max-w-[180px] relative group p-[8px] flex flex-col gap-6 justify-between items-center mt-2 text-black border-2 rounded-2xl border-gray-300 shadow-md bg-white"
                  >
                    {/* Wishlist Heart Icon - OUTSIDE <Link> */}
                    <div
                      className="
      absolute top-2 right-2 
      opacity-100 
      lg:opacity-0 
      lg:group-hover:opacity-100 
      transition-opacity duration-300 
      z-10
    "
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (item) toggleLike(item);
                      }}
                    >
                      {isLiked ? (
                        <FaRegHeart className="text-white px-[5px] bg-green-600 text-2xl cursor-pointer rounded-full" />
                      ) : (
                        <FaRegHeart className="text-green-600 px-[5px] bg-white text-2xl cursor-pointer rounded-full" />
                      )}
                    </div>

                    {/* Clickable Product Card - Link Only Wraps Inside */}
                    <Link
                      href={`/product/${item._id}`}
                      className="w-full flex flex-col gap-6 justify-between items-center"
                    >
                      <div>
                        <Image
                          src={item?.image || "/placeholder.png"}
                          alt="product"
                          width={162}
                          height={162}
                          className="rounded-lg"
                        />
                      </div>

                      <div className="flex flex-col gap-5 ml-[8px] w-full">
                        <div className="flex flex-col gap-1">
                          <p className="text-left text-xs tracking-wider">
                            {item.category}
                          </p>
                          <p className="text-sm tracking-wider">
                            {item.productName}
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-light text-gray-500 text-md tracking-wide">
                              From:{" "}
                            </span>
                            <span className="font-semibold">{`₨${item.productPrice}`}</span>
                          </div>
                          <span className="bg-[#7d2f2f] rounded-full p-[6px]">
                            <FaShoppingCart className="text-white text-lg" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Card;
