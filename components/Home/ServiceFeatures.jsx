import { services } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";

const ServiceFeatures = () => {
  return (
    <div className="px-4 md:px-12 mt-[20px]">
      <div className="flex flex-wrap justify-center gap-6 border border-gray-300 rounded-lg p-[15px]">
        {services.map((item) => (
          <div
            key={item.id}
            className="flex w-full sm:w-[48%]d:w-[30%] lg:w-[22%] gap-4 items-start"
          >
            <div className="w-[2px] h-12 bg-black mt-1" />
            <div className="flex gap-3">
              <Image
                src={item.image}
                alt={item.title}
                width={40}
                height={40}
                className="object-contain"
                quality={100}
                priority
              />
              <div className="text-black">
                <p className="font-semibold text-base">{item.title}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFeatures;
