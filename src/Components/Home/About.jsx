import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mx-5 mb-6 lg:mx-11">
      <div>
        <div className="mx-10 mt-10 text-start lg:mt-20">
          <div data-aos="fade-down">
            <p
              className="text-purple-600 font-bold  lg:mt-20 mb-7 lg:mb-20 text-center text-lg lg:text-5xl"
              style={{ fontFamily: "Goodvibes, cursive" }}
            >
              About
              <span className="text-blue-400 ms-2">Us</span>
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 mt-2 lg:mt-7 ">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="rounded w-full overflow-hidden"
          >
            <img
              src="https://devasw7xy5fu5.cloudfront.net/toys-shop/wp-content/uploads/sites/261/2019/07/Category_Banner.png"
              alt=""
              className="rounded w-full"
            />
          </div>

          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="mx-2 lg:mx-8"
          >
            <h1 className="text-3xl lg:text-5xl font-semibold text-red-400">
              We make your children happier with the best toys
            </h1>
            <p className="mt-7  mb-7 me-3 text-lg lg:text-xl     me-4 text-gray-500 ">
              Welcome to Tiny Toys! Imagination thrives here with the finest
              global toys. Our caring team offers personalized experiences,
              igniting joy in every child's heart. We foster cognitive, motor,
              social, and emotional growth through play. Together, we make the
              magic of play accessible to all. Let the adventure begin!
            </p>
            <button className="btn bg-red-400 mt-6 me-3 border border-0 hover:bg-rose-400">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
