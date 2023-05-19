import React from "react";

const ToyCard = ({ toy }) => {
  const {
    name,
    photo,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    quantity,
    description,
  } = toy;
  console.log(toy);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-80 w-80" src={photo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-red-400 font-bold">{name}</h2>
          <div className="flex items-center  justify-between">
            <div>
              <h2>Price:{price}$</h2>
            </div>
            <div>
              <h2>Rating:{rating}</h2>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
