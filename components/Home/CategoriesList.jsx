import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import categoryList1 from "@/public/assets/Box.webp";
import { categoryCirclesList } from "@/public/assets/assets";

const CategoriesList = () => {
  return (
    <div className="bg-[#EFF5E9] py-10 px-4 md:px-10 lg:px-32 xl:px-36">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-300 pb-4">
        <div className="border-b-2 border-[#5FA800]">
          <p className="text-base md:text-lg lg:text-xl font-semibold">
            Shop by feature categories
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center cursor-pointer text-sm md:text-md lg:text-md text-[#5FA800]">
          <p className="mr-1">View More</p>
          <MdOutlineKeyboardArrowRight className="text-gray-400 text-xl" />
        </div>
      </div>

      {/* Categories List */}
      <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-6 md:gap-8">
        {categoryCirclesList.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-2 transition-transform duration-300 transform hover:scale-110 cursor-pointer w-[100px] md:w-[120px]"
          >
            <Image
              src={item.image}
              alt={`category${item.id}`}
              width={100}
              height={100}
              quality={100}
              className="object-cover rounded-full"
            />
            <p className="text-center text-sm md:text-base">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
