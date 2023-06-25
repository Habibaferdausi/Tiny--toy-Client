import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ToyCard from "./ToyCard";

const SortByCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("teddyBear");

  useEffect(() => {
    fetch(`https://server-zoo-zone-toys.vercel.app/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="mt-20 lg:pt-10">
        <div data-aos="fade-down">
          <p
            className="text-purple-600 font-bold  lg:mt-20 text-center text-lg lg:text-5xl"
            style={{ fontFamily: "Goodvibes, cursive" }}
          >
            Shop By <span className="text-blue-400 ">Categories</span>
          </p>
        </div>
        <div
          className="tab-container mt-10 lg:pt-11 text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="text-center w-100 m-auto">
            <div className="tabs flex justify-center text-lg items-center">
              <div
                onClick={() => handleTabClick("teddyBear")}
                className={`tab  tab-bordered teddyBear ${
                  activeTab == "teddyBear"
                    ? "text-green-500 text-2xl font-bold pb-3 tab-active"
                    : " text-red-400 text-2xl pb-3 font-bold"
                }`}
              >
                Teddy
              </div>
              <div
                onClick={() => handleTabClick("dinosaur")}
                className={`tab tab-bordered dinosaur ${
                  activeTab == "dinosaur"
                    ? "text-green-500 text-2xl pb-3 font-bold tab-active"
                    : " text-red-400 text-2xl pb-3 font-bold"
                }`}
              >
                Dinosaur
              </div>
              <div
                onClick={() => handleTabClick("horse")}
                className={`tab tab-bordered horse ${
                  activeTab == "horse"
                    ? "text-green-500 pb-3 text-2xl font-bold tab-active"
                    : " text-red-400 pb-3 text-2xl font-bold"
                }`}
              >
                Horse
              </div>
            </div>
          </div>
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-4 mx-6 gap-3  mt-5 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {toys?.map((toy) => {
            // Add this line for debugging
            return toy && <ToyCard toy={toy} key={toy._id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SortByCategory;
