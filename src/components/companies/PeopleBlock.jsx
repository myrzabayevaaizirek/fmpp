// PeopleBlock.jsx
import React from "react";

const PeopleBlock = ({ people }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {people.map((person, index) => (
        <div key={index} className="flex items-center gap-4">
          <img
            src={person.avatar}
            alt={person.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">{person.name}</p>
            <p className="text-sm text-gray-500">{person.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PeopleBlock;