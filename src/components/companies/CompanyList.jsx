import React from "react";

const companies = [
  {
    id: 1,
    name: "NAVA Company",
    logo: "/logos/nava.png",
    rating: 3.4,
    employees: "10K+",
    jobs: 32,
    benefit: true,
    description: "Babysitters finders",
  },
  {
    id: 2,
    name: "Waiter",
    logo: "/logos/waiter.png",
    rating: 3.4,
    employees: "8K+",
    jobs: 12,
    benefit: true,
    description: "Restaurant services",
  },
  {
    id: 3,
    name: "Cooker",
    logo: "/logos/cooker.png",
    rating: 4.2,
    employees: "7K+",
    jobs: 5,
    benefit: false,
    description: "Cooking services",
  },
  {
    id: 4,
    name: "Babysitter",
    logo: "/logos/babysitter.png",
    rating: 4.1,
    employees: "4K+",
    jobs: 16,
    benefit: true,
    description: "Childcare services",
  },
  {
    id: 5,
    name: "Delivery",
    logo: "/logos/delivery.png",
    rating: 4.5,
    employees: "1K+",
    jobs: 14,
    benefit: false,
    description: "Parcel delivery",
  },
  {
    id: 6,
    name: "Cleaner",
    logo: "/logos/cleaner.png",
    rating: 3.4,
    employees: "4K+",
    jobs: 22,
    benefit: true,
    description: "Cleaning services",
  },
];

const CompanyList = ({ onSelectCompany }) => {
  return (
    <div className="p-4 space-y-4">
      {companies.map((company) => (
        <div
          key={company.id}
          onClick={() => onSelectCompany(company)}
          className="cursor-pointer border p-4 rounded shadow hover:bg-gray-50 flex items-center gap-4"
        >
          <img
            src={company.logo}
            alt={company.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold">{company.name}</h3>
            <p className="text-sm text-gray-500">{company.description}</p>
            <p className="text-xs text-gray-400">{company.employees} Employees</p>
          </div>
          <span className="text-yellow-500 font-semibold">{company.rating} ⭐</span>
        </div>
      ))}
    </div>
  );
};

export default CompanyList;