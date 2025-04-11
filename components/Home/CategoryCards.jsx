import { categoriesList } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";

const CategoryCards = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center text-center py-4">
      {categoriesList.map((item) => {
        return (
          <div
            key={item.id}
            className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px]"
          >
            <Image
              src={item.image}
              alt={item.id}
              width={200}
              height={200}
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
