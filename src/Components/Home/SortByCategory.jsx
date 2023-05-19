import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ToyCard from "./ToyCard";

const SortByCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("horse");

  useEffect(() => {
    fetch(`http://localhost:5000/allToys/${activeTab}`)
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
      <div>
        <h1 className="title text-center mt-5 p-5">Sort by categories</h1>
        <div className="tab-container text-center">
          <div className="text-center w-100 m-auto">
            <div className="tabs flex justify-center items-center">
              <div
                onClick={() => handleTabClick("teddyBear")}
                className={`tab  tab-bordered teddyBear ${
                  activeTab == "teddyBear" ? "text-red-500 tab-active" : ""
                }`}
              >
                teddy
              </div>
              <div
                onClick={() => handleTabClick("dinosaur")}
                className={`tab tab-bordered dinosaur ${
                  activeTab == "dinosaur" ? " text-red-500 tab-active" : ""
                }`}
              >
                dinosaur
              </div>
              <div
                onClick={() => handleTabClick("horse")}
                className={`tab tab-bordered horse ${
                  activeTab == "horse" ? "text-red-500 tab-active" : ""
                }`}
              >
                horse
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {toys?.map((toy) => (
            <ToyCard toy={toy} key={toy.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortByCategory;
