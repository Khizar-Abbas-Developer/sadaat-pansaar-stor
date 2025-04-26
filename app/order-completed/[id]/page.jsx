"use client";
import {
  setCartSummary,
  setShippingMethod,
} from "@/redux/products/productSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import successGiftImage from "@/public/assets/success.gif";
import { useParams } from "next/navigation";
import axios from "axios";
import { HashLoader } from "react-spinners";

const Checkout = () => {
  const [loading, setLoading] = useState(true);
  const [fetchedOrderDetails, setFetchedOrderDetails] = useState({});
  const params = useParams();
  const orderId = params.id;
  const fetchOrderById = async () => {
    const URL = process.env.NEXT_PUBLIC_SERVER_URL;
    try {
      const order = await axios.get(
        `${URL}/api/v1/order/getOrderById/${orderId}`
      );
      setFetchedOrderDetails(order.data.order);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchOrderById();
  }, [params.id]);
  const formattedOrderDate = new Date(
    fetchedOrderDetails?.orderDate
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <HashLoader color="#5fa800" />
        </div>
      ) : (
        <div className="min-h-screen mt-28 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-10 flex flex-col-reverse lg:flex-row gap-10">
          {/* Left - Order Details */}
          <div className="w-full lg:w-2/3">
            <p className="text-sm md:text-base text-[#5fa800]">
              {fetchedOrderDetails?.paymentMethod === "cod"
                ? "Cash on Delivery"
                : "Online Payment"}
            </p>
            <h1 className="text-lg md:text-xl font-semibold mb-4">
              Order Details
            </h1>

            <div className="flex justify-between items-center mb-3 text-sm md:text-base font-medium">
              <p>Product</p>
              <p>Total</p>
            </div>
            <hr className="text-gray-300 mb-4" />

            {fetchedOrderDetails?.products.map((product) => (
              <div key={product.cartId}>
                <div className="flex justify-start items-center mb-2">
                  <p className="text-sm md:text-base">{`${product.productName} ×`}</p>
                  <span className="font-semibold text-sm">
                    {product.numberOfItems}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs md:text-sm">
                  <div>
                    <p className="font-semibold">Weight:</p>
                    <p>{product?.selectedVariant}</p>
                  </div>
                  <p className="font-semibold">{`Rs${
                    product.selectedPrice * product.numberOfItems
                  }`}</p>
                </div>
                <hr className="text-gray-300 my-4" />
              </div>
            ))}

            {/* Totals */}
            <div className="flex flex-col gap-3 text-sm md:text-base">
              <div className="flex justify-between">
                <p className="font-semibold">Subtotal</p>
                <p className="font-semibold">{`Rs${fetchedOrderDetails?.subtotal}`}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Shipping</p>
                {fetchedOrderDetails?.shippingMethod === "express" ? (
                  <div>
                    <span className="font-semibold">Rs500</span>{" "}
                    <span className="text-sm">via 24-Hour Express</span>
                  </div>
                ) : (
                  <div>
                    <span className="font-semibold">Rs200</span>{" "}
                    <span className="text-sm">via Standard Delivery</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between">
                <p className="font-semibold">Payment Method</p>
                <p>
                  {fetchedOrderDetails?.paymentMethod === "cod"
                    ? "COD (Cash on Delivery)"
                    : "Bank Transfer"}
                </p>
              </div>
              <div className="flex justify-between text-base font-semibold">
                <p>Total</p>
                <p>{`Rs${fetchedOrderDetails?.total}`}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="uppercase w-full sm:w-auto px-4 py-2 text-sm font-semibold bg-[#5fa800] text-white">
                Print Invoice
              </button>
              <button className="uppercase w-full sm:w-auto px-4 py-2 text-sm font-semibold bg-[#5fa800] text-white">
                Download Invoice
              </button>
            </div>

            {/* Billing Info */}
            <div className="my-10">
              <h2 className="text-lg font-semibold">Billing Address</h2>
              <div className="mt-2 flex flex-col gap-1 text-sm text-gray-600">
                <p>{fetchedOrderDetails?.fullName || ""}</p>
                <p>{fetchedOrderDetails?.address || ""}</p>
                <p>{fetchedOrderDetails?.city || ""}</p>
                <p>{fetchedOrderDetails?.phone || ""}</p>
                <p>{fetchedOrderDetails?.email || ""}</p>
              </div>
            </div>
          </div>

          {/* Right - Order Summary Box */}
          <div className="w-full lg:w-1/3 rounded-lg shadow-xl p-6 bg-white">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-green-700 text-base md:text-lg font-semibold">
                Thanks, Your Order has been Processed.
              </p>
              <Image
                src={successGiftImage}
                alt="Order Success"
                width={220}
                height={220}
                className="object-contain"
              />
            </div>

            <ul className="list-disc pl-5 mt-6 space-y-2 text-sm md:text-base">
              <li className="border-b border-gray-200 py-2">
                Order Number: <span className="font-semibold">18084</span>
              </li>
              <li className="border-b border-gray-200 py-2">
                Date:{" "}
                <span className="font-semibold">{formattedOrderDate}</span>
              </li>
              <li className="border-b border-gray-200 py-2">
                Total:{" "}
                <span className="font-semibold">{`Rs${fetchedOrderDetails?.total}`}</span>
              </li>
              <li className="py-2">
                Payment Method:{" "}
                <span className="font-semibold">
                  {fetchedOrderDetails?.paymentMethod === "cod"
                    ? "Cod (Cash on Delivery)"
                    : "Bank Transfer"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
