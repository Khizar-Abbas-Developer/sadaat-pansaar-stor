"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CategoryCard from "@/components/product-category/CategoryCard";
import PriceRangeSlider, {
  SidebarFilter,
} from "@/components/DoubleRangeSlider";
import { IoOptionsOutline } from "react-icons/io5";

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
  const params = useParams();
  const [category, setCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState(sortOptions[4]);
  const [priceRange, setPriceRange] = useState([950, 4400]);
  const [minimumPrice, setMinimumPrice] = useState(800);
  const [maximumPrice, setMaximumPrice] = useState(1400);
  useEffect(() => {
    if (params?.category) {
      setCategory(params.category);
    }
  }, [params]);

  const handleSortChange = (e) => setSelectedSort(e.target.value);
  const getPriceFilter = (price) => {
    const [min, max] = price;
    setMinimumPrice(min);
    setMaximumPrice(max);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-1/4 bg-white rounded-lg shadow-md p-4 space-y-6 hidden lg:block">
          <PriceRangeSlider
            getPriceFilter={getPriceFilter}
            heading="Products"
          />
        </aside>
        <main className="w-full lg:w-3/4 flex flex-col mt-10">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h2 className="text-gray-500 mb-2 sm:mb-0 md:ml-16 text-center mx-auto md:mx-0">
              <span className="font-normal text-xl">Home</span> <span>/</span>{" "}
              <span className="text-black font-semibold text-xl uppercase">
                Almonds
              </span>
            </h2>
            {/* //Filter Drawer */}
            <div className="drawer z-[9999]">
              <input
                id="my-drawerNew"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawerNew" className="flex justify-center">
                  <div className="flex items-center gap-2 my-4 cursor-pointer lg:hidden drawer-button">
                    <p>
                      <IoOptionsOutline className="text-2xl" />
                    </p>
                    <p className="uppercase text-lg font-medium">Filter</p>
                  </div>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawerNew"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                  <SidebarFilter
                    getPriceFilter={getPriceFilter}
                    heading="Products"
                  />
                </ul>
              </div>
            </div>
            {/* //Filter Drawer */}
            <select
              value={selectedSort}
              onChange={handleSortChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-auto"
            >
              {sortOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <CategoryCard
              array={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              heading="Cashew"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductCategory;
