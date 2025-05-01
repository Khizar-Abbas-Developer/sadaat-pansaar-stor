"use client";
import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProductFromCart,
  setCartSummary,
  updateCartItems,
} from "@/redux/products/productSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  FaDotCircle,
  FaLongArrowAltLeft,
  FaShoppingCart,
} from "react-icons/fa";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const grandTotal = useSelector((state) => state.product.grandTotal);

  const dispatch = useDispatch();
  const favouriteProducts = useSelector((state) => state.product.cartProducts);
  const [shippingOption, setShippingOption] = useState("standard"); // default selection
  const handleRemoveProduct = (productId) => () => {
    dispatch(removeProductFromCart(productId));
    toast.error("Product removed from cart");
  };

  const recalculateCartSummary = (updatedCart = favouriteProducts) => {
    const subtotal = updatedCart.reduce(
      (acc, product) => acc + product.selectedPrice * product.numberOfItems,
      0
    );
    const shippingCost = shippingOption === "express" ? 500 : 200;
    const grandTotal = subtotal + shippingCost;

    dispatch(
      setCartSummary({
        subtotal,
        shippingMethod: shippingOption,
        grandTotal,
      })
    );
  };

  const totalAmount = favouriteProducts.reduce((acc, item) => {
    return acc + item.selectedPrice * item.numberOfItems;
  }, 0);
  useEffect(() => {
    recalculateCartSummary();
  }, [favouriteProducts, shippingOption]);
  //
  const handleQuantityChange = (cartId, type) => {
    const item = favouriteProducts.find((i) => i.cartId === cartId);
    if (!item) return;

    const newCount =
      type === "increase" ? item.numberOfItems + 1 : item.numberOfItems - 1;

    if (newCount < 1 || newCount > item.productsInStock) return;

    const updatedProduct = {
      ...item,
      numberOfItems: newCount,
    };

    dispatch(updateCartItems(updatedProduct));

    // Recalculate and update totals after changing quantity
    const updatedCart = favouriteProducts.map((product) =>
      product.cartId === cartId ? updatedProduct : product
    );

    const subtotal = updatedCart.reduce(
      (acc, product) => acc + product.selectedPrice * product.numberOfItems,
      0
    );

    const shippingCost = shippingOption === "express" ? 500 : 200;
    const grandTotal = subtotal + shippingCost;

    dispatch(
      setCartSummary({
        subtotal,
        shippingMethod: shippingOption,
        grandTotal,
      })
    );
  };
  const handleNaviateToCheckout = () => {
    setLoading(true);
    router.push("/checkout");
  };

  return (
    <div className="h-auto mt-32 px-4 sm:px-8 md:px-2 bg-white lg:px-30 py-10 flex flex-col lg:flex-row gap-10">
      {favouriteProducts.length > 0 ? (
        <>
          {/* Left - Wishlist Items */}
          <div className="w-full lg:w-[65%] flex flex-col">
            {/* Header */}
            <div className="hidden sm:grid grid-cols-5 font-semibold text-gray-600 text-sm uppercase mb-3">
              <div className="text-black col-span-2">Product</div>
              <div className="text-black text-center">Price</div>
              <div className="text-black text-center">Quantity</div>
              <div className="text-black text-center">Subtotal</div>
            </div>
            <hr className="mb-4 hidden sm:block border-t-2 border-gray-300" />

            {/* Cart Items */}
            {favouriteProducts.map((item) => (
              <div
                key={item.cartId}
                className="flex flex-col sm:grid sm:grid-cols-5 gap-4 sm:gap-y-0 text-sm py-4 border-b"
              >
                {/* Product Info */}
                <div className="flex sm:col-span-2 items-center gap-4">
                  <button
                    onClick={handleRemoveProduct(item.cartId)}
                    className="text-gray-700 cursor-pointer hover:text-red-600 border border-black p-1 rounded-full"
                  >
                    <ImCross size={9} />
                  </button>
                  <Image
                    src={item?.image || ""}
                    alt="product"
                    width={70}
                    height={70}
                    className="object-cover rounded"
                  />
                  <div className="flex flex-col">
                    <p className="font-medium text-black">
                      {item?.productName}
                    </p>
                    <p className="text-gray-500 sm:hidden text-sm">
                      Category: {item?.category}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="flex justify-between sm:justify-center sm:items-center sm:text-center">
                  <span className="sm:hidden font-semibold text-gray-500">
                    Price:
                  </span>
                  <span className="font-bold text-black">
                    ₨{item?.selectedPrice}
                  </span>
                </div>

                {/* Quantity */}
                <div className="flex justify-between sm:justify-center sm:items-center">
                  <span className="sm:hidden font-semibold text-gray-500">
                    Qty:
                  </span>
                  <div>
                    <button
                      className="bg-[#f9f9f9] cursor-pointer text-gray-800 px-2 py-2 border border-gray-400"
                      onClick={() =>
                        handleQuantityChange(item.cartId, "decrease")
                      }
                    >
                      -
                    </button>
                    <button className="bg-white text-gray-800 px-4 text-sm py-2 border-t border-b border-gray-400">
                      {item?.numberOfItems}
                    </button>
                    <button
                      className="bg-[#f9f9f9] cursor-pointer text-gray-800 px-2 py-2 border border-gray-400"
                      onClick={() =>
                        handleQuantityChange(item.cartId, "increase")
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="flex justify-between sm:justify-center sm:items-center">
                  <span className="sm:hidden font-semibold text-black">
                    Subtotal:
                  </span>
                  <span className="font-bold text-black">
                    ₨{item?.selectedPrice * item?.numberOfItems}
                  </span>
                </div>
              </div>
            ))}
            <div className="w-[70%] md:w-[28%] mt-4">
              <div
                className="flex items-center justify-center gap-2 cursor-pointer py-2 px-2 border-2 border-[#5fa800]"
                onClick={() => router.push("/")}
              >
                <span>
                  <FaLongArrowAltLeft className="text-[#5fa800]" />
                </span>
                <p className="text-[#5fa800] uppercase font-semibold text-xs md:text-base">
                  Continue Shoppin
                </p>
              </div>
            </div>
          </div>

          {/* Right - Totals Section */}
          <div className="w-full lg:w-[30%]">
            <div className="text-gray-600 text-sm uppercase font-semibold mb-3">
              Cart Totals
            </div>
            <hr className="mb-4 border-t-2 border-gray-300" />

            <div className="flex justify-between text-sm mb-4 text-black">
              <div>Subtotal</div>
              <div className="font-semibold">{`Rs${totalAmount}`}</div>
            </div>

            <hr className="border-gray-200" />

            <div className="mt-4 text-sm">
              <div className="mb-2 font-semibold text-black">Shipping</div>
              <div className="flex flex-col gap-4 mt-2">
                {/* Express Option */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="shipping"
                    value="express"
                    checked={shippingOption === "express"}
                    onChange={() => setShippingOption("express")}
                    className="accent-[#5fa800] w-4 h-4"
                  />
                  <span className="text-black">
                    24-Hour Express Delivery: ₨500
                  </span>
                </label>

                {/* Standard Option */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="shipping"
                    value="standard"
                    checked={shippingOption === "standard"}
                    onChange={() => setShippingOption("standard")}
                    className="accent-[#5fa800] w-4 h-4"
                  />
                  <span className="text-black">
                    Standard Shipping Charges: ₨200
                  </span>
                </label>
              </div>
            </div>

            <div className="flex justify-between text-sm mt-6">
              <div>Total</div>
              <div className="font-semibold">{`₨${grandTotal}`}</div>
            </div>

            <button
              className="uppercase cursor-pointer py-2 w-full bg-black text-white mt-5 font-semibold"
              onClick={handleNaviateToCheckout}
            >
              Proceed to Checkout
              {loading && (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                </div>
              )}
            </button>

            {/* Coupon */}
            <div className="mt-6">
              <div className="text-sm font-semibold mb-2 text-black">
                Coupon
              </div>
              <hr className="border-t-2 border-gray-300 mb-4" />
              <input
                type="text"
                placeholder="Coupon code"
                className="w-full py-2 px-3 border border-gray-400 shadow-sm outline-none"
              />
              <p className="text-red-500 text-sm">{errorMessage}</p>
              <button
                className="uppercase cursor-pointer py-2 w-full bg-[#5fa800] text-white mt-4 font-semibold"
                onClick={() => setErrorMessage("Invalid Coupon Code")}
              >
                Apply Coupon
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full text-center text-xl font-semibold flex flex-col justify-center items-center h-full">
          <p>
            <FaShoppingCart className="text-5xl mb-4 text-gray-600" />
          </p>
          <p className="text-gray-600">No items in your Cart yet.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
