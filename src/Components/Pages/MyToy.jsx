import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

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

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/chocolate/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = chocolates.filter((cho) => cho._id !== _id);
              setChocolates(remaining);
            }
          });
      }
    });
  };

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
              <th>Toy Name</th>
              <th>Photo</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Available Quantity</th>
              <th>Description</th>
              <th>Update/Delete</th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy, index) => (
              <tr className="text-center" key={toy._id}>
                <td>{index + 1}</td>
                <td>{toy.name}</td>
                <td>
                  <img src={toy.photo} className="h-40 w-40" alt={toy.name} />
                </td>
                <td>{toy.sellerName}</td>
                <td>{toy.sellerEmail}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}$</td>
                <td>{toy.rating}</td>
                <td>{toy.quantity}</td>
                <td>
                  <div className="w-40 overflow-x-scroll">
                    {toy.description}
                  </div>
                </td>
                <td>
                  <Link className="" to={`/update/${toy._id}`}>
                    <button className="btn btn-circle me-2 bg-white border border-0 hover:bg-red-200">
                      <img src="https://freesvg.org/img/edit-icon.png" alt="" />
                    </button>
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="btn btn-circle ms-3 bg-white border border-0 hover:bg-red-200"
                  >
                    <img
                      src="https://freesvg.org/img/jean_victor_balin_cross.png"
                      alt=""
                    />
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
