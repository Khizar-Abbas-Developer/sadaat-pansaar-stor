import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import categoryList1 from "@/public/assets/product-categories/Box.webp";
import { categoryCirclesList } from "@/public/assets/assets";
import Link from "next/link";

const CategoriesList = () => {
  return (
    <div className="bg-[#EFF5E9] py-10 px-4 md:px-10 lg:px-32 xl:px-36">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-300 pb-4">
        <div className="border-b-2 border-[#5FA800]">
          <p className="text-base md:text-lg lg:text-xl font-semibold text-black uppercase">
            Shop by feature categories
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center cursor-pointer text-sm md:text-md lg:text-md text-[#5FA800]">
          <p className="mr-1">View More</p>
          <MdOutlineKeyboardArrowRight className="text-gray-400 text-xl" />
        </div>
      </div>

      {/* Categories List - Carousel on small screens, grid on md+ */}
      <div
        className="mt-6 flex md:flex-wrap gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide pb-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {categoryCirclesList.map((item) => (
          <Link
            href={`product-category/${item.category}`}
            key={item.id}
            className="snap-start flex-shrink-0 md:flex-shrink md:w-[170px] flex flex-col items-center gap-2 transition-transform duration-300 transform hover:scale-110 cursor-pointer w-[100px]"
          >
            <Image
              src={item.image}
              alt={`category${item.id}`}
              {...(item.id === 1
                ? { width: 410, height: 410 }
                : { width: 1000, height: 1000 })}
              quality={100}
              className="object-cover rounded-full"
            />
            <p className="text-center text-sm md:text-base text-black">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
