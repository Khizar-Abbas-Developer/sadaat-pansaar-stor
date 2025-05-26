"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import logo from "@/public/assets/headerK.jpeg";
import debounce from "lodash.debounce";
import { navigationList } from "@/public/assets/assets";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Header.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation"; // Use this for server components
import { FiHeart } from "react-icons/fi";
import Link from "next/link";
import SideBar from "./SideBar";
import Marquee from "../Marquee/Marquee";
import CartSidebar from "../CartSidebar";
import temporyBackgroundImage from "@/public/assets/munaza/theme.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setCartStatus } from "@/redux/products/productSlice";
import axios from "axios";

const Header = () => {
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
  const cartProducts = useSelector((state) => state.product.cartProducts);

  useEffect(() => {
    setFavoriteItems(favouriteProducts.length);
    setCartItems(cartProducts.length);
  }, [favouriteProducts, cartProducts]);
  const handleCheckCartSidebar = () => {
    dispatch(setCartStatus(true));
  };

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
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Marquee />
        <div className="singleHanded flex justify-between items-center lg:bg-[#420808] bg-white h-[73px] lg:h-[65px]">
          <Link
            href="/"
            className="absolute top-[36px] hidden lg:block cursor-pointer"
          >
            <img
              src={logo.src}
              alt="Logo"
              className="w-[90px] h-[90px] rounded-full bg-[#c0cccc] shadow-[-2px_8px_8px_rgba(0,0,0,0.2)]"
            />
          </Link>

          <div className="absolute top-[48px] lg:hidden z-[9999]">
            <SideBar />
          </div>
          <div className="absolute top-[48px] z-[9999]">
            <CartSidebar />
          </div>
          <div />
          <form
            onSubmit={handleSearchProduct}
            className="relative w-full max-w-xl mx-auto px-4 hidden lg:block"
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
                  debouncedFetchSuggestions("a"); // Fetch suggestions with "a" when focused and input is empty
                  setShowDropdown(true);
                }
              }}
              className="w-[644px] py-[5px] pl-[20px] pr-10 rounded-full border border-gray-300 bg-gray-100 outline-none text-[16px] font-medium text-black"
            />
            <FiSearch className="absolute top-1/2 -right-16 -translate-y-1/2 text-gray-500" />

            {showDropdown && suggestions.length > 0 && (
              <ul
                ref={dropdownRef}
                className="absolute mt-2 bg-white border border-gray-200 rounded-lg shadow z-50 max-h-64 overflow-y-auto animate-scaleFadeIn"
                style={{
                  width: inputRef.current
                    ? inputRef.current.offsetWidth
                    : "auto",
                  left: inputRef.current ? inputRef.current.offsetLeft : 0,
                  top:
                    (inputRef.current ? inputRef.current.offsetTop : 0) +
                    (inputRef.current ? inputRef.current.offsetHeight : 0) +
                    8,
                }}
              >
                {suggestions.map((item) => (
                  <li
                    key={item._id}
                    onClick={() => handleSelectSuggestion(item)}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-black"
                  >
                    {item.productName}
                  </li>
                ))}
              </ul>
            )}
          </form>
          <Link
            href="/"
            className="absolute top-7 lg:hidden flex justify-center items-center w-full left-0 right-0 mx-auto"
          >
            <img
              src={logo.src}
              alt="Logo"
              className="w-[75px] h-[75px] rounded-full bg-[#c0cccc] shadow-[-2px_8px_8px_rgba(0,0,0,0.2)]"
            />
          </Link>

          <div className="flex items-center gap-6 p-4">
            {/* Heart Icon with Badge */}
            <Link href="/product/wishlist" className="relative">
              <FiHeart className="lg:text-white text-black text-xl" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {favoriteItems}
              </span>
            </Link>

            {/* Cart Icon */}
            <div
              className="relative cursor-pointer"
              onClick={handleCheckCartSidebar}
            >
              <FaShoppingCart className="lg:text-white text-black text-xl" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartItems}
              </span>
            </div>
          </div>
        </div>

        <div className="h-[29.5px] text-sm lg:bg-[rgb(44,44,44)] bg-[#420808] lg:hidden flex justify-center items-center text-white text-center">
          🎉 Get Up To 10% OFF, Limited Time Only 🎉
        </div>
        <div
          className="border-b border-gray-200 hidden lg:block"
          style={{ backgroundImage: temporyBackgroundImage }}
        >
          <div className="flex justify-center text-black items-center bg-white shadow-md h-[50px] gap-4">
            <div className="relative group">
              {/* Trigger Section */}
              <div className="flex justify-center items-center gap-2 cursor-pointer">
                <div className="mr-[3px]">
                  <RxHamburgerMenu className="text-2xl" />
                </div>
                <div className="text-[##0A0A0A] text-[14.4px] font-[400] flex justify-center items-center w-full">
                  <span className="mr-[3px]">All Categories</span>
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
