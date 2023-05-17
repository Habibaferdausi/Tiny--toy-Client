import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="flex">
            <div className="w-1/2">
              <img
                src="https://img.freepik.com/free-vector/shelf-box-full-toys-white_1308-41753.jpg?w=740&t=st=1684341372~exp=1684341972~hmac=32e97ed302499845667422a581087acd059f334b5928803457579496747d339c"
                className="w-full"
              />
            </div>
            <div className="w-1/2">
              <h1>Welcome To Zoo Zoo Toys</h1>
              <p>Ignite Imagination, Inspire Play</p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="flex">
            <div className="w-1/2">
              <img
                src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                className="w-full"
              />
            </div>
            <div className="w-1/2">
              <p>Your text content for slide 2</p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="flex">
            <div className="w-1/2">
              <img
                src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
                className="w-full"
              />
            </div>
            <div className="w-1/2">
              <p>Your text content for slide 3</p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
