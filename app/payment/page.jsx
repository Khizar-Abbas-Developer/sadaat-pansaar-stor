"use client";

import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "@/lib";
import { ClipLoader } from "react-spinners";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const PaymentPage = () => {
  const amount = 50;
  const [clientSecret, setClientSecret] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/payment/create-payment`,
          { amount }
        );
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error("Error creating PaymentIntent:", error);
      } finally {
        setLoading(false);
      }
    };

    createPaymentIntent();
  }, [amount]);

  if (loading || !clientSecret) {
    return (
      <div className="flex justify-center h-screen items-center">
        <ClipLoader />
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
        <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold mb-2">Sonny</h1>
            <h2 className="text-2xl">
              has requested <span className="font-bold">${amount}</span>
            </h2>
          </div>

          <Elements
            stripe={stripePromise}
            options={{
              clientSecret,
              appearance: { theme: "stripe" }, // Optional
            }}
          >
            <CheckoutPage amount={amount} />
          </Elements>
        </main>
      )}
    </>
  );
};

export default PaymentPage;
