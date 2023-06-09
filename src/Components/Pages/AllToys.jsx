import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://server-zoo-zone-toys.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, []);
  useEffect(() => {
    document.title = "TINY TOY | All Toy";
  }, []);

  const handleSearch = () => {
    fetch(`https://server-zoo-zone-toys.vercel.app/toySearch/${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };

  return (
    <div>
      <div className="">
        <h2 className="text-2xl lg:text-4xl text-center pt-10 lg:mt-20 text-red-400 font-bold">
          Welcome <span className="text-yellow-500">to</span>
          <span className="text-purple-600 mt-4 text-3xl lg:text-5xl">
            {" "}
            All <span className="text-blue-400"> Toy </span> Page
          </span>
        </h2>
      </div>

      <div className="flex items-center justify-center mt-5 pt-10">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"

          // Handle search button click
        >
          Search
        </button>
      </div>

      <div className="overflow-x-auto mt-10 mb-20">
        <table className="table w-full">
          {/* head */}
          <thead className="">
            <tr className="text-center">
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy, index) => (
              <tr className="text-center" key={toy.id}>
                <td>{index + 1}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.name}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}$</td>
                <td>{toy.quantity}</td>

                <td>
                  <Link to={`toy/${toy._id}`}>
                    <button className="btn bg-red-400 border border-0 hover:bg-purple-300 hover:text-black hover:border-o">
                      View Details →{" "}
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
