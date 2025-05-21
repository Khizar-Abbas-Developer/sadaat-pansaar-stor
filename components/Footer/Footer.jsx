"use client";
import React, { useEffect } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { IoIosPaperPlane } from "react-icons/io";
import firstImage from "@/public/assets/Footer/Google-Play.webp";
import secondImage from "@/public/assets/Footer/App-Store.webp";
import thirdImage from "@/public/assets/Footer/footer1.webp";
import Image from "next/image";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import { categoryCirclesList } from "@/public/assets/rounded-categories/roundedCategories";
import Link from "next/link";

const Footer = () => {
  const [loading, setLoading] = React.useState(true);
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <HashLoader color="#5fa800" />
        </div>
      ) : (
        <div>
          {/* Newsletter Section */}
          <div className="bg-[#420808] text-white py-8 px-4 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 ml-[15]">
              <FaEnvelopeOpenText className="w-10 h-10" />
              <div>
                <p className="text-lg font-bold">
                  Join Our Newsletter, Get 10% Off
                </p>
                <p className="text-sm">
                  Get all latest information on events sales offers and
                  promotions
                </p>
              </div>
            </div>
            {/* Subscription form */}
            <form className="flex w-full max-w-xl rounded-full overflow-hidden border bg-white h-[45px]">
              <input
                type="text"
                placeholder="NEWSLETTER SUBSCRIPTION"
                className="flex-grow px-4 text-gray-700 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white p-3 flex items-center justify-center"
              >
                <IoIosPaperPlane className="w-6 h-6 text-black" />
              </button>
            </form>
          </div>
          {/* Footer Section */}
          <footer className="bg-[#2C2C2C] text-white pt-12 px-6 pb-8">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
              {/* Left Column */}
              <div className="flex-1 min-w-[250px] space-y-4">
                <h3 className="text-xl font-semibold mb-2">
                  Sadaat Pansaar Store
                </h3>
                <p className="font-semibold">
                  Sadaat Pansaar Store Are Fresh, Tasty & Best Quality To
                  Deliver All Over Pakistan. Our Dry Fruits Are Highly Selected
                  By QC Staff.
                </p>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-white text-green-600 rounded-full mt-1">
                    <MdLocationOn className="text-xl" />
                  </div>
                  <p>
                    Main Bagrian chowk <br />
                    azmat road, house # 1D2-1186 <br />
                    Green Town, Lahore
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-white text-green-600 rounded-full mt-1">
                    <MdOutlineMailOutline className="text-xl" />
                  </div>
                  <p className="flex items-center mt-2">
                    tirmizishah23@gmail.com
                  </p>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-white text-green-600 rounded-full mt-1">
                    <MdPhone className="text-xl" />
                  </div>
                  <p className="flex items-center mt-2">+92 3289428803</p>
                </div>
              </div>
              {/* Information Links */}
              <div className="flex-1 min-w-[150px] space-y-2">
                <h4 className="text-lg font-semibold mb-2">Information</h4>
                {[
                  "About Us",
                  "Delivery Information",
                  "Privacy & Policy",
                  "Terms & Conditions",
                  "Refund",
                  "Blogs",
                  "FAQs",
                ].map((item, i) => (
                  <a href="#" key={i} className="block hover:underline">
                    {item}
                  </a>
                ))}
              </div>
              {/* Specials Category */}
              <div className="flex-1 min-w-[150px] space-y-2">
                <h4 className="text-lg font-semibold mb-2">
                  Specials Category
                </h4>
                {categoryCirclesList.slice(0, 8).map((item) => (
                  <Link
                    href={`/product-category/${item.category}`}
                    key={item.id}
                    className="block hover:underline"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              {/* Social & App */}
              <div className="flex-1 min-w-[200px]">
                <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                <div className="flex gap-4 mb-4">
                  <a href="#">
                    <FaInstagram className="text-2xl bg-[#709B3F] p-1 rounded text-white" />
                  </a>
                  <a href="#">
                    <MdOutlineMailOutline className="text-2xl bg-[#709B3F] p-1 rounded text-white" />
                  </a>
                  <a href="#">
                    <FaWhatsapp className="text-2xl  bg-[#709B3F] p-1 rounded text-white" />
                  </a>
                </div>
                <p className="font-medium mb-2">Courier Partners</p>
                <div className="flex gap-2 mb-4">
                  <Image
                    src={thirdImage}
                    width={150}
                    height={150}
                    alt="Google Play"
                    className="object-cover"
                  />{" "}
                </div>
                <h4 className="text-lg font-semibold mb-2">Download App</h4>
                <div className="space-y-2">
                  <Image
                    src={secondImage}
                    width={100}
                    height={100}
                    alt="Google Play"
                    className="object-cover rounded-md"
                  />
                  <Image
                    src={firstImage}
                    width={100}
                    height={100}
                    alt="Google Play"
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
            {/* Footer Bottom */}
            <div className="text-center mt-10 border-t border-gray-700 pt-4">
              <p className="text-sm text-gray-300">
                &copy; 2025 Sadaat Pansaar Store. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};
export default Footer;
