import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="">
      <div>
        <div className="mx-10 text-start lg:mt-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 mt-2 ">
            <div className=" text-start">
              <div>
                <h1 className="text-amber-700 text-4xl  mb-5  font-semibold ">
                  About Us
                </h1>
              </div>

              <div>
                <p className="mt-4  mb-3 me-3 text-lg me-4 text-gray-700 ">
                  Welcome to Zozo Toys, where imagination knows no bounds!
                  Discover a world filled with the finest toys from around the
                  globe, carefully selected for quality and child-friendly
                  materials. Our friendly staff is here to assist you, providing
                  a personalized experience that sparks joy in every child's
                  heart. At Zozo Toys, we prioritize cognitive development,
                  motor skills, social interaction, and emotional growth through
                  play. Through charitable initiatives, we ensure that every
                  child has access to the magic of play. Experience the
                  enchantment of Zozo Toys—where dreams take flight and smiles
                  light up faces. Let the adventure begin!
                </p>
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className=" border rounded "
            >
              <img
                src="https://images.unsplash.com/photo-1611575437248-5418a9b19d79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
                alt=""
                className=" rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
