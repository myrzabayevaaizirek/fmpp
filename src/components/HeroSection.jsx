import React from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";

const categories = [
  "Easy Apply",
  "Part-Time",
  "Costumer Service",
  "Delivery Driver",
  "Nurse",
  "Waiter",
  "Babysitter",
  "Cleaner",
  "Mechanic",
  "Electrician",
];

const HeroSection = () => {
  return (
    <section className="bg-white py-14">
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10">
          Start Your Job Journey
        </h1>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 bg-white shadow-md border border-gray-200 rounded-full px-4 py-3 max-w-3xl mx-auto mb-3">
          <div className="flex items-center flex-1">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 outline-none text-gray-700 bg-transparent"
            />
          </div>
          <span className="w-px h-6 bg-gray-300 mx-2 hidden md:block" />
          <div className="flex items-center flex-1">
            <FiMapPin className="text-gray-400 ml-2 mr-2" />
            <input
              type="text"
              placeholder="Location"
              className="w-full px-2 py-2 outline-none text-gray-700 bg-transparent"
            />
          </div>
          <button className="bg-[#28A8E0] hover:bg-[#2497C8] text-white rounded-full p-3 ml-2 shadow-md">
            <FiSearch className="text-lg" />
          </button>
        </div>

        {/* Post Job Link */}
        <p className="text-sm text-gray-600">
  Employers?{" "}
  <a
    href="#"
    className="text-[#28A8E0] font-medium hover:underline"
  >
    Post your job here
  </a>
</p>


        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full border text-sm ${
                i === 0
                  ? "bg-[#2068B0] text-white"
                  : i === 1
                  ? "border-black text-black"
                  : "border-gray-300 text-gray-700"
              } hover:shadow`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
