"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProductFromCart,
  setCartStatus,
} from "@/redux/products/productSlice";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

import { IoClose } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

const CartSidebar = () => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const cartProducts = useSelector((state) => state.product.cartProducts);
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.product.cartStatus);

  const handleCloseCartSidebar = () => {
    dispatch(setCartStatus(false));
  };

  const handleOpenCartSidebar = () => {
    dispatch(setCartStatus(true));
  };

  const cartTotal = cartProducts.reduce((acc, product) => {
    const quantity = Number(product?.numberOfItems) || 0;
    const price = Number(product?.selectedPrice) || 0;
    return acc + quantity * price;
  }, 0);

  const handleRemoveProduct = (cartId) => {
    dispatch(removeProductFromCart(cartId));
  };

  const navigateToCart = () => {
    setLoading(true);
    dispatch(setCartStatus(false));
    router.push("/cart");
    setLoading(false);
  };
  const navigateToCheckout = () => {
    dispatch(setCartStatus(false));
    router.push("/checkout");
  };
  return (
    <>
      {/* Toggle Sidebar (can be removed if unused) */}
      <button
        onClick={handleOpenCartSidebar}
        className="cursor-pointer z-50 fixed top-4 right-4 md:right-6"
      ></button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-40 z-40"
          onClick={handleCloseCartSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-87 max-w-full bg-white text-black z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleCloseCartSidebar}
          className="absolute top-4 right-6 text-3xl cursor-pointer z-50"
        >
          <IoClose />
        </button>

        {/* Content Container */}
        <div className="flex flex-col justify-between h-full pt-16 pb-4 px-6">
          {/* Top Header */}
          <div className="">
            <h1 className="text-center text-xl text-gray-400">CART</h1>
            <hr className="text-gray-400 w-[10%] my-2 mx-auto h-1" />
          </div>

          {/* Scrollable Product List */}
          <div className="flex-1 overflow-y-auto pr-2 mt-4">
            {cartProducts.length > 0 ? (
              cartProducts.map((product, index) => (
                <div
                  className="flex items-center gap-2 my-2"
                  key={product.cartId || index}
                >
                  <div>
                    <Image
                      src={product?.image || ""}
                      alt={product?.productName || "Product image"}
                      width={90}
                      height={90}
                      className="w-[90px] h-[90px] object-cover rounded"
                    />
                  </div>
                  <div className="">
                    <p className="text-[16px] font-normal">
                      {product?.productName} - {product?.selectedVariant}
                    </p>
                    <p>
                      {product?.numberOfItems} × Rs:{product?.selectedPrice}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div
                      className="cursor-pointer text-gray-700 hover:text-red-600 border border-black p-1 rounded-full"
                      onClick={() => handleRemoveProduct(product.cartId)}
                    >
                      <ImCross size={9} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col gap-4 items-center justify-center h-full">
                <div className="">
                  <FaShoppingCart size={40} className="text-gray-400" />
                </div>
                <p className="text-gray-400 text-center">Your cart is empty.</p>
              </div>
            )}
          </div>

          {/* Bottom Section */}
          <div className="mt-4 border-t border-gray-300 pt-4">
            <div className="flex justify-between w-full">
              <p className="font-semibold text-gray-600">Subtotal</p>
              <p>
                <span className="font-semibold text-lg">Rs: {cartTotal}</span>
              </p>
            </div>
            <hr className="text-gray-200 w-full my-2" />
            <button
              onClick={navigateToCart}
              className="uppercase cursor-pointer bg-[#5fa800] text-white font-semibold w-full py-2"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <ClipLoader />
                  View Cart
                </div>
              ) : (
                <div className="">View Cart</div>
              )}
            </button>
            <button
              className="uppercase cursor-pointer bg-black text-white font-semibold w-full py-2 mt-2"
              onClick={navigateToCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
