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
import shopImage from "@/public/assets/shopImage.webp";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-white min-h-screen px-[10px] sm:px-[20px] md:px-[40px] lg:px-[80px] xl:px-[130px] 2xl:px-[130px] home-margin">
        <div className="mt-[105px]">
          <Banner />
        </div>
        <CategoryCards />
        <ServiceFeatures />
        <NewArrivalCards title="New Arrivals" array={[1, 2, 3, 4, 5, 6]} />
        <FirstLayout />
      </div>
      <CategoriesList />
      <div className="bg-white px-[10px] sm:px-[20px] md:px-[40px] lg:px-[80px] xl:px-[130px] 2xl:px-[130px]">
        <SecondLayout />
      </div>
      {/* // */}
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
        <NewArrivalCards
          title={"best selling products"}
          array={[1, 2, 3, 4, 5, 6]}
        />
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
              <h3 className="text-xl font-bold mb-2">Find us Here</h3>
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
      </div>
    </>
  );
}
