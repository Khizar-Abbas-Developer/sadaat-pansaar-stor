import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import categoryList1 from "@/public/assets/Box.webp";
import { categoryCirclesList } from "@/public/assets/assets";

const CategoriesList = () => {
  return (
    <div className="bg-[#EFF5E9] h-[49vh]" style={{ padding: "50px 135px" }}>
      <div className="flex justify-between items-center text-black h-auto w-full">
        <div className="border-b-[0.5px] border-gray-300 w-full flex justify-between items-center">
          <div className="border-b-3 border-[#5FA800]">
            <p className="text-sm md:text-xl lg:text-xl">
              Shop by feature categories
            </p>
          </div>
          <div
            className="border-b-3 flex justify-center items-center border-[#5FA800] cursor-pointer"
            style={{ marginRight: "10px" }}
          >
            <p className="text-sm md:text-md lg:text-md">View More</p>
            <span>
              <MdOutlineKeyboardArrowRight className="text-gray-400 text-xl" />
            </span>
          </div>
        </div>
      </div>
      <div className="text-black flex gap-8 justify-start items-center h-full">
        {categoryCirclesList.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-1 transition-transform duration-400 transform hover:scale-110 cursor-pointer"
          >
            <div>
              <Image
                src={item.image}
                alt={`category${item.id}`}
                width={120}
                height={120}
                quality={100}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-center">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
