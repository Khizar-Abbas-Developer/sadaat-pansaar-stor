"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import paymentsMethodsLogo from "@/public/assets/payments-methods.webp";
import { FaMinusCircle, FaPlusCircle, FaWhatsapp } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import RelatedProducts from "@/components/RelatedProducts";
import axios from "axios";
import { MoonLoader } from "react-spinners";
import { useParams, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addProductToCart, setCartStatus } from "@/redux/products/productSlice";
import toast from "react-hot-toast";
import CustomerReviews from "@/components/Reviews";
import Description from "@/components/ProductDescription";

const Product = () => {
  const [activeTab, setActiveTab] = useState("description");
  const dispatch = useDispatch(); // Using Redux for state management
  const params = useParams();
  const { id } = params; // Extracting the product ID from the URL parameters
  const [loading, setLoading] = useState(true);
  const [dataToPopulate, setDataToPopulate] = React.useState({});
  const URL = process.env.NEXT_PUBLIC_SERVER_URL; // Base URL for the API
  const [count, setCount] = useState(1);
  const navigate = useRouter(); // Using Next.js router for navigation
  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `${URL}/api/v1/product/get-product/${id}`
      );
      setDataToPopulate(response.data.product);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };
  const [currentVariant, setCurrentVariant] = useState(
    dataToPopulate?.variants?.[0]?.variantName || null
  );
  const [currentPrice, setCurrentPrice] = useState(
    dataToPopulate?.variants?.[0]?.variantPrice || null
  );

  useEffect(() => {
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (dataToPopulate?.variants) {
      setCurrentVariant(dataToPopulate.variants[0].variantName);
      setCurrentPrice(dataToPopulate.variants[0].variantPrice);
    }
  }, [dataToPopulate]);
  const handleIncrease = () => {
    if (count >= dataToPopulate.productsInStock) {
      return;
    }
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count <= 1) {
      setCount(1);
      return;
    }
    setCount(count - 1);
  };
  const redirectToWishList = () => {
    navigate.push("/product/wishlist");
  };
  const handleAddToCart = (item) => () => {
    const productToAdd = {
      ...item,
      selectedVariant: currentVariant,
      selectedPrice: currentPrice,
      numberOfItems: count,
      cartId: Date.now() + Math.random(), // Unique per item added
    };
    dispatch(addProductToCart(productToAdd));
    dispatch(setCartStatus(true));

    toast.success("Product added to cart");
  };
  const handleBuyNow = (item) => () => {
    const productToAdd = {
      ...item,
      selectedVariant: currentVariant,
      selectedPrice: currentPrice,
      numberOfItems: count,
      cartId: Date.now() + Math.random(), // Unique per item added
    };
    dispatch(addProductToCart(productToAdd));
    navigate.push("/checkout");
  };
  console.log(dataToPopulate);

  return (
    <>
      {loading ? (
        <div className="h-[80vh] flex bg-white justify-center items-center">
          <MoonLoader color="#5FA800" />;
        </div>
      ) : (
        <div className="h-auto z-[9999999] lg:h-auto bg-white mt-[100px] px-4 sm:px-8 md:px-[50px] lg:px-[165px] py-[40px] md:py-[64px]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            {/* Image Section */}
            <div className="w-full lg:w-[50%] flex justify-center">
              <Image
                src={dataToPopulate?.image || ""}
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
                Home / {dataToPopulate?.category}
              </div>

              {/* Title */}
              <div className="text-2xl sm:text-[27px] font-medium text-black">
                {dataToPopulate?.productName}
              </div>

              {/* Price */}
              <div className="text-base sm:text-xl font-semibold text-black my-2">
                <span className="text-[#5FA800]">From:</span> ₨
                {dataToPopulate?.variants?.[0]?.variantPrice || null}
              </div>

              {/* WhatsApp Help Button */}
              <button className="bg-black text-white px-10 py-[6px] rounded flex items-center space-x-4 my-3">
                <FaWhatsapp className="text-green-400 text-xl" />
                <span className="text-white">Need Help?</span>
              </button>

              {/* Weight Buttons */}
              <div className="flex flex-wrap gap-3">
                {dataToPopulate?.variants?.map((variant) => (
                  <button
                    key={variant.variantName}
                    onClick={() => {
                      setCurrentVariant(variant.variantName);
                      setCurrentPrice(variant.variantPrice);
                    }}
                    className={`${
                      currentVariant === variant.variantName
                        ? "cursor-pointer border-2 border-[#559812] px-4 py-1 rounded text-green-500 bg-white"
                        : "cursor-pointer border border-black px-4 py-1 rounded text-black bg-white"
                    }`}
                  >
                    {variant.variantName}
                  </button>
                ))}
              </div>

              {/* Price and Stock */}
              <div className="my-2">
                <div className="text-xl sm:text-2xl font-bold text-black">
                  <span className="text-lg">₨</span>
                  <span className="text-2xl">{currentPrice}</span>
                </div>
                <div className="text-[#559812] font-semibold text-sm">
                  {dataToPopulate.productsInStock} in stock
                </div>
              </div>

              {/* Quantity + Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center justify-center border border-white rounded overflow-hidden">
                  <button
                    className="bg-white text-black flex cursor-pointer justify-center items-center w-8 h-8 text-lg font-bold"
                    onClick={handleDecrease}
                  >
                    <FaMinusCircle />
                  </button>
                  <div className="px-4 bg-white text-black text-xl font-semibold">
                    {count}
                  </div>
                  <button
                    className="bg-white text-black flex cursor-pointer justify-center items-center w-8 h-8 text-lg font-bold"
                    onClick={handleIncrease}
                  >
                    <FaPlusCircle />
                  </button>
                </div>
                <button
                  className="bg-[#559812] px-6 cursor-pointer flex justify-center items-center gap-3 py-2 text-white font-bold rounded"
                  onClick={handleAddToCart(dataToPopulate)}
                >
                  <FaShoppingCart className="text-lg" />
                  ADD TO CART
                </button>
                <button
                  className="bg-[#559812] px-6 py-2 text-white font-bold rounded"
                  onClick={handleBuyNow(dataToPopulate)}
                >
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
                  src={paymentsMethodsLogo || ""}
                  alt="payments-methods"
                  width={570}
                  height={370}
                />
              </div>
            </div>
          </div>
          {/* //Tabs */}
          <div className="w-full max-w-4xl mx-auto mt-10">
            {/* Tab Headers */}
            <div className="flex border-b border-gray-300">
              <button
                className={`py-2 px-4 text-sm cursor-pointer font-medium ${
                  activeTab === "description"
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500 hover:text-blue-500"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`py-2 px-4 text-sm cursor-pointer font-medium ${
                  activeTab === "reviews"
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500 hover:text-blue-500"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-4 border border-t-0 rounded-b-lg bg-white transition-all duration-300">
              {activeTab === "description" && (
                <Description data={dataToPopulate?.description} />
              )}
              {activeTab === "reviews" && <CustomerReviews />}
            </div>
          </div>
          <RelatedProducts category={dataToPopulate?.category} />
        </div>
      )}
    </>
  );
};

export default Product;
