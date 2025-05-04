"use client";
import React, { useState } from "react";
import axios from "axios";

const Payment = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const URL = process.env.NEXT_PUBLIC_SERVER_URL;
    const response = await axios.post(`${URL}/api/v1/payment/create-payment`, {
      amount: 1000,
      phoneNumber,
      orderId: "ORDER1234",
    });

    const { paymentUrl, data } = response.data;

    // Create form and auto-submit it
    const form = document.createElement("form");
    form.method = "POST";
    form.action = paymentUrl;

    Object.entries(data).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="mt-[150px] text-black bg-white">
      <div>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter JazzCash Phone Number"
        />
        <button onClick={handlePayment} disabled={loading}>
          {loading ? "Processing..." : "Pay with JazzCash"}
        </button>
      </div>
    </div>
  );
};

export default Payment;
