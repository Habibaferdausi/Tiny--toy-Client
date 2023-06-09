import React from "react";
import Lottie from "lottie-react";
import call from "../../../public/call.json";
import delivery from "../../../public/delivery.json";
import store from "../../../public/store.json";
import sell from "../../../public/sell.json";

const Services = () => {
  return (
    <div>
      <section className="mt-10">
        <div data-aos="fade-down">
          <p
            className="text-purple-600 font-bold  lg:mt-20 mb-7 lg:mb-20 text-center text-lg lg:text-5xl"
            style={{ fontFamily: "Goodvibes, cursive" }}
          >
            We
            <span className="text-blue-400 ps-4">Provide</span>
          </p>
        </div>
        <div
          className="grid  grid-cols-2 lg:grid-cols-4 gap-7 mb-9 mx-7 mt-5 lg:mx-20"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div>
            <div className="card card-compact w-96 h-80  bg-base-100 shadow-xl">
              <figure>
                <Lottie animationData={sell} loop={true} className="h-40" />
              </figure>
              <div className="card-body text-center">
                <h1 className="font-semibold text-2xl text-red-400">Sale</h1>
                <p className=" text-base text-gray-700">
                  Find the perfect toy at a discounted price
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-compact w-96 h-80 bg-base-100 shadow-xl">
              <figure>
                <Lottie animationData={store} loop={true} className="h-40" />
              </figure>
              <div className="card-body text-center">
                <h1 className="font-semibold text-2xl text-red-400">
                  Online Store
                </h1>
                <p className=" text-base text-gray-700">
                  Shop quality toys online, bring play home.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-compact w-96 h-80  bg-base-100 shadow-xl">
              <figure>
                <Lottie animationData={call} loop={true} className="h-40 " />
              </figure>
              <div className="card-body text-center">
                <h1 className="font-semibold text-2xl text-red-400">Support</h1>
                <p className=" text-base text-gray-700">
                  Instant assistance from our dedicated support call center.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-compact w-96  h-80 bg-base-100 shadow-xl">
              <figure>
                <Lottie
                  animationData={delivery}
                  loop={true}
                  className="h-40 "
                />
                ;
              </figure>
              <div className="card-body text-center">
                <h1 className="font-semibold text-2xl text-red-400">
                  {" "}
                  Delivery
                </h1>
                <p className=" text-base text-gray-700">
                  Joyful delivery, bringing joy to your doorstep..
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
