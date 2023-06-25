import React from "react";
import { Link } from "react-router-dom";

const SmallBanner = () => {
  return (
    <div
      className="relative bg-fixed rounded mt-20 lg:pt-11"
      data-aos="fade-up-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="4000"
      style={{
        height: "500px",
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1589863465747-f337e97f8f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=838&q=80)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="w-full h-full "
        data-aos="fade-up-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="4000"
      >
        <h3 className="text-white mb-4 mt-8 text-center  font-semibold text-2xl">
          Don’t Waste Time!
        </h3>
        <h1 className="text-white text-2xl  text-center lg:text-5xl tracking-widest  mb-5 mt-5 font-bold ">
          Get Tiny Toy Right Now
        </h1>
        <div className="item-center ">
          <div>
            {" "}
            <p className="text-2xl lg:text-4xl tracking-widest font-bold text-center text-white mt-4">
              We have everything you need.{" "}
            </p>
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
    </div>
  );
};

export default SmallBanner;
