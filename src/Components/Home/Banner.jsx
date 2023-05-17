import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel  w-full h-full">
        <div id="slide1" className="carousel-item relative  w-full   h-screen">
          <div className="flex justify-between items-center ">
            <div className="w-1/2 ms-10">
              <h2 className="text-3xl lg:text-6xl  pt-10 lg:ms-20 text-red-400 font-bold">
                Welcome to <br />
                <span className="text-amber-700 mt-4 text-4xl lg:text-7xl">
                  Zoo Zone Toys
                </span>
              </h2>
              <p className="font-semibold w-2/3 text-xl ms-10 lg:ps-11 pt-10 lg:4xl text-yellow-600">
                Unleash the Wild Fun! Explore the Zoo Zone with our Amazing Toy
                Collection
              </p>
            </div>
            <div className="w-1/2">
              <img
                src="https://img.freepik.com/free-vector/shelf-box-full-toys-white_1308-41753.jpg?w=826&t=st=1684343535~exp=1684344135~hmac=d57d0e84862b4528e3b503c4f621e346626208ef43b4abf71e16ff9ee517ff67"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle bg-red-300 border border-0"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-red-300 border border-0"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative pt-5 w-full h-screen bg-cover"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1591969720392-942fbccecd5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex justify-center items-center mt-10">
            <div className="w-1/2 ms-10 text-center ">
              <p className="text-3xl lg:text-6xl pt-10  text-center  text-red-200 font-bold">
                Step into the Magical World of Zoo Zone Toys
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-red-300 border border-0"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-red-300 border border-0"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full h-screen">
          <div className="flex justify-between items-center">
            <div className="w-1/2 ms-10">
              <h5 className="text-3xl lg:text-4xl  pt-10 lg:ms-20 text-red-400 font-bold">
                Get Ready for a Roaring Good Time at Zoo Zone Toys: Where
                Wildlife Wonders Come to Life
              </h5>
            </div>
            <div className="w-1/2">
              <img
                src="https://img.freepik.com/premium-vector/kids-playing-with-various-toys_29937-3111.jpg?w=826"
                className="w-full"
              />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-red-300 border border-0"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-red-300 border border-0"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
