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
            <span className="text-blue-400 ms-2">Provide</span>
          </p>
        </div>
        <div
          className="grid  grid-cols-2 lg:grid-cols-4 gap-7 mx-7 lg:mx-20"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div>
            <div className="card card-compact w-96 h-80  bg-base-100 shadow-xl">
              <figure>
                <Lottie animationData={sell} loop={true} className="h-40" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Sale</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-compact w-96 h-80 bg-base-100 shadow-xl">
              <figure>
                <Lottie animationData={store} loop={true} className="h-40" />
              </figure>
              <div className="card-body">
                <h1 className="card-title">Online Store</h1>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-compact w-96 h-80  bg-base-100 shadow-xl">
              <figure>
                <Lottie animationData={call} loop={true} className="h-40 " />
              </figure>
              <div className="card-body">
                <h1 className="card-title">Support</h1>
                <p>Call our support team 24/7</p>
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
              <div className="card-body">
                <h2 className="card-title"> Delivery</h2>
                <p>Fast And Easy Home Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
