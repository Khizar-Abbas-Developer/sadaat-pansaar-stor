import Image from "next/image";
import React from "react";
import shopImage from "@/public/assets/shopImage.webp";

const Shop = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-4 lg:p-10 bg-white rounded-xl shadow-md">
        {/* Store Image Section */}
        <div className="w-full lg:w-9/8">
          <Image
            src={shopImage} // Replace with actual path in public folder or static file
            alt="Khan Dry Fruit Store"
            width={800}
            height={500}
            quality={100}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800">
            Hey, We Aren’t That Far!
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our journey has led us to broaden our network. <br />
            Now, you can easily spot us at your nearest location and get your
            healthy eating plans sorted!
          </p>
          <div>
            <h3 className="text-xl font-bold mb-2 text-black">Find us Here</h3>
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow">
              OUR LOCATION
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-100 p-4 rounded-lg text-center shadow">
              <p className="text-2xl font-bold text-green-700">3+</p>
              <p className="text-gray-700">Stores</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center shadow">
              <p className="text-2xl font-bold text-green-700">5000+</p>
              <p className="text-gray-700">Order Delivered</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center shadow">
              <p className="text-2xl font-bold text-green-700">4500+</p>
              <p className="text-gray-700">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
