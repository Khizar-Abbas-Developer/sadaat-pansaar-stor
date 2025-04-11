import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import product1 from "@/public/assets/products/product-001.webp";
import { FaShoppingCart } from "react-icons/fa";

const NewArrivalCards = () => {
  return (
    <>
      <div
        className="flex flex-col gap-8 bg-white"
        style={{
          marginBottom: "130px",
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
        <div className="flex flex-wrap gap-[13px] md:justify-start lg:justify-start justify-center">
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className="flex w-48 shadow-md flex-col gap-6 justify-between items-center mt-10 text-black border-2 rounded-2xl border-gray-300"
                  style={{ padding: "8px" }}
                >
                  <div className="">
                    <Image
                      src={product1}
                      alt="product"
                      width={162}
                      height={162}
                      className="rounded-lg"
                    />
                  </div>
                  <div
                    className="flex flex-col gap-5"
                    style={{ marginLeft: "8px" }}
                  >
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
                      <span
                        className="bg-[#5FA800] rounded-full"
                        style={{ padding: "6px" }}
                      >
                        <FaShoppingCart className="text-white text-lg" />
                      </span>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewArrivalCards;
