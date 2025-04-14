import { categoriesList } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";

const CategoryCards = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 place-items-center text-center py-4">
      {categoriesList.map((item) => {
        return (
          <div
            key={item.id}
            className="w-full max-w-[160px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[500px] xl:max-w-[600px]"
          >
            <Image
              src={item.image}
              alt={item.id}
              width={1000} // Increased from 900 to 1000
              height={1000}
              className="w-full h-auto object-contain rounded-md"
              quality={100}
              priority
            />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryCards;
