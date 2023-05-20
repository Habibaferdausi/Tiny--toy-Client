import React from "react";
import Banner from "./Banner";
import About from "./About";
import Gallery from "./Gallery";
import SortByCategory from "./SortByCategory";
import SmallBanner from "./SmallBanner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Gallery></Gallery>
      <SortByCategory></SortByCategory>
      <SmallBanner></SmallBanner>
    </div>
  );
};

export default Home;
