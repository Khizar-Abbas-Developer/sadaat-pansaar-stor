"use client";

import React, { useState } from "react";
import Image from "next/image";
import CategoryCards from "@/components/Home/CategoryCards";
import CategoryCard from "@/components/product-category/CategoryCard";

const mockProducts = [
  {
    id: 1,
    title: "Raw Cashews (250gm Pack)",
    image: "/cashew1.jpg",
    price: 1000,
    discount: 20,
  },
  {
    id: 2,
    title: "Kaju Nuts Cashew (250gm Pack)",
    image: "/cashew2.jpg",
    price: 1200,
  },
  {
    id: 3,
    title: "Roasted Kaju (250gm Pack)",
    image: "/cashew3.jpg",
    price: 1100,
  },
  {
    id: 4,
    title: "Roasted Salted Cashews",
    image: "/cashew4.jpg",
    price: 1300,
  },
  {
    id: 5,
    title: "Roasted Cashew (250gm Pack)",
    image: "/cashew5.jpg",
    price: 1100,
    discount: 30,
  },
];

const sortOptions = [
  "Sort by popularity",
  "Sort by average rating",
  "Sort by latest",
  "Sort by price: low to high",
  "Sort by price: high to low",
];

const ProductCategory = () => {
  const [selectedSort, setSelectedSort] = useState(sortOptions[4]);
  const [priceRange, setPriceRange] = useState([950, 4400]);

  const handleSortChange = (e) => setSelectedSort(e.target.value);

  return (
    <>
      <div className="px-4 md:px-10 py-6 flex flex-col lg:flex-row gap-8 mt-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white p-4 shadow rounded-md space-y-6">
          <div>
            <h3 className="font-semibold mb-2">SELECT PRICE</h3>
            <input
              type="range"
              min="950"
              max="4400"
              className="w-full"
              onChange={(e) => setPriceRange([950, e.target.value])}
            />
            <p className="text-sm mt-1">
              Price: Rs{priceRange[0]} — Rs{priceRange[1]}
            </p>
            <button className="mt-2 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700">
              FILTER
            </button>
          </div>

          <div>{/* <h3 className="font-semibold mb-2">PRODUCTS</h3> */}</div>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
            <h2 className="font-semibold">
              Showing all {mockProducts.length} results
            </h2>
            <select
              value={selectedSort}
              onChange={handleSortChange}
              className="border px-3 py-2 rounded"
            >
              {sortOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="">
            <CategoryCard
              array={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              heading="Cashew"
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductCategory;
