"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import product1 from "@/public/assets/products/product-001.webp";
import Link from "next/link";

const RelatedProducts = ({ array }) => {
  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (index) => {
    setLikedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full px-4 mt-16">
      <div className="">
        <h2 className="text-2xl font-semibold text-black mb-4">
          Related Products
        </h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1.3}
        loop={true}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {array.map((item, index) => {
          const liked = likedItems.includes(index);
          return (
            <SwiperSlide key={index}>
              <div className="flex justify-center gap-20">
                <Link
                  href={`/product/${"343dlfjdlfdf"}`}
                  className="relative group p-[10px]  w-[260px] bg-white flex flex-col lg:gap-6 gap-16 justify-between items-center text-black border-2 rounded-2xl border-gray-300 shadow-md h-full"
                >
                  <div
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                    onClick={(e) => {
                      e.preventDefault(); // prevent link click when liking
                      toggleLike(index);
                    }}
                  >
                    {liked ? (
                      <FaHeart className="text-green-600 bg-white text-2xl cursor-pointer" />
                    ) : (
                      <FaRegHeart className="text-white px-[5px] bg-green-600 text-2xl cursor-pointer rounded-full" />
                    )}
                  </div>

                  <div className="w-full flex justify-center items-center">
                    <Image
                      src={product1}
                      alt="product"
                      width={222}
                      height={142}
                      className="rounded-lg object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-5 ml-[8px] w-full">
                    <div className="flex flex-col gap-1">
                      <p className="text-left text-xs tracking-wider">
                        DRY FRUITS
                      </p>
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
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RelatedProducts;
