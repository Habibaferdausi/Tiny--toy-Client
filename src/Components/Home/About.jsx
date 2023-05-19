import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mx-5 lg:mx-11">
      <div>
        <div className="mx-10 text-start lg:mt-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 mt-2 ">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="  rounded "
            >
              <img
                src="https://i.ibb.co/qkvxVTG/Screenshot-3.jpg"
                alt=""
                className=" rounded"
              />
            </div>

            <div
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className=" ms-7 text-start "
            >
              <div className="font-extrabold mt-5 ">
                <p
                  className="text-purple-600   text-lg lg:text-5xl"
                  style={{ fontFamily: "Goodvibes, cursive" }}
                >
                  About <span className="text-blue-400 ">US</span>
                </p>
              </div>

              <div>
                <p className="mt-4  mb-3 me-3 text-lg lg:text-xl     me-4 text-gray-500 ">
                  Welcome to Tiny Toys, where imagination knows no bounds!
                  Discover a world filled with the finest toys from around the
                  globe, carefully selected for quality and child-friendly
                  materials. Our friendly staff is here to assist you, providing
                  a personalized experience that sparks joy in every child's
                  heart. At Tiny Toys, we prioritize cognitive development,
                  motor skills, social interaction, and emotional growth through
                  play. Through charitable initiatives, we ensure that every
                  child has access to the magic of play. Let the adventure
                  begin!
                </p>
                <button className="btn bg-purple-600 mt-6 me-3 border border-0 hover:bg-rose-400">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
