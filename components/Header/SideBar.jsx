import { navigationList } from "@/public/assets/assets";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { IoClose } from "react-icons/io5"; // For the close icon

const SideBar = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Hamburger Icon */}
          <label htmlFor="my-drawer" className="drawer-button cursor-pointer">
            <GiHamburgerMenu className="text-2xl text-black" />
          </label>
        </div>
        <div className="drawer-side z-15">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>

          <div className="bg-white text-black min-h-full w-80 p-4 relative flex flex-col justify-between">
            {/* Close Button */}
            <label
              htmlFor="my-drawer"
              className="absolute top-4 right-6 text-3xl cursor-pointer"
            >
              <IoClose />
            </label>
            {/* Sidebar Top Content */}
            <div className="flex flex-col gap-5 py-[60px]">
              {/* Search Bar */}
              <div className="mt-8 mb-6 relative px-[30px]">
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
                    <label htmlFor="my-drawer" className="cursor-pointer">
                      <Link className="block" href={item.path}>
                        {item.title}
                      </Link>
                    </label>
                  </li>
                ))}
                {/* Flash Sale with NEW Badge */}
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
        </div>
      </div>
    </>
  );
};

export default SideBar;
