"use client";
import React, { useState } from "react";
import { FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import logo from "@/public/assets/logo.png";
import { navigationList } from "@/public/assets/assets";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Header.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { FiHeart } from "react-icons/fi";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="h-[29.5px] lg:bg-[rgb(44,44,44)] bg-[#5FA800]"></div>
        <div className="singleHanded flex justify-between items-center lg:bg-[#5FA800] bg-white h-[73px] lg:h-[65px]">
          <div className="absolute top-[36px] hidden lg:block">
            <img
              src={logo.src}
              alt="Logo"
              className="rounded-[9%] w-[135px] h-[89px] bg-[#c0cccc] shadow-[-2px_8px_8px_rgba(0,0,0,0.2)]"
            />
          </div>
          <div className="absolute top-[48px] lg:hidden">
            <GiHamburgerMenu className="text-2xl" onClick={toggleSidebar} />
          </div>
          <div />
          <div className="relative w-full max-w-md mx-auto px-4 hidden lg:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-[644px] pl-8 pr-10 rounded-full border border-gray-300 bg-gray-100 outline-none text-[14px]"
              style={{
                paddingLeft: "20px",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            />
            <FiSearch className="absolute top-1/2 -right-45 -translate-y-1/2 text-gray-500" />
          </div>
          <div
            className="absolute top-8 lg:hidden flex justify-center items-center w-full"
            style={{
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <img
              src={logo.src}
              alt="Logo"
              className="rounded-[9%] w-[90px] h-[60px] bg-[#c0cccc] shadow-[-2px_8px_8px_rgba(0,0,0,0.2)]"
            />
          </div>

          <div className="flex items-center gap-6 p-4">
            {/* Heart Icon with Badge */}
            <div className="relative">
              <FiHeart className="lg:text-white text-black text-xl" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </div>

            {/* Cart Icon */}
            <div className="relative">
              <FaShoppingCart className="lg:text-white text-black text-xl" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </div>
          </div>
        </div>
        <div className="h-[29.5px] text-sm lg:bg-[rgb(44,44,44)] bg-[#5FA800] lg:hidden flex justify-center items-center text-white text-center">
          🎉 Get Up To 10% OFF, Limited Time Only 🎉
        </div>
        {/* //Mobile SideBar UI */}
        {isSidebarOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-40"
            onClick={toggleSidebar}
          >
            <div
              className="absolute top-0 left-0 w-[80%] sm:w-[60%] md:w-[45%] h-full bg-white shadow-lg p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <ul className="space-y-4 font-semibold text-[15px]">
                <li>
                  <Link href="/">HOME</Link>
                </li>
                <li>
                  <Link href="/shop">SHOP</Link>
                </li>
                <li>
                  <Link href="/about">ABOUT US</Link>
                </li>
                <li>
                  <Link href="/contact">CONTACT US</Link>
                </li>
                <li>
                  <Link href="/faqs">FAQS</Link>
                </li>
                <li>
                  <Link href="/track-order">TRACK ORDER</Link>
                </li>
                <li className="flex items-center gap-2">
                  <Link href="/flash-sale">FLASH SALE</Link>
                  <span className="bg-red-600 text-white px-1 text-xs rounded">
                    NEW
                  </span>
                </li>
              </ul>

              <div className="flex justify-start gap-4 mt-6 ml-2">
                <a href="#">
                  <i className="fab fa-facebook" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
                <a href="#">
                  <i className="fas fa-envelope" />
                </a>
              </div>
            </div>
          </div>
        )}
        {/* //Mobile SideBar UI */}
        <div className="border-b border-gray-200 hidden lg:block">
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
