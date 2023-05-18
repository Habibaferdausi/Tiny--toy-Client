import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const [toyData, setToyData] = useState({
    pictureUrl: "",
    name: "",
    sellerName: "",
    sellerEmail: "",
    subCategory: "",
    price: "",
    rating: "",
    availableQuantity: "",
    description: "",
  });

  const handleChange = (e) => {
    setToyData({
      ...toyData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(toyData);
  };

  return (
    <div>
      <div className="mt-20 mb-20 ">
        <h1 className="mt-10 pt-10 mb-10 text-center font-bold">
          {" "}
          Welcome <span className="text-red-500">{user.displayName}</span> To
          zoo Zone Toys{" "}
        </h1>
      </div>

      <div className="flex justify-center mt-10">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="pictureUrl"
              className="block text-gray-700 font-bold mb-2"
            >
              Picture URL of the toy:
            </label>
            <input
              type="text"
              id="pictureUrl"
              name="pictureUrl"
              value={toyData.pictureUrl}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={toyData.name}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="sellerName"
              className="block text-gray-700 font-bold mb-2"
            >
              Seller Name (if available):
            </label>
            <input
              type="text"
              id="sellerName"
              name="sellerName"
              value={toyData.sellerName}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="sellerEmail"
              className="block text-gray-700 font-bold mb-2"
            >
              Seller Email:
            </label>
            <input
              type="email"
              id="sellerEmail"
              name="sellerEmail"
              value={toyData.sellerEmail}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subCategory"
              className="block text-gray-700 font-bold mb-2"
            >
              Sub-category:
            </label>
            <select
              id="subCategory"
              name="subCategory"
              value={toyData.subCategory}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Sub-category</option>
              <option value="Math Toys">Math Toys</option>
              <option value="Language Toys">Language Toys</option>
              <option value="Science Toys">Science Toys</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={toyData.price}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-gray-700 font-bold mb-2"
            >
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={toyData.rating}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="availableQuantity"
              className="block text-gray-700 font-bold mb-2"
            >
              Available Quantity:
            </label>
            <input
              type="number"
              id="availableQuantity"
              name="availableQuantity"
              value={toyData.availableQuantity}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Detail Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={toyData.description}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
