import React from "react";

const Gallery = () => {
  return (
    <div>
      <section className="mt-20">
        <div data-aos="fade-down">
          <h1 className="text-black text-5xl  text-center mb-5 mt-12 font-semibold ">
            Photo Gallery
          </h1>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-5 mx-10 mb-20"
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
              src="https://img.freepik.com/free-photo/front-view-cute-little-baby-boy-cupcake-teddybear_23-2148415544.jpg?w=740&t=st=1684349528~exp=1684350128~hmac=bb0be53fa3d4893f44a56562cf01ccf54c1df3ffbe46ae701b70a4e93ff1b7d4"
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
              src="https://images.pexels.com/photos/6390193/pexels-photo-6390193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
