import React from "react";
import Banner from "./Banner";
import Header from "./Header";
// import FoodType from "./FoodType";
// import SearchFilter from "./SearchFilter";

// import Data from "./Data.json"
import Contents from "./Contents";
import Footer from "./Footer";
export default function Home() {
  return (
    <div>
      <div>
        <Header/>
        <Banner />
        <Contents/>
        {/* <FoodType />
        <SearchFilter /> */}
        <Footer/>
      </div>
    </div>
  );
}
