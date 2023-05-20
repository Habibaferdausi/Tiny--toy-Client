import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    document.title = "TINY TOY | Details";
  }, []);

  return (
    <div className="mt-20">
      <h2 className="text-2xl lg:text-4xl text-center pt-10 lg:mt-20 text-red-400 font-bold">
        Welcome <span className="text-yellow-500">to</span>
        <span className="text-purple-600 mt-4 text-3xl lg:text-4xl">
          {" "}
          {name}'s<span className="text-blue-400"> Details </span> Page
        </span>
      </h2>

      <div className="flex justify-center items-center  mb-10 h-screen">
        <div className="card lg:card-side mx-11 lg:mx-20 mt-11 mb-11 bg-base-100 shadow-xl">
          <figure>
            <img className="" src={photo} alt="Toy" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-red-400 text-4xl font-bold mb-5">
              {" "}
              {name}
            </h2>
            <p className="text-gray-600 text-lg font-semibold">
              <span className="text-green-600"> Seller: </span> {sellerName}
            </p>
            <p className="text-gray-600 text-lg font-semibold">
              <span className="text-green-600"> Seller Email: </span>{" "}
              {sellerEmail}
            </p>
            <p className="text-2xl font-semibold text-gray-800 mb-2">
              Price: <span className="text-red-400 font-bold"> {price}$</span>
            </p>
            <div className="flex items-center mb-2">
              <h2 className="text-xl mt-4">
                <span className="text-blue-600"> Rating : </span> {rating}/5{" "}
                <span className="text-yellow-400 ms-2">
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </h2>
            </div>
            <p className="text-gray-600 text-lg mt-3 font-semibold mb-2">
              Available Quantity:{" "}
              <span className="text-red-400 font-bold"> {quantity}</span>
            </p>
            <p className="text-gray-600 text-lg  ">
              <span className="text-red-400 text-lg font-bold">
                {" "}
                Description:
              </span>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
