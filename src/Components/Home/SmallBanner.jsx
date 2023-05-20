import React from "react";
import { Link } from "react-router-dom";

const SmallBanner = () => {
  return (
    <div
      className="relative rounded mt-20 lg:pt-11"
      style={{
        height: "400px",
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute  w-full h-full "
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="5000"
      >
        <h3 className="text-white mb-4 mt-8 text-center  font-semibold text-2xl">
          Don’t Waste Time!
        </h3>
        <h1 className="text-white text-2xl  text-center lg:text-5xl tracking-widest  mb-5 mt-5 font-bold ">
          Get Tiny Toy Right Now
        </h1>
        <div data-aos="fade-right" className="item-center ">
          <div>
            {" "}
            <p className="text-2xl lg:text-4xl tracking-widest font-bold text-center text-white mt-4">
              We have everything you need.{" "}
            </p>
          </div>
        </div>
        <div data-aos="fade-right" className="item-center ">
          <div className="flex justify-center">
            <Link to="/allToys">
              <button className="btn text-center mx-auto btn-outline text-white mt-9 bg-blue-400">
                Purchase Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallBanner;
