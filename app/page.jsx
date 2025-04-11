import Banner from "@/components/Home/Banner";
import CategoryCards from "@/components/Home/CategoryCards";
import NewArrivalCards from "@/components/Home/NewArrival";
import ServiceFeatures from "@/components/Home/ServiceFeatures";

export default function Home() {
  return (
    <div className="bg-white min-h-screen home-padding home-margin">
      <div className="" style={{ marginTop: "100px" }}>
        <Banner />
      </div>
      <CategoryCards />
      <ServiceFeatures />
      <NewArrivalCards />
    </div>
  );
}
