"use client";
import React from "react";
import { useState } from "react";

const NumberOfProducts = () => {
  const [count, setCount] = useState(1);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count <= 1) {
      setCount(1);
      return;
    }
    setCount(count - 1);
  };
  return (
    <>
      <div className="flex items-center border border-white rounded overflow-hidden">
        <button
          className="bg-white text-black w-8 h-8 text-lg font-bold"
          onClick={handleDecrease}
        >
          -
        </button>
        <div className="px-4 bg-white text-black">{count}</div>
        <button
          className="bg-white text-black w-8 h-8 text-lg font-bold"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
    </>
  );
};

export default NumberOfProducts;
