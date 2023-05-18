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
        <h1 className="title text-center mt-5 p-5">Available Job's</h1>
        <div className="tab-container text-center">
          <div className="text-center w-100 m-auto">
            <div className="tabs d-flex justify-content-center align-items-center">
              <div
                onClick={() => handleTabClick("teddyBear")}
                className={`tab  tab2 teddyBear ${
                  activeTab == "teddyBear" ? " bg-danger text-white" : ""
                }`}
              >
                teddy
              </div>
              <div
                onClick={() => handleTabClick("horse")}
                className={`tab  tab2 horse ${
                  activeTab == "horse" ? " bg-danger text-white" : ""
                }`}
              >
                horse
              </div>
            </div>
          </div>
        </div>
        <div>
          {toys?.map((toy) => (
            <ToyCard toy={toy} key={toy.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortByCategory;
