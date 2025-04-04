import React, { useState, useRef } from "react";
import CompanyTabs from "./CompanyTabs";
import JobCard from "./JobCard";
import PeopleBlock from "./PeopleBlock";
import LifeGallery from "./LifeGallery";

const CompanyDetails = ({ company }) => {
  const [activeTab, setActiveTab] = useState("About");

  const aboutRef = useRef(null);
  const jobsRef = useRef(null);
  const peopleRef = useRef(null);
  const lifeRef = useRef(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const refs = {
      About: aboutRef,
      Jobs: jobsRef,
      People: peopleRef,
      Life: lifeRef,
    };
    refs[tab]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const tabs = ["About", "Jobs", "People", "Life"];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <img src={company.logo} alt={company.name} className="w-6 h-6" />
        {company.name}
      </h1>
      <CompanyTabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

      <div ref={aboutRef} className="mt-6">
        <h2 className="text-xl font-bold mb-2">About</h2>
        <p className="text-gray-700">{company.description}</p>
      </div>

      <div ref={jobsRef} className="mt-6">
        <h2 className="text-xl font-bold mb-2">Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {company.jobs.map((job, idx) => (
            <JobCard key={idx} {...job} />
          ))}
        </div>
      </div>

      <div ref={peopleRef} className="mt-6">
        <h2 className="text-xl font-bold mb-2">People</h2>
        <div className="flex flex-col gap-8">
          {company.people.map((block, index) => (
            <div key={index}>
              <p className="font-semibold text-lg mb-2">{block.name}</p>
              <div className="flex items-center space-x-[-10px]">
                {block.avatars.map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={lifeRef} className="mt-6">
        <h2 className="text-xl font-bold mb-2">Life</h2>
        <LifeGallery images={company.lifeImages} />
      </div>
    </div>
  );
};

export default CompanyDetails;
