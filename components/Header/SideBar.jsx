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
          <label
            htmlFor="my-drawer"
            className="drawer-button cursor-pointer p-4"
          >
            <GiHamburgerMenu className="text-2xl text-black" />
          </label>
        </div>
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>

          <div className="bg-white text-black min-h-full w-80 p-4 relative flex flex-col justify-between">
            {/* Close Button */}
            <label
              htmlFor="my-drawer"
              className="absolute top-4 right-4 text-2xl cursor-pointer"
            >
              <IoClose />
            </label>

            {/* Sidebar Top Content */}
            <div>
              {/* Search Bar */}
              <div className="mt-8 mb-6 relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="input input-bordered w-full pr-10 bg-gray-100"
                />
                <button className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500">
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
              <ul className="space-y-4 font-semibold text-sm">
                {[
                  "HOME",
                  "SHOP",
                  "ABOUT US",
                  "CONTACT US",
                  "FAQS",
                  "TRACK ORDER",
                ].map((item) => (
                  <li key={item}>
                    <label htmlFor="my-drawer" className="cursor-pointer">
                      <a className="block">{item}</a>
                    </label>
                  </li>
                ))}

                {/* Flash Sale with NEW Badge */}
                <li>
                  <label
                    htmlFor="my-drawer"
                    className="cursor-pointer flex items-center justify-between"
                  >
                    <a className="block">FLASH SALE</a>
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                      NEW
                    </span>
                  </label>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-xl mt-10 pt-6 border-t border-gray-200">
              <a href="#" className="hover:text-primary">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-primary">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-primary">
                <FaEnvelope />
              </a>
              <a href="#" className="hover:text-primary">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
