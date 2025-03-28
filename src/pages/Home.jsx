import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import JobOffers from "../components/JobOffers";
import ChooseUs from "../components/ChooseUs";
import OurPartners from "../components/OurPartners";

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <HeroSection />
      <JobOffers />
      <ChooseUs /> {/* ✅ Добавили сюда */}
      <OurPartners />
      <Footer />
    </div>
  );
};

export default Home;
