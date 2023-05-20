import React, { useEffect } from "react";
import Banner from "./Banner";
import About from "./About";
import Gallery from "./Gallery";
import SortByCategory from "./SortByCategory";
import SmallBanner from "./SmallBanner";
import PostView from "./PostView";

const Home = () => {
  useEffect(() => {
    document.title = "TINY TOY | Home";
  }, []);
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Gallery></Gallery>
      <SortByCategory></SortByCategory>
      <SmallBanner></SmallBanner>
      <PostView></PostView>
    </div>
  );
};

export default Home;
