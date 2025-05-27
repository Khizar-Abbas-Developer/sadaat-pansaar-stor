"use client";
import { navigationList } from "@/public/assets/assets";
import axios from "axios";
import Link from "next/link";
import debounce from "lodash.debounce";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { IoClose } from "react-icons/io5"; // For the close icon
import { useDispatch, useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";

const SideBar = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const inputRef = useRef();
  const dispatch = useDispatch();
  const pathname = usePathname(); // Get the current pathname
  const [favoriteItems, setFavoriteItems] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(0);
  const favouriteProducts = useSelector(
    (state) => state.product.favouriteProducts
  );
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;

  const fetchSuggestions = async (keyword) => {
    if (!keyword.trim()) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    try {
      const res = await axios.get(
        `${URL}/api/v1/product/products/suggestions?keyword=${encodeURIComponent(
          keyword
        )}`
      );
      const { success, suggestions } = res.data;

      if (success && suggestions.length > 0) {
        setSuggestions(suggestions);
        setShowDropdown(true);
      } else {
        setSuggestions([]);
        setShowDropdown(false);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
      setShowDropdown(false);
    }
  };

  const debouncedFetchSuggestions = useRef(
    debounce(fetchSuggestions, 300)
  ).current;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setText(value);

    if (value.trim() === "") {
      setSuggestions([]);
      setShowDropdown(false);
    } else {
      debouncedFetchSuggestions(value);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    console.log("Selected suggestion:", suggestion);
    router.push(`/product-category/${suggestion.category}`);
    setText(suggestion.productName);
    setShowDropdown(false);
  };

  const handleSearchProduct = (e) => {
    e.preventDefault();
    setShowDropdown(false);
    // Implement your search submit logic here with the current `text`
    console.log("Searching:", text);
  };

  // Dynamically set dropdown width
  useEffect(() => {
    if (inputRef.current && dropdownRef.current) {
      dropdownRef.current.style.width = `${inputRef.current.offsetWidth}px`;
    }
  }, [suggestions]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
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
              <form
                className="mt-8 mb-6 relative "
                onSubmit={handleSearchProduct}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={text}
                  ref={inputRef}
                  onChange={(e) => {
                    setText(e.target.value);
                    debouncedFetchSuggestions(e.target.value);
                  }}
                  onFocus={() => {
                    if (!text) {
                      debouncedFetchSuggestions("a");
                    }
                    setShowDropdown(true);
                  }}
                  className="w-56 py-1.5 pl-4 pr-8 rounded-full border border-gray-300 bg-gray-100 outline-none text-sm font-medium text-black"
                />
                <FiSearch className="absolute top-1/2 -right-16 -translate-y-1/2 text-gray-500" />

                {showDropdown && suggestions.length > 0 && (
                  <ul
                    ref={dropdownRef}
                    className="absolute bg-white border border-gray-200 rounded-md shadow z-50 max-h-48 overflow-y-auto animate-scaleFadeIn text-sm"
                    style={{
                      width: inputRef.current
                        ? inputRef.current.offsetWidth
                        : "auto",
                      left: inputRef.current ? inputRef.current.offsetLeft : 0,
                      top:
                        (inputRef.current ? inputRef.current.offsetTop : 0) +
                        (inputRef.current ? inputRef.current.offsetHeight : 0) +
                        6,
                    }}
                  >
                    {suggestions.map((item) => (
                      <li
                        key={item._id}
                        onClick={() => handleSelectSuggestion(item)}
                        className="px-3 py-1.5 cursor-pointer hover:bg-gray-100 text-black"
                      >
                        {item.productName}
                      </li>
                    ))}
                  </ul>
                )}
              </form>

              {/* Menu Items */}
              <ul className="text-sm flex flex-col gap-5">
                {navigationList.map((item) => (
                  <li
                    key={item.title}
                    className="hover:font-semibold hover:bg-[#EBEBEB] transition-all duration-300 ease-in-out px-[40px] py-[10px]"
                  >
                    <Link
                      className="block cursor-pointer"
                      href={item.path}
                      onClick={() => {
                        const drawerCheckbox =
                          document.getElementById("my-drawer");
                        if (drawerCheckbox) {
                          drawerCheckbox.checked = false;
                        }
                      }}
                    >
                      {item.title}
                    </Link>
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
