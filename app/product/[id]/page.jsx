import Image from "next/image";
import React from "react";
import product1 from "@/public/assets/products/product-001.webp";
import paymentsMethodsLogo from "@/public/assets/payments-methods.webp";
import { FaWhatsapp } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import RelatedProducts from "@/components/RelatedProducts";
import NumberOfProducts from "@/components/NumberOfProducts";

const Product = () => {
  return (
    <div className="h-[260vh] lg:h-auto mt-[100px] px-4 sm:px-8 md:px-[50px] lg:px-[165px] py-[40px] md:py-[64px]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Image Section */}
        <div className="w-full lg:w-[50%] flex justify-center">
          <Image
            src={product1}
            width={490}
            height={490}
            alt="product"
            priority
            quality={100}
            className="object-contain max-w-full h-auto"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-[50%] h-auto lg:h-[510px] flex flex-col justify-start items-start px-6 sm:px-[30px] md:px-[50px] py-[20px] text-white space-y-1">
          {/* Breadcrumb */}
          <div className="text-sm sm:text-base text-gray-500">
            Home / Dry Fruits
          </div>

          {/* Title */}
          <div className="text-2xl sm:text-[27px] font-medium text-black">
            Brazil Nuts Without Shell 250g Pack
          </div>

          {/* Price */}
          <div className="text-base sm:text-xl font-semibold text-black my-2">
            <span className="text-[#5FA800]">From:</span> ₨2,500
          </div>

          {/* WhatsApp Help Button */}
          <button className="bg-black text-white px-10 py-[6px] rounded flex items-center space-x-4 my-3">
            <FaWhatsapp className="text-green-400 text-xl" />
            <span className="text-white">Need Help?</span>
          </button>

          {/* Weight Buttons */}
          <div className="flex flex-wrap gap-3">
            <button className="cursor-pointer border-2 border-[#559812] px-4 py-1 rounded text-green-500 bg-white">
              250 gm
            </button>
            <button className="cursor-pointer border border-gray-400 px-4 py-1 rounded text-black">
              500 gm
            </button>
            <button className="cursor-pointer border border-gray-500 px-4 py-1 rounded text-black">
              1 Kg
            </button>
          </div>

          {/* Price and Stock */}
          <div className="my-2">
            <div className="text-xl sm:text-2xl font-bold text-black">
              <span className="text-lg">₨</span>
              <span className="text-2xl">2,500</span>
            </div>
            <div className="text-[#559812] font-semibold text-sm">
              74 in stock
            </div>
          </div>

          {/* Quantity + Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <NumberOfProducts />
            <button className="bg-[#559812] px-6 flex justify-center items-center gap-3 py-2 text-white font-bold rounded">
              <FaShoppingCart className="text-lg" />
              ADD TO CART
            </button>
            <button className="bg-[#559812] px-6 py-2 text-white font-bold rounded">
              BUY NOW
            </button>
          </div>

          {/* Shipping & Returns */}
          <div className="text-sm my-1">
            <div>
              <span className="text-black">Shipping:</span>{" "}
              <span className="text-red-400">
                Delivery 2 to 4 Business Days
              </span>
            </div>
            <div>
              <span className="text-black">Returns:</span>{" "}
              <span className="text-[#5FA800]">7 Day Easy Returns</span>
            </div>
          </div>

          {/* Payment Icons */}
          <div className="bg-white border-2 border-[#5FA800] px-4 py-2 mt-4 rounded w-full flex flex-wrap justify-center sm:justify-around items-center gap-3">
            <Image
              src={paymentsMethodsLogo}
              alt="payments-methods"
              width={570}
              height={370}
            />
          </div>
        </div>
      </div>
      <div className="px-10">
        <div className="shadow-lg rounded-lg px-12 py-8 mt-10">
          <div className="flex justify-between items-center text-xl font-semibold mb-4">
            About this item
          </div>
          <ul className="mt-4 list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
            <li>
              <span className="font-bold">POWER UP YOUR PLAY</span> – Win more
              games with Windows 11, a 13th Gen Intel Core i7-13650HX processor,
              and an NVIDIA GeForce RTX 4060 Laptop GPU at 140W Max TGP.
            </li>
            <li>
              <span className="font-bold">BLAZING FAST MEMORY AND STORAGE</span>{" "}
              – Multitask swiftly with 16GB of DDR5-4800MHz memory and 1TB of
              PCIe Gen4 SSD.
            </li>
            <li>
              <span className="font-bold">ROG INTELLIGENT COOLING</span> – The
              Strix G16 features Thermal Grizzly’s Conductonaut Extreme liquid
              metal on the CPU, and a third intake fan among other premium
              features, to allow for better sustained performance over long
              gaming sessions.
            </li>
            <li>
              <span className="font-bold">SWIFT DISPLAY</span> – The Strix G16
              features a FHD 165Hz panel, 100% sRGB, Pantone Validation, among
              other premium features on the Strix G16.
            </li>
            <li>
              <span className="font-bold">XBOX GAME PASS</span> – Get a free
              90-day pass and gain access to over 100 high-quality games. With
              games added all the time, there’s always something new to play.
            </li>
          </ul>
        </div>
      </div>
      <RelatedProducts array={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
    </div>
  );
};

export default Product;
