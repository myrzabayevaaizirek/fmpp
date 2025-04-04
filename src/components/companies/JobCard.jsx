import React from "react";

const JobCard = ({ title = "Untitled", salary = "Not specified", tags = [], time = "N/A" }) => {
  return (
    <div className="border rounded p-4 shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{salary}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-2">{time}</p>
    </div>
  );
};

export default JobCard;
