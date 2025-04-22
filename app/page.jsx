"use client";
import Banner from "@/components/Home/Banner";
import CategoryCards from "@/components/Home/CategoryCards";
import NewArrivalCards from "@/components/Home/NewArrival";
import ServiceFeatures from "@/components/Home/ServiceFeatures";

import FirstLayout from "@/components/Home/FirstLayout";
import SecondLayout from "@/components/Home/SecondLayout";
import CategoriesList from "@/components/Home/CategoriesList";
import CategoryFirst from "@/components/Home/CategoryFirst";

//CategorySEctionsImages imported from public folder
import categorySection1 from "@/public/assets/categorySection1.webp";
import categorySection2 from "@/public/assets/categorySection2.webp";
import categorySection3 from "@/public/assets/categorySection3.webp";
import Feedback from "@/components/Home/Feedback";
import Shop from "@/components/Home/Shop";
import { fetchTwentyFourProducts } from "@/lib/products";
import { useDispatch } from "react-redux";
import { setProducts } from "@/redux/products/productSlice";
import React, { useEffect } from "react";
import { HashLoader } from "react-spinners";
import BestSellingProducts from "@/components/Home/BestSellingProducts";

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchTwentyFourProducts();
      if (Array.isArray(products)) {
        dispatch(setProducts(products));
      }
      setLoading(false);
    };
    getProducts();
  }, [dispatch]);
  return (
    <React.Fragment>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <HashLoader color="#5fa800" />
        </div>
      ) : (
        <>
          <div className="bg-white min-h-screen px-[10px] sm:px-[20px] md:px-[40px] lg:px-[80px] xl:px-[130px] 2xl:px-[130px]">
            <div className="mt-[105px]">
              <Banner />
            </div>
            <CategoryCards />
            <ServiceFeatures />
            <NewArrivalCards title="New Arrivals" />
            <FirstLayout />
          </div>
          <CategoriesList />
          <div className="bg-white px-[10px] sm:px-[20px] md:px-[40px] lg:px-[80px] xl:px-[130px] 2xl:px-[130px]">
            <SecondLayout />
          </div>
          <div className="flex flex-col gap-8 bg-white min-h-[60vh] px-[10px] sm:px-[20px] md:px-[40px] lg:px-[80px] xl:px-[130px] 2xl:px-[130px]">
            <CategoryFirst
              categorySectionImage={categorySection1}
              heading="Dryfruit collections"
              positionBeginning={false}
            />
            <CategoryFirst
              categorySectionImage={categorySection2}
              heading="Giftbox collections"
              positionBeginning={true}
            />
            <CategoryFirst
              categorySectionImage={categorySection3}
              heading="Dates collection"
              positionBeginning={false}
            />
          </div>
          <Feedback />
          <div className="bg-white min-h-[40vh] px-[10px] sm:px-[20px] md:px-[40px] lg:px-[80px] xl:px-[130px] 2xl:px-[130px] home-margin">
            <BestSellingProducts title={"best selling products"} />
            <Shop />
          </div>
        </>
      )}
    </React.Fragment>
  );
}
