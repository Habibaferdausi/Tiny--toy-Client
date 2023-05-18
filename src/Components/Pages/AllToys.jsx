import React, { useEffect, useState } from "react";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, []);

  const displayedToys = toys.slice(0, 20); // Limit the displayed toys to the first 20

  return (
    <div>
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
