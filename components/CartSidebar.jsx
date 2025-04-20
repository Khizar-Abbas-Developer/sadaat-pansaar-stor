import React, { useState } from "react";
import { navigationList } from "@/public/assets/assets";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaStaffSnake } from "react-icons/fa6";

const CartSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon */}
      <button onClick={() => setIsOpen(true)} className="cursor-pointer">
        <FaStaffSnake className="text-2xl text-black" />
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel */} 
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white text-black z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-6 text-3xl cursor-pointer"
        >
          <IoClose />
        </button>

        {/* Sidebar Content */}
        <div className="flex flex-col justify-between min-h-full p-4">
          {/* Search Bar */}
          <div className="mt-12 mb-6 relative px-[30px]">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full px-[20px] py-[10px] pr-10 bg-gray-100 rounded-full pl-3"
            />
            <button className="absolute top-1/2 right-14 -translate-y-1/2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <ul className="text-sm flex flex-col gap-5">
            {navigationList.map((item) => (
              <li
                key={item.title}
                className="hover:font-semibold hover:bg-[#EBEBEB] transition-all duration-300 ease-in-out px-[40px] py-[10px]"
              >
                <Link
                  href={item.path}
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <div className="flex items-center gap-6 px-[33px] py-[10px]">
              <li>
                <FaFacebookF className="text-xl" />
              </li>
              <li>
                <FaInstagram className="text-xl" />
              </li>
              <li>
                <FaEnvelope className="text-xl" />
              </li>
              <li>
                <FaYoutube className="text-2xl" />
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
