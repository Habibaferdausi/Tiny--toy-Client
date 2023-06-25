import React, { useEffect } from "react";
import Banner from "./Banner";
import About from "./About";
import Gallery from "./Gallery";
import SortByCategory from "./SortByCategory";
import SmallBanner from "./SmallBanner";
import PostView from "./PostView";
import Services from "./Services";

const Home = () => {
  useEffect(() => {
    document.title = "TINY TOY | Home";
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Gallery></Gallery>
      <SortByCategory></SortByCategory>
      <SmallBanner></SmallBanner>
      <PostView></PostView>
    </div>
  );
};

export default Home;
