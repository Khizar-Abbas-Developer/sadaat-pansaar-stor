"use client";
import React, { useState } from "react";
import axios from "axios";

const Payment = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const URL = process.env.NEXT_PUBLIC_SERVER_URL;
    const response = await axios.post(`${URL}/api/v1/payment/create-payment`, {
      amount: 1000,
      customerEmail: "test@example.com",
      orderId: "ORDER1234",
    });
    console.log(response.data);
    setLoading(false);
  };
  return (
    <div className="mt-[150px] text-black bg-white">
      <div>
        <button onClick={handlePayment} disabled={loading}>
          {loading ? "Processing..." : "Pay with JazzCash"}
        </button>
      </div>
    </div>
  );
};

export default Payment;
