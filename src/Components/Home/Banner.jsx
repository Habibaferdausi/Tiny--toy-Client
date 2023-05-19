import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Aos from "aos";
AOS.init();

const Banner = () => {
  return (
    <div>
      <div className="carousel  w-full h-full">
        <div id="slide1" className="carousel-item relative  w-full   h-screen">
          <div className="flex justify-between items-center ">
            <div
              className="w-1/2 ms-10 "
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <h2 className="text-3xl lg:text-6xl  pt-10 lg:ms-20 text-red-500 font-bold">
                Welcome <span className="text-yellow-500">to</span> <br />
                <span className="text-purple-600 mt-4 text-4xl lg:text-7xl">
                  {" "}
                  TINY <span className="text-blue-400">TOYS</span>
                </span>
              </h2>
              <h3
                data-aos="zoom-in-right"
                className="font-semibold w-2/3 text-lg ms-10 lg:ps-11 pt-10 lg:text-2xl text-green-500"
              >
                Unleash the Wild Fun! Explore the
                <span className="text-purple-600 ">
                  {" "}
                  TINY <span className="text-blue-400">TOY</span>
                </span>{" "}
                with our Amazing Toy Collection
              </h3>
            </div>
            <div
              className="w-1/2"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                src="https://img.freepik.com/free-vector/shelf-box-full-toys-white_1308-41753.jpg?w=826&t=st=1684343535~exp=1684344135~hmac=d57d0e84862b4528e3b503c4f621e346626208ef43b4abf71e16ff9ee517ff67"
                className="w-full h-500"
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
              "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.1)), url('https://img.freepik.com/premium-photo/kids-toys-collection-close-up-view_488220-617.jpg?w=740')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="mt-10 flex justify-center items-center h-screen mx-auto">
            <div
              className="text-center"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="8000"
            >
              <p className="text-2xl w-2/3 p-8 lg:text-3xl bg-red-100 rounded-lg text-red-400 font-bold mx-auto">
                <img
                  className="text-center"
                  src="https://media1.giphy.com/media/L1Vbo6aeolrf7hAD4Z/giphy.gif?cid=ecf05e474niltai4gvlxoz63j61hs4zutwtytianhho1y8qy&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                />{" "}
                Step into the{" "}
                <span className="text-yellow-500">Magical World of</span>
                <span className="text-purple-600 ">
                  {" "}
                  TINY <span className="text-blue-400">TOYS</span>
                </span>
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
            <div
              className="w-1/2 ms-10"
              data-aos="zoom-out"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <h5 className="text-lg lg:text-4xl  lg:pt-10 lg:ms-20 text-red-400 font-bold">
                Get Ready for a Roaring <br />
                Good Time at <br />
                <span className="text-purple-600 ">
                  {" "}
                  TINY <span className="text-blue-400">TOYS</span>
                </span>
                <br />
                <span className="text-yellow-500">
                  Where Wildlife Wonders <br /> Come to Life
                </span>
              </h5>
            </div>
            <div
              className="lg:w-1/2 w-full"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
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
