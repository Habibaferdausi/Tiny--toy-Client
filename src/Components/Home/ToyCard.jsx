import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
      <div className="card card-side lg:mx-11 font-bold bg-base-100  shadow-2xl">
        <figure>
          <img className="h-80 w-80" src={photo} />
        </figure>
        <div className="card-body pt-7 lg:pt-11">
          <h2 className="card-title text-purple-600 text-2xl lg:text-3xl">
            {name}
          </h2>
          <div className="mt-5 lg:mt-11  font-medium">
            <h2 className=" text-xl">
              Price : <span className="text-red-500 ms-2">{price} $</span>
            </h2>
            <div className="flex items-center mb-2">
              <svg
                className="w-5 h-5 fill-current text-yellow-500 mr-1"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L14.2529 7.55279L20 8.36639L15.7764 12.5886L17.0607 18.1336L12 15.9771L6.93934 18.1336L8.22361 12.5886L4 8.36639L9.74706 7.55279L12 2Z" />
              </svg>
              <h2 className="text-gray-800 font-semibold">{rating}/5</h2>
            </div>
          </div>
          <div className="card-actions mt-5 lg:mt-8 justify-start">
            <Link to={`toy/${toy._id}`}>
              <button className="btn bg-red-400 border border-0 hover:bg-purple-300 hover:text-black hover:border-o">
                View Details →{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
