import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import product1 from "@/public/assets/products/product-001.webp";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Card from "../Card/Card";

const NewArrivalCards = () => {
  return (
    <>
      <div
        className="flex flex-col gap-8 bg-white"
        style={{
          marginBottom: "60px",
        }}
      >
        <div
          className="flex justify-between items-center text-black h-auto w-full"
          style={{ margin: "25px 10px" }}
        >
          <div className="border-b-[0.5px] border-gray-300 w-full flex justify-between items-center">
            <div className="border-b-3 border-[#5FA800]">
              <p className="text-sm md:text-xl lg:text-lg">New Arrivals</p>
            </div>
            <div
              className="border-b-3 flex justify-center items-center border-[#5FA800] cursor-pointer"
              style={{ marginRight: "10px" }}
            >
              <p className="text-sm md:text-xl lg:text-lg">View More</p>
              <span>
                <MdOutlineKeyboardArrowRight className="text-gray-400 text-xl" />
              </span>
            </div>
          </div>
        </div>
        <Card array={[1, 2, 3, 4, 5, 6]} />
      </div>
    </>
  );
};

export default NewArrivalCards;
