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
            <div className="flex justify-between border-b pb-1">
              <span className="font-semibold text-gray-700">WEIGHT</span>
              <span className="text-gray-600">0.25 kg</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-semibold text-gray-700">WEIGHT</span>
              <span className="text-gray-600">250 gm, 500gm, 1 Kg</span>
            </div>
          </div>
        );
      case "SHORT DESCRIPTION":
        return (
          <p className="mt-4 text-gray-700">Short description content here.</p>
        );
      case "DESCRIPTION":
        return (
          <p className="mt-4 text-gray-700">
            Full product description content here.
          </p>
        );
      case "REVIEWS (0)":
        return <p className="mt-4 text-gray-700">No reviews yet.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex space-x-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-semibold text-sm transition ${
              activeTab === tab
                ? "bg-green-500 text-white rounded-t-md"
                : "text-black hover:text-green-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default ProductTabs;
