"use client";
import {
  resetProductState,
  setCartSummary,
  setShippingMethod,
} from "@/redux/products/productSlice";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { HashLoader } from "react-spinners";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState("cod");
  const [openPaymentAccordion, setOpenPaymentAccordion] = useState(true);
  //
  const dispatch = useDispatch();
  const favouriteProducts = useSelector((state) => state.product.cartProducts);
  const subtotalWithoutDeliveryCharges = useSelector(
    (state) => state.product.subtotal
  );
  const [errors, setErrors] = useState({});
  const grandGreatTotal = useSelector((state) => state.product.grandTotal);
  const shippingOption = useSelector((state) => state.product.shippingMethod);
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
        paymentMethod: selectedPayment,
      })
    );
  };
  const [order, setOrder] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    orderNotes: "",
    paymentMethod: selectedPayment,
    shippingMethod: shippingOption,
    subtotal: subtotalWithoutDeliveryCharges,
    shippingCost: shippingOption === "express" ? 500 : 200,
    total: grandGreatTotal,
    products: favouriteProducts,
    orderDate: new Date().toISOString(),
    orderStatus: "pending",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setOrder((prev) => ({ ...prev, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handlePlaceOrder = async () => {
    const newErrors = {};
    if (!order.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!order.phone.trim()) newErrors.phone = "Phone is required";
    if (!order.city.trim()) newErrors.city = "City is required";
    if (!order.address.trim()) newErrors.address = "Address is required";
    if (!order.email.trim()) newErrors.email = "Email is required";
    // Email is optional, so we skip it

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);
      const URL = process.env.NEXT_PUBLIC_SERVER_URL;
      const response = await axios.post(
        `${URL}/api/v1/order/place-order`,
        order
      );
      console.log(response.data.order);
      dispatch(
        setCartSummary({
          subtotal: response.data.order.subtotal,
          shippingMethod: response.data.order.shippingMethod,
          grandTotal: response.data.order.total,
          paymentMethod: response.data.order.paymentMethod,
        })
      );
      if (response.data.order.paymentMethod === "cod") {
        dispatch(resetProductState());
        router.push(`/order-completed/${response.data.order._id}`);
      } else if (selectedPayment !== "cod") {
        router.push(`/payments/${response.data.order._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setOrder((prev) => ({
      ...prev,
      paymentMethod: selectedPayment,
      shippingMethod: shippingOption,
      subtotal: subtotalWithoutDeliveryCharges,
      shippingCost: shippingOption === "express" ? 500 : 200,
      total: grandGreatTotal,
      products: favouriteProducts,
      orderDate: new Date().toISOString(),
    }));
  }, [
    selectedPayment,
    shippingOption,
    subtotalWithoutDeliveryCharges,
    grandGreatTotal,
    favouriteProducts,
  ]);

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
              <h1 className="text-lg md:text-xl font-semibold mb-4 text-black">
                Billing & Shipping
              </h1>
              <div className="flex flex-col gap-4">
                {/* Input Field */}
                {[
                  {
                    label: "Full Name: مکمل نام *",
                    name: "fullName",
                    id: "fullName",
                    type: "text",
                    value: order.fullName,
                  },
                  {
                    label: "Phone: فون نمبر *",
                    name: "phone",
                    id: "phone",
                    type: "number",
                    value: order.phone,
                  },
                  {
                    label: "Town / City: شہر *",
                    name: "city",
                    id: "city",
                    type: "text",
                    value: order.city,
                  },
                  {
                    label: "Address: مکمل پتہ *",
                    placeholder: "House number and street name",
                    name: "address",
                    id: "address",
                    type: "text",
                    value: order.address,
                  },
                  {
                    label: "Email address *",
                    name: "email",
                    id: "email",
                    type: "email",
                    value: order.email,
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
                <div className="flex items-center gap-2 cursor-pointer">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm font-medium text-black">
                      Sign me up to receive email updates and news (optional)
                    </span>
                  </label>
                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm text-black">
                      Create an account?
                    </span>
                  </label>
                </div>

                {/* Order Notes */}
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold text-black">
                    Order notes (optional)
                  </p>
                  <textarea className="w-full min-h-[120px] border border-gray-300 text-black p-2 rounded outline-none text-sm"></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Order Summary */}
          <div className="w-full lg:w-[35%] border border-[#5fa800] rounded p-4">
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
            <div className="mt-6 text-sm">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpenPaymentAccordion((prev) => !prev)}
              >
                <p className="font-semibold text-black">
                  Select Payment Method
                </p>
                <span className="text-xs text-black">
                  {openPaymentAccordion ? "−" : "+"}
                </span>
              </div>

              {/* Accordion Body with animation */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openPaymentAccordion
                    ? "max-h-96 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col gap-3 text-black">
                  {["cod"].map((method) => (
                    <label
                      key={method}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method}
                        checked={selectedPayment === method}
                        onChange={() => setSelectedPayment(method)}
                        className="accent-[#5fa800] w-4 h-4"
                      />
                      <span className="text-sm">
                        {method === "cod"
                          ? "Cash on Delivery (COD)"
                          : method === "Jazz Cash"
                          ? "Jazz Cash"
                          : "Bank Transfer (via account)"}
                      </span>
                    </label>
                  ))}
                </div>

                {/* Payment Details Transition Block */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    selectedPayment ? "mt-4 opacity-100" : "opacity-0"
                  }`}
                >
                  {selectedPayment === "bank" && (
                    <div className="border border-gray-300 p-4 rounded bg-gray-50 text-sm text-gray-700">
                      <p className="font-semibold text-base mb-2 text-[#5fa800]">
                        Bank Transfer Details:
                      </p>
                      <ul className="space-y-1">
                        <li>
                          <strong>KHAN DRY FRUIT</strong>
                        </li>
                        <li>
                          <strong>Bank Name:</strong> United Bank Limited (UBL)
                        </li>
                        <li>
                          <strong>Account Title:</strong> Khizar Abbas
                        </li>
                        <li>
                          <strong>Account Number:</strong> 1234567890
                        </li>
                        <li>
                          <strong>IBAN:</strong> PK00ABPA1234567890123456
                        </li>
                      </ul>
                      <p className="mt-3 text-xs text-gray-600">
                        Please send us the transaction receipt after payment to
                        confirm your order.
                      </p>
                    </div>
                  )}

                  {selectedPayment === "cod" && (
                    <div className="border border-gray-300 p-4 rounded bg-gray-50 text-sm text-gray-700">
                      <p className="font-semibold text-base mb-1 text-[#5fa800]">
                        Cash on Delivery:
                      </p>
                      <p>
                        You can pay in cash when the order is delivered to your
                        doorstep. Make sure to have the exact amount ready.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* //Payment methods accordion */}

            <button
              className="uppercase py-3 cursor-pointer w-full mt-6 bg-[#5fa800] text-white font-semibold rounded shadow-sm"
              onClick={handlePlaceOrder}
            >
              {selectedPayment === "cod" ? "Place Order" : "Proceed to Payment"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
