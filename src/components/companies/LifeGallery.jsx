// LifeGallery.jsx
import React from "react";

const LifeGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Life at company ${index}`}
          className="rounded-xl w-full h-40 object-cover"
        />
      ))}
    </div>
  );
};

export default LifeGallery;
