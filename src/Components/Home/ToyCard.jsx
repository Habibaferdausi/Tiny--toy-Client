import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAlignRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
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
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="" className="h-80 w-80" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-purple-600 text-2xl mt-5 lg:text-3xl">
            {name}
          </h2>
          <div className="mt-2 lg:mt-5  font-medium">
            <h2 className=" text-xl">
              Price : <span className="text-red-500 ms-2">{price} $</span>
            </h2>
            <h2 className="text-xl mt-2">
              Rating : {rating}/5{" "}
              <span className="text-yellow-400 ms-2">
                <FontAwesomeIcon icon={faStar} />
              </span>
            </h2>
          </div>
          <div className="card-actions mt-3 justify-end">
            <Link to={`toy/${toy._id}`}>
              <button className="btn bg-red-400 border border-0 hover:bg-purple-300 hover:text-black hover:border-o">
                View Details{" "}
                <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="card card-side lg:mx-11 font-bold bg-base-100  shadow-2xl">
        <figure>
          <img  />
        </figure>
        <div className="card-body pt-7 lg:pt-11">
          <h2 className="card-title text-purple-600 text-2xl lg:text-3xl">
            {name}
          </h2>
          <div className="mt-5 lg:mt-11  font-medium">
            <h2 className=" text-xl">
              Price : <span className="text-red-500 ms-2">{price} $</span>
            </h2>
            <h2 className="text-xl mt-4">
              Rating : {rating}/5{" "}
              <span className="text-yellow-400 ms-2">
                <FontAwesomeIcon icon={faStar} />
              </span>
            </h2>
          </div>
          <div className="card-actions mt-5 lg:mt-8 justify-start">
            <Link to={`toy/${toy._id}`}>
              <button className="btn bg-red-400 border border-0 hover:bg-purple-300 hover:text-black hover:border-o">
                View Details{" "}
                <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
              </button>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ToyCard;
