"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CategoryCard from "@/components/product-category/CategoryCard";
import PriceRangeSlider, {
  SidebarFilter,
} from "@/components/DoubleRangeSlider";
import { IoOptionsOutline } from "react-icons/io5";
import axios from "axios";
import { HashLoader } from "react-spinners";
import { categoriesList } from "@/public/assets/assets";

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
  // "Sort by popularity",
  // "Sort by average rating",
  // "Sort by latest",
  "Sort by price: low to high",
  "Sort by price: high to low",
];

const ProductCategory = () => {
  const [loading, setLoading] = useState(true);
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;
  const params = useParams();
  const [productsToList, setProductsToList] = useState([]);
  const [productsToFilter, setrProductsToFilter] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState(sortOptions[4]);
  const [minimumPrice, setMinimumPrice] = useState(100);
  const [maximumPrice, setMaximumPrice] = useState(19000);
  useEffect(() => {
    if (params?.category) {
      setCategory(params.category);
    }
  }, [params]);

  const handleSortChange = (e) => {
    const selected = e.target.value;
    setSelectedSort(selected);

    let sortedProducts = [...productsToList]; // Clone current list

    switch (selected) {
      case "Sort by price: low to high":
        sortedProducts.sort((a, b) => a.productPrice - b.productPrice);
        break;

      case "Sort by price: high to low":
        sortedProducts.sort((a, b) => b.productPrice - a.productPrice);
        break;

      case "Sort by latest":
        sortedProducts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;

      case "Sort by average rating":
        sortedProducts.sort((a, b) => b.averageRating - a.averageRating);
        break;

      case "Sort by popularity":
        sortedProducts.sort((a, b) => b.popularity - a.popularity); // Assuming there's a `popularity` field
        break;

      default:
        break;
    }

    setProductsToList(sortedProducts);
  };
  const getPriceFilter = (price) => {
    setLoading(true); // Start loading when price filter is applied
    const [min, max] = price;

    // Update the minimum and maximum prices
    setMinimumPrice(min);
    setMaximumPrice(max);
    // console.log("Min Price:", min);
    // console.log("Max Price:", max);
    // console.log(productsToList);

    // Filter products by the selected price range
    const filtered = productsToFilter.filter((product) => {
      // console.log("Product Price:", product.productPrice);
      return product.productPrice >= min && product.productPrice <= max;
    });

    setProductsToList(filtered);

    // console.log("Min Price:", min);
    // console.log("Max Price:", max);
    setLoading(false); // Stop loading once filtering is done
  };

  const fetchProductsByCategory = async () => {
    try {
      const response = await axios.get(
        `${URL}/api/v1/product/get-products-by-category/${category}`
      );
      setProductsToList(response.data.products);
      setrProductsToFilter(response.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (category) {
      fetchProductsByCategory();
    }
  }, [category]);
  const currentCategoryName = categoriesList.find(
    (item) => item.category === category
  )?.title;

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <HashLoader color="#5fa800" />
        </div>
      ) : (
        <div className="w-full px-4 sm:px-6 md:px-10 py-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="w-full lg:w-1/4 bg-white rounded-lg shadow-md p-4 space-y-6 hidden lg:block">
              <PriceRangeSlider
                heading="Products"
                getPriceFilter={getPriceFilter}
                initialPriceRange={[minimumPrice, maximumPrice]}
              />
            </aside>
            <main className="w-full lg:w-3/4 flex flex-col mt-10">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h2 className="text-gray-500 mb-2 sm:mb-0 md:ml-16 text-center mx-auto md:mx-0">
                  <span className="font-normal text-xl">Home</span>{" "}
                  <span>/</span>{" "}
                  <span className="text-black font-semibold text-xl uppercase">
                    {currentCategoryName}
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
                    <label
                      htmlFor="my-drawerNew"
                      className="flex justify-center"
                    >
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
                        heading="Products"
                        getPriceFilter={getPriceFilter}
                        initialPriceRange={[minimumPrice, maximumPrice]}
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
              {category ? (
                <div className="w-full">
                  <CategoryCard array={productsToList} heading={category} />
                </div>
              ) : (
                <div className="">
                  <div className="">No Products Found for this Category</div>
                </div>
              )}
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCategory;
