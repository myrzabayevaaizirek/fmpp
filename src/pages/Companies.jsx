import React, { useState } from "react";
import { companiesData } from "../data/companiesData";
import CompanyDetails from "../components/companies/CompanyDetails";

const Companies = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div className="flex">
      <div className="w-1/4 p-4 border-r">
        <h2 className="text-xl font-semibold mb-4">Companies</h2>
        <div className="space-y-4">
          {companiesData.map((company) => (
            <div
              key={company.id}
              onClick={() => handleCompanySelect(company)}
              className="cursor-pointer border p-4 rounded shadow hover:bg-gray-50"
            >
              <img src={company.logo} alt={company.name} className="w-12 h-12 rounded-full object-cover" />
              <div className="flex-1">
                <h3 className="font-semibold">{company.name}</h3>
                <p className="text-sm text-gray-500">{company.description}</p>
                <p className="text-xs text-gray-400">{company.employees} Employees</p>
              </div>
              <span className="text-yellow-500 font-semibold">{company.rating} ⭐</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-3/4 p-4">
        {selectedCompany ? (
          <CompanyDetails company={selectedCompany} />
        ) : (
          <p className="text-gray-500">Please select a company to view its details.</p>
        )}
      </div>
    </div>
  );
};

export default Companies;
