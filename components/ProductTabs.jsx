"use client";
import React, { useState } from "react";

const ProductTabs = () => {
  const tabs = [
    "ADDITIONAL INFORMATION",
    "SHORT DESCRIPTION",
    "DESCRIPTION",
    "REVIEWS (0)",
  ];
  const [activeTab, setActiveTab] = useState("ADDITIONAL INFORMATION");

  const renderContent = () => {
    switch (activeTab) {
      case "ADDITIONAL INFORMATION":
        return (
          <div className="mt-4 space-y-2">
            <div className="flex justify-between border-b pb-1 text-sm sm:text-base">
              <span className="font-semibold text-gray-700">WEIGHT</span>
              <span className="text-gray-600">0.25 kg</span>
            </div>
            <div className="flex justify-between border-b pb-1 text-sm sm:text-base">
              <span className="font-semibold text-gray-700">WEIGHT</span>
              <span className="text-gray-600">250 gm, 500gm, 1 Kg</span>
            </div>
          </div>
        );
      case "SHORT DESCRIPTION":
        return <p className="mt-4 text-gray-700 text-sm sm:text-base"></p>;
      case "DESCRIPTION":
        return (
          <div className="h-auto">
            <p className="mt-4 text-[#555555] sm:text-base lg:text-2xl font-bold">
              Brazil Nuts Without Shell 250g Pack Available at Khan Dry Fruit
            </p>
            <p className="mt-4 text-gray-700 text-sm sm:text-base">
              Brazil nuts, known for their rich, buttery flavour and high
              nutritional value, are a sought-after snack worldwide. At Khan Dry
              Fruit, we are proud to offer premium{" "}
              <span className="font-semibold text-black">
                Brazil nuts without shell
              </span>{" "}
              in a convenient{" "}
              <span className="font-semibold text-black">250-pack</span>. Our
              nuts are sourced directly from the lush Amazon rainforest,
              ensuring the freshest and finest quality available. In this
              article, we will explore the many benefits of Brazil nuts, how
              they are sourced, their health advantages, and why the 250g pack
              from{" "}
              <span className="font-semibold text-black">Khan Dry Fruit</span>{" "}
              is the ideal choice for any health-conscious consumer.
            </p>
          </div>
        );
      case "REVIEWS (0)":
        return (
          <p className="mt-4 text-gray-700 text-sm sm:text-base">
            No reviews yet.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 w-full mt-16">
      {/* Tabs Container */}
      <div className="flex flex-wrap sm:flex-nowrap border-b gap-2 sm:gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 sm:px-4 py-2 font-semibold text-sm transition whitespace-nowrap ${
              activeTab === tab
                ? "bg-green-500 text-white rounded-t-md"
                : "text-black hover:text-green-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default ProductTabs;
