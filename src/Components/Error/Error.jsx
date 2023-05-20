import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <img
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1684514244~exp=1684514844~hmac=f242156ff038bdc81a3b7420987688565b6bce23322f00453825fa3158d7f07b"
        alt="Error"
        className="w-1/4 mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-gray-600 mb-11 text-lg mt-8">Page Not Found</p>
      <Link to="/">
        {" "}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
