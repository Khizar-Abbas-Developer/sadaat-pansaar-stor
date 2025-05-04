"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/lib";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const CheckoutPage = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;
  const calBackEndForResponse = async () => {
    try {
      const response = await axios.post(
        `${URL}/api/v1/payment/create-payment`,
        {
          amount: amount,
        }
      );
      setClientSecret(response.data.clientSecret);
      console.log(response.data.clientSecret);
    } catch (error) {
      console.error("Error fetching client secret:", error);
    }
  };
  useEffect(() => {
    calBackEndForResponse();
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            <ClipLoader />
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <div className="">
          <ClipLoader />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
          <PaymentElement />

          <button
            disabled={!clientSecret || loading}
            className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
          >
            {!loading ? `Pay $${amount}` : "Processing..."}
          </button>
        </form>
      )}
    </>
  );
};

export default CheckoutPage;
