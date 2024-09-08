import React from "react";

export const Card = ({ price, image, title, description }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 text-4xl font-bold rounded-full shadow-lg">
        {price}
      </div>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};
