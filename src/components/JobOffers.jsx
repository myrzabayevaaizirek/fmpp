import React from "react";
import { FiBookmark, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import meta from "../assets/meta.png";
import najma from "../assets/najma.png";
import mohi from "../assets/mohi.png";
import fatima from "../assets/fatima.png";
import eli from "../assets/eli.png";
import mitra from "../assets/mitra.png";

const jobs = [
  {
    title: "Waiter",
    company: "META Company",
    salary: "3000 soms",
    tags: ["Easy Apply", "Multiple Candidate"],
    logo: meta,
    time: "3h",
  },
  {
    title: "Babysitter",
    company: "NAJMA Company",
    salary: "1000 soms",
    tags: ["Easy Apply", "Multiple Candidate"],
    logo: najma,
    time: "2h",
  },
  {
    title: "Cleaner",
    company: "MOHI Company",
    salary: "500 soms",
    tags: ["Multiple Candidate"],
    logo: mohi,
    time: "5h",
  },
  {
    title: "Electrician",
    company: "FATIMA Company",
    salary: "300 soms",
    tags: ["Multiple Candidate"],
    logo: fatima,
    time: "5h",
  },
  {
    title: "Mechanic",
    company: "ELI Company",
    salary: "2500 soms",
    tags: ["Easy Apply"],
    logo: eli,
    time: "3h",
  },
  {
    title: "Nurse",
    company: "MITRA Company",
    salary: "500 soms",
    tags: ["Multiple Candidate"],
    logo: mitra,
    time: "7h",
  },
];

const JobOffers = () => {
  return (
    <section className="bg-white py-14 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#070537] text-center w-full">
           Exclusive Offers
        </h2>

          <div className="flex gap-3">
            <button className="p-2 rounded-full border border-[#D1D5DB] hover:shadow transition">
              <FiArrowLeft className="text-[#070537] w-5 h-5" />
            </button>
            <button className="p-2 rounded-full border border-[#D1D5DB] hover:shadow transition">
              <FiArrowRight className="text-[#070537] w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-5 border border-[#E5E7EB] hover:shadow-md transition relative"
            >
              {/* Bookmark icon */}
              <FiBookmark className="absolute top-4 right-4 text-[#070537] w-5 h-5" />

              {/* Company Info */}
              <div className="flex items-center gap-3 mb-3">
                <img src={job.logo} alt={job.company} className="w-7 h-7 rounded-full" />
                <span className="text-sm text-[#9CA3AF]">{job.company}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#111827]">{job.title}</h3>
              <p className="text-sm text-[#4B5563] mb-4">{job.salary}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {job.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-xs px-3 py-1 rounded-full ${
                      tag === "Easy Apply"
                        ? "bg-white border border-[#28A8E0] text-[#28A8E0]"
                        : "bg-[#E4F8F3] text-[#28A8E0]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Time */}
              <p className="text-xs text-right text-[#6B7280]">{job.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobOffers;
