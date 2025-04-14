import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import product1 from "@/public/assets/products/product-001.webp";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Card from "../Card/Card";

const NewArrivalCards = ({ title, array }) => {
  return (
    <>
      <div className="flex flex-col gap-8 bg-white my-[30px]">
        <div className="flex justify-between items-center text-black h-auto w-full my-[25pxx] px-[10px]">
          <div className="border-b-[0.5px] border-gray-300 w-full flex justify-between items-center">
            <div className="border-b-3 border-[#5FA800]">
              <p className="text-md md:text-xl lg:text-lg uppercase">{title}</p>
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
        <Card array={array} />
      </div>
    </>
  );
};

export default NewArrivalCards;
