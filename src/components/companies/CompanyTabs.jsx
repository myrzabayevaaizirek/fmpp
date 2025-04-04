import React from "react";

const CompanyTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex space-x-4 border-b mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`pb-2 px-4 text-sm font-medium border-b-2 ${
            activeTab === tab
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default CompanyTabs;
