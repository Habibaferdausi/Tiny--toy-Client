import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [user]);
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
              <th> Toy Name</th>
              <th>Photo</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Available Quantity</th>
              <th>Description</th>
              <th>Update/ Delete</th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy, index) => (
              <tr className="text-center" key={toy.id}>
                <td>{index + 1}</td>
                <td>{toy.name}</td>
                <td>
                  {" "}
                  <img src={toy.photo} className="h-40 w-40" />
                </td>
                <td>{toy.sellerName}</td>
                <td>{toy.sellerEmail}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}$</td>
                <td>{toy.rating}</td>
                <td>{toy.quantity}</td>
                <td>
                  <div data-tippy-content="{toy.description}">
                    {toy.description.substring(0, 20) + "..."}
                  </div>
                </td>

                <td>
                  <button className="btn btn-circle btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <button className="btn btn-circle btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
