import React from "react";

const Gallery = () => {
  return (
    <div>
      <section className="lg:mt-20 mt-7">
        <div data-aos="fade-down">
          <p
            className="text-purple-600 font-bold  lg:mt-20 text-center text-lg lg:text-5xl"
            style={{ fontFamily: "Goodvibes, cursive" }}
          >
            Photo <span className="text-blue-400 ">Gallery</span>
          </p>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-5 lg:mt-11 mx-10 mb-20"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div
            className="h-80"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <img
              src="https://img.freepik.com/free-photo/smiling-mother-daughter-standing-supermarket_171337-2364.jpg?w=740&t=st=1684483658~exp=1684484258~hmac=5a1c79c4d5fc38b820beb561888bffa3d97d8dae0260d8b324b6225c6270d658"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="h-80"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <img
              src="https://images.pexels.com/photos/1860160/pexels-photo-1860160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="h-80"
            data-aos="fade-up-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <img
              src="https://img.freepik.com/free-photo/grappling-arcade-machine-with-stuffed-toys_23-2148253108.jpg?w=360&t=st=1684483701~exp=1684484301~hmac=1d291ee9a56be21ff4dbf1248f422cac6b6988f7bda061f30f3258e3dd69a2a6"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="h-80"
            data-aos="fade-up-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <img
              src="https://images.unsplash.com/photo-1612731614590-7dc805867afa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=371&q=80"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="h-80"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <img
              src="https://images.unsplash.com/photo-1557861387-33ea4b5da799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="h-80"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <img
              src="https://images.unsplash.com/photo-1606495053343-b7b426afd445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="h-80"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <img
              src="https://images.unsplash.com/photo-1585224652632-5cfa1f38d184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="h-80"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <img
              src="https://images.unsplash.com/flagged/photo-1558706379-e9698f05d675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=823&q=80"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
