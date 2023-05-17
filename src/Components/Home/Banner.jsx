import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel mt-11 w-full h-full">
        <div id="slide1" className="carousel-item relative mt-5 w-full h-700">
          <div className="flex justify-between items-center mt-10">
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
          className="carousel-item relative mt-5 w-full h-700"
          style={{"background-image: url('https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686920.jpg?w=740&t=st=1684346000~exp=1684346600~hmac=0da74b03cb6ccf862a8c37546361906978e6f655ac5c0c825366169675cfb2a8'); background-size: cover;" }}>
          <div className="flex justify-between items-center mt-10">
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

        <div id="slide3" className="carousel-item relative mt-5 w-full h-700">
          <div className="flex justify-between items-center mt-10">
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
