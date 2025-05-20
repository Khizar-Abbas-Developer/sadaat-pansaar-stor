"use client";
import React, { useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "@/components/Card/Card";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

const CategoryFirst = ({
  positionBeginning,
  heading,
  categorySectionImage,
  number,
  link,
}) => {
  const [loading, setLoading] = React.useState(true);
  const products = useSelector((state) => state.product.products);
  const firstCategoryArray = (products || [])
    .filter((item) => item.category === "dry-fruits")
    .slice(0, 4);
  const secondCategoryArray = (products || [])
    .filter((item) => item.category === "murabba")
    .slice(0, 4);

  const thirdCategoryArray = (products || [])
    .filter((item) => item.category === "seeds")
    .slice(0, 4);

  useEffect(() => {
    if (firstCategoryArray.length > 0) {
      setLoading(false);
    }
  }, [products]);
  return (
    <div className="w-full py-[16px] text-black">
      {/* Header */}
      <div className="flex justify-between items-center text-black h-auto w-full mx-[10px] my-[25px]">
        <div className="border-b-[0.5px] border-gray-300 w-full flex justify-between items-center">
          <div className="border-b-3 border-[#5FA800]">
            <p className="text-md md:text-xl lg:text-lg uppercase">{heading}</p>
          </div>
          <Link
            href={link}
            className="border-b-3 flex justify-center items-center border-[#5FA800] cursor-pointer mr-[10px]"
          >
            <p className="text-sm md:text-xl lg:text-lg text-[#5FA800]">
              View More
            </p>
            <span>
              <MdOutlineKeyboardArrowRight className="text-[#5FA800] text-xl" />
            </span>
          </Link>
        </div>
      </div>

      {/* Main content with image and cards */}
      <div data-flex-layout className="category-flex-layout">
        {/* Mobile First: Image */}
        <Link href={link} className="block md:hidden self-center flex-shrink-0">
          <Image
            src={categorySectionImage}
            alt="category"
            width={300}
            height={300}
            quality={100}
            className="object-cover rounded-lg max-w-full h-auto"
          />
        </Link>

        {/* Mobile First: Cards */}
        <div className="block md:hidden justify-center flex-1 flex-wrap flex gap-[12px]">
          {number === 1 && <Card arrayData={firstCategoryArray} />}
          {number === 2 && <Card arrayData={secondCategoryArray} />}
          {number === 3 && <Card arrayData={thirdCategoryArray} />}
        </div>

        {/* Desktop: Conditional layout based on positionBeginning */}
        <div className="hidden md:flex w-full justify-between gap-[16px]">
          {positionBeginning ? (
            <>
              {/* Desktop First: Image */}
              <Link href={link} className="self-center flex-shrink-0 lg:mt-12">
                <Image
                  src={categorySectionImage}
                  alt="category"
                  width={300}
                  height={300}
                  quality={100}
                  className="object-cover rounded-lg max-w-full h-auto"
                />
              </Link>

              {/* Desktop Cards */}
              {number === 2 && (
                <div className="justify-center flex-1 flex-wrap flex gap-[12px]">
                  <Card arrayData={secondCategoryArray} />
                </div>
              )}
            </>
          ) : (
            <>
              {/* Desktop Cards */}
              {number === 1 && (
                <div className="justify-center flex-1 flex-wrap flex gap-[12px]">
                  <Card arrayData={firstCategoryArray} />
                </div>
              )}
              {number === 3 && (
                <div className="justify-center flex-1 flex-wrap flex gap-[12px]">
                  <Card arrayData={thirdCategoryArray} />
                </div>
              )}

              {/* Desktop Image */}
              <Link href={link} className="self-center flex-shrink-0 lg:mt-16">
                <Image
                  src={categorySectionImage}
                  alt="category"
                  width={300}
                  height={300}
                  quality={100}
                  className="object-cover rounded-lg max-w-full h-auto"
                />
              </Link>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .category-flex-layout {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 16px;
        }

        @media (min-width: 1024px) {
          .category-flex-layout {
            flex-direction: column; /* Maintains layout, real logic now in inner div */
          }
        }
      `}</style>
    </div>
  );
};

export default CategoryFirst;
