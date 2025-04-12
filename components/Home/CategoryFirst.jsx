import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "@/components/Card/Card";
const CategoryFirst = () => {
  return (
    <>
      <div
        className="flex justify-between items-center text-black h-auto w-full"
        style={{ margin: "25px 10px" }}
      >
        <div className="border-b-[0.5px] border-gray-300 w-full flex justify-between items-center">
          <div className="border-b-3 border-[#5FA800]">
            <p className="text-sm md:text-xl lg:text-lg">
              DRYFRUITS COLLECTIONS
            </p>
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
      <div className="relative">
        <div className="flex flex-wrap gap-[13px] md:justify-start lg:justify-start justify-center">
          <Card array={[1, 2, 3, 4]} />
        </div>
      </div>
    </>
  );
};

export default CategoryFirst;
