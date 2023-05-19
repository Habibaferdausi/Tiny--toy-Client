import React, { useEffect, useState } from "react";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/toySearch/${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };

  const displayedToys = toys.slice(0, 20); // Limit the displayed toys to the first 20

  return (
    <div>
      <div className="flex items-center justify-center mt-20 pt-10">
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

      <div className="mt-20 text-red-600 text-center text-lg font-bold">
        All Toys
      </div>
      <div className="overflow-x-auto mt-10">
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
            {displayedToys?.map((toy, index) => (
              <tr className="text-center" key={toy.id}>
                <td>{index + 1}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.name}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}$</td>
                <td>{toy.quantity}</td>

                <td>
                  <button>View</button>
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
