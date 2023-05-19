import React, { useState } from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    name,
    photo,
    price,
    sellerName,
    quantity,
    rating,
    sellerEmail,
    description,
  } = toy;

  console.log(toy);

  return (
    <div className="mt-20">
      <h1 className="text-center mt-20">this is details page</h1>
      <h1>Name : {name}</h1>

      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="object-cover w-full h-48" src={photo} />

        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {" "}
            Name:{name}
          </h2>
          <p className="text-gray-600 mb-2">Seller: {sellerName}</p>
          <p className="text-gray-600 mb-2">Email: {sellerEmail}</p>
          <p className="text-2xl font-semibold text-gray-800 mb-2">${price}</p>
          <div className="flex items-center mb-2">
            <svg
              className="w-5 h-5 fill-current text-yellow-500 mr-1"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L14.2529 7.55279L20 8.36639L15.7764 12.5886L17.0607 18.1336L12 15.9771L6.93934 18.1336L8.22361 12.5886L4 8.36639L9.74706 7.55279L12 2Z" />
            </svg>
            <p className="text-gray-800 font-semibold">{rating}/5</p>
          </div>
          <p className="text-gray-800 font-semibold mb-2">
            Available Quantity: {quantity}
          </p>
          <p className="text-gray-700 leading-snug">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
