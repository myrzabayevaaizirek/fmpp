import React from "react";
import HeroSection from "../components/HeroSection";
import JobOffers from "../components/JobOffers";
import ChooseUs from "../components/ChooseUs";
import OurPartners from "../components/OurPartners";

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <JobOffers />
      <ChooseUs />
      <OurPartners />
    </div>
  );
};

export default Home;
