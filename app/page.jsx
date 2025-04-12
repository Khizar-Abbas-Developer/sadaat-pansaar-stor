import Banner from "@/components/Home/Banner";
import CategoryCards from "@/components/Home/CategoryCards";
import NewArrivalCards from "@/components/Home/NewArrival";
import ServiceFeatures from "@/components/Home/ServiceFeatures";

import FirstLayout from "@/components/Home/FirstLayout";
import SecondLayout from "@/components/Home/SecondLayout";
import CategoriesList from "@/components/Home/CategoriesList";
import CategoryFirst from "@/components/Home/CategoryFirst";

export default function Home() {
  return (
    <>
      <div className="bg-white min-h-screen home-padding home-margin">
        <div className="" style={{ marginTop: "100px" }}>
          <Banner />
        </div>
        <CategoryCards />
        <ServiceFeatures />
        <NewArrivalCards />
        <FirstLayout />
      </div>
      <CategoriesList />
      <div className="bg-white home-padding">
        <SecondLayout />
      </div>

      {/* // */}
      <div className="flex flex-col gap-8 bg-white min-h-[60vh] home-padding">
        <CategoryFirst />
      </div>
    </>
  );
}
