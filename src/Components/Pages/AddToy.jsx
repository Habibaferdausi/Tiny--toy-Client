import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.pictureUrl.value;
    const sellerName = form.sellerName.value;

    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const toys = {
      name,
      photo,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };
    console.log(toys);

    fetch("http://localhost:5000/addToy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="mt-20 mb-20 ">
        <h1 className="mt-10 pt-10 mb-10 text-center font-bold">
          {" "}
          Welcome <span className="text-red-500">{user?.displayName}</span> To
          zoo Zone Toys{" "}
        </h1>
      </div>

      <div className="flex justify-center bg-red-200   mt-10">
        <form className="w-full max-w-lg " onSubmit={handleSubmit}>
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
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
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
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="sellerName"
              className="block text-gray-700 font-bold mb-2"
            >
              Seller Name :
            </label>
            <input
              type="text"
              id="sellerName"
              name="sellerName"
              value={user?.displayName}
              defaultValue={user?.displayName}
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
              defaultValue={user?.email}
              value={user?.email}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subCategory"
              className="block text-gray-700 font-bold mb-2"
            >
              Category:
            </label>
            <select
              id="subCategory"
              name="subCategory"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="teddyBear">Teddy Bear</option>
              <option value="dinosaur">Dinosaur Toy</option>
              <option value="horse">Horse Toy</option>
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
              type="text"
              id="price"
              name="price"
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
              type="text"
              id="rating"
              name="rating"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-bold mb-2"
            >
              Available Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
