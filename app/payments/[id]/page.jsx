"use client";
import {
  resetProductState,
  setCartSummary,
  setShippingMethod,
} from "@/redux/products/productSlice";
import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import jazzCashIcon from "@/public/assets/payments/jazz.png";

const DynamicPaymentPage = () => {
  const params = useParams();
  const { id } = params;
  const [loading, setLoading] = useState(false);
  //
  const dispatch = useDispatch();
  const favouriteProducts = useSelector((state) => state.product.cartProducts);
  const subtotalWithoutDeliveryCharges = useSelector(
    (state) => state.product.subtotal
  );
  const [errors, setErrors] = useState({});
  const grandGreatTotal = useSelector((state) => state.product.grandTotal);
  const shippingOption = useSelector((state) => state.product.shippingMethod);
  const paymentMethod = useSelector((state) => state.product.paymentMethod);
  //
  const updateShippingAndRecalculate = (method) => (dispatch, getState) => {
    dispatch(setShippingMethod(method));

    const { cartProducts } = getState().product;

    const subtotal = cartProducts.reduce(
      (acc, item) => acc + item.selectedPrice * item.numberOfItems,
      0
    );
    const shippingCost = method === "express" ? 500 : 200;
    const grandTotal = subtotal + shippingCost;

    dispatch(
      setCartSummary({
        subtotal,
        shippingMethod: method,
        grandTotal,
      })
    );
  };
  useEffect(() => {
    setPaymentDetails({
      phoneNumber: "",
      digitsOfCNIC: "",
      orderId: id,
      price: grandGreatTotal,
    });
  }, [grandGreatTotal]);
  const [paymentDetails, setPaymentDetails] = useState({
    phoneNumber: "",
    digitsOfCNIC: "",
    orderId: id,
    price: grandGreatTotal,
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const handlePayment = async () => {
    const URL = process.env.NEXT_PUBLIC_SERVER_URL;
    try {
      const response = await axios.post(
        `${URL}/api/v1/payment/create-payment`,
        {
          ...paymentDetails,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {loading ? (
        <div className="flex justify-center bg-white items-center h-screen ">
          <HashLoader color="#5fa800" />
        </div>
      ) : (
        <div className="min-h-screen mt-32 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-10 flex flex-col lg:flex-row gap-10 bg-white">
          {/* Left - Billing & Shipping */}
          <div className="w-full lg:w-[65%]">
            <div>
              <div className="flex justify-between items-center">
                <div className="mb-4">
                  <h1 className="text-lg md:text-xl font-semibold text-black">
                    Checkout
                  </h1>
                  <h3 className="text-black text-sm">Payment Details</h3>
                </div>
                <div className="">
                  {paymentMethod === "Jazz Cash" && (
                    <Image
                      src={jazzCashIcon}
                      alt="jazzCash"
                      width={110}
                      height={110}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {/* Input Field */}
                {[
                  {
                    label: "Phone Number: *",
                    name: "phoneNumber",
                    id: "phoneNumber",
                    type: "number",
                    value: paymentDetails.phoneNumber,
                    placeholder: "03001234567",
                  },
                  {
                    label: "Last 6 DIGITS of CNIC: *",
                    name: "digitsOfCNIC",
                    id: "digitsOfCNIC",
                    type: "number",
                    value: paymentDetails.digitsOfCNIC,
                    placeholder: "345678",
                  },
                ].map(
                  (
                    { label, placeholder = "", name, id, type, value },
                    index
                  ) => (
                    <div key={index} className="flex flex-col gap-1">
                      <p className="font-semibold text-sm text-black">
                        {label}
                      </p>
                      <input
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        id={id}
                        value={value}
                        onChange={handleOnChange}
                        className={`w-full border p-2 rounded outline-none text-black text-sm ${
                          errors[name] ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors[name] && (
                        <span className="text-red-500 text-xs">
                          {errors[name]}
                        </span>
                      )}
                    </div>
                  )
                )}
                {/* Checkboxes */}
                <button
                  className="uppercase py-3 cursor-pointer w-full lg:mx-auto lg:w-[50%] mt-6 bg-[#5fa800] text-white font-semibold rounded shadow-sm"
                  onClick={handlePayment}
                >
                  {`Pay ${grandGreatTotal} PKR`}
                </button>
              </div>
            </div>
          </div>

          {/* Right - Order Summary */}
          <div className="w-full lg:w-[35%] h-auto border border-[#5fa800] rounded p-4">
            <h2 className="text-lg font-bold text-gray-700 mb-3">Your Order</h2>

            {/* Product List */}
            <div className="flex justify-between font-semibold text-sm border-b pb-2 text-black">
              <p>Product</p>
              <p>Subtotal</p>
            </div>

            {favouriteProducts.map((product) => (
              <div
                key={product.cartId}
                className="flex flex-col sm:flex-row sm:justify-between gap-3 py-4 border-b"
              >
                <div className="flex gap-4 items-start">
                  <Image src={product.image} alt="" width={50} height={50} />
                  <div>
                    <p className="text-sm font-medium w-full lg:w-[80%] text-black">
                      {product.productName}
                    </p>
                    <div className="text-xs flex items-center gap-1 text-black">
                      <span>{product.selectedVariant}</span> ×{" "}
                      <span>{product.numberOfItems}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right font-semibold text-sm text-black">
                  Rs{product.selectedPrice * product.numberOfItems}
                </div>
              </div>
            ))}

            {/* Totals */}
            <div className="flex justify-between text-sm font-semibold mt-4 text-black">
              <p>Subtotal</p>
              <p>Rs{subtotalWithoutDeliveryCharges}</p>
            </div>

            {/* Shipping */}
            <div className="mt-4 text-sm">
              <p className="font-semibold mb-2 text-black">Shipping</p>
              <div className="flex flex-col gap-2">
                {["express", "standard"].map((method) => (
                  <label
                    key={method}
                    className="flex items-center gap-2 cursor-pointer text-sm"
                  >
                    <input
                      type="radio"
                      name="shipping"
                      value={method}
                      checked={shippingOption === method}
                      onChange={() =>
                        dispatch(updateShippingAndRecalculate(method))
                      }
                      className="accent-[#5fa800] w-4 h-4"
                    />
                    <span className="text-black">
                      {method === "express"
                        ? "24-Hour Express Delivery: ₨500"
                        : "Standard Shipping Charges: ₨200"}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-between text-sm font-semibold mt-4 text-black">
              <p>Total</p>
              <p>Rs{grandGreatTotal}</p>
            </div>

            {/* //Payment methods accordion */}
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicPaymentPage;
