import React from "react";

const PostView = () => {
  return (
    <div className="mt-10 lg:pt-11 mb-20 mx-auto ">
      <div className="stats shadow bg-purple-100 p-8 flex flex-wrap justify-center items-center">
        <div className="stat w-full md:w-auto mb-5 md:mb-0 md:mr-5 lg:mr-20 lg:pr-20">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Users</div>
          <div className="stat-value text-primary">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat w-full md:w-auto mb-5 md:mb-0 md:mr-5 lg:mr-20 lg:pr-20">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat w-full md:w-auto">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-value text-success">96%</div>
          <div className="stat-title">Delivery done</div>
          <div className="stat-desc text-secondary">20 delivery remaining</div>
        </div>
      </div>
    </div>
  );
};

export default PostView;
