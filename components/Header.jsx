"use client";
import React from "react";
import { FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import logo from "@/public/assets/web-logo.webp";
import { navigationList } from "@/public/assets/assets";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { FiHeart } from "react-icons/fi";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="h-[29.5px] bg-[rgb(44,44,44)]"></div>
        <div
          className="flex justify-between items-center bg-[#5FA800] h-[65px]"
          style={{ paddingLeft: "75px", paddingRight: "70px" }}
        >
          <div className="absolute top-[36px]">
            <img
              src={logo.src}
              alt="Logo"
              className="rounded-[9%] w-[135px] h-[89px] bg-white shadow-[-2px_8px_8px_rgba(0,0,0,0.2)]"
            />
          </div>
          <div />
          <div className="relative w-full max-w-md mx-auto px-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-[644px] pl-8 pr-10 rounded-full border border-gray-300 bg-gray-100 outline-none text-[14px] "
              style={{
                paddingLeft: "10px",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            />
            <FiSearch className="absolute top-1/2 -right-48 -translate-y-1/2 text-gray-500" />
          </div>

          <div className="flex items-center gap-6 bg-[#6aad00] p-4">
            {/* Heart Icon with Badge */}
            <div className="relative">
              <FiHeart className="text-white text-xl" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </div>

            {/* Cart Icon */}
            <div className="text-white text-xl">
              <FaShoppingCart />
            </div>
          </div>
        </div>
        <div
          className="border-b border-gray-200 "
          style={{ marginRight: "112px" }}
        >
          <div className="flex justify-center text-black items-center bg-white shadow-md h-[50px] gap-4">
            <div className="relative group">
              {/* Trigger Section */}
              <div className="flex justify-center items-center gap-2 cursor-pointer">
                <div style={{ marginRight: "3px" }}>
                  <RxHamburgerMenu className="text-2xl" />
                </div>
                <div className="text-[##0A0A0A] text-[14.4px] font-[400] flex justify-center items-center w-full">
                  <span className="" style={{ marginRight: "3px" }}>
                    All Categories
                  </span>
                  <RiArrowDropDownLine className="text-2xl" />
                </div>
              </div>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-[150px] bg-white shadow-lg rounded-md p-2 hidden group-hover:block z-10">
                <ul className="space-y-1">
                  <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                    Fruits
                  </li>
                  <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                    Dry Fruits
                  </li>
                  <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                    Snacks
                  </li>
                  <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                    Gift Boxes
                  </li>
                </ul>
              </div>
            </div>
            {navigationList.map((item, index) => {
              const isActive = pathname === item.path;

              return (
                <Link key={index} href={item.path}>
                  <div
                    className={`text-sm text-black relative pb-1 text-[12.8px] font-[500]
          ${
            isActive
              ? "after:absolute after:bottom-[-7px] after:left-0 after:h-[4px] after:w-full after:bg-black"
              : ""
          } hover:after:absolute after:bottom-[-7px] after:left-0 after:h-[4px] after:w-full after:bg-black`}
                  >
                    {item.title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
