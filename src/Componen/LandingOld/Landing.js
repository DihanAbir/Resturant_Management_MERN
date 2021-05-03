import React from "react";
import Banner from "../Banner/Banner";
import FaqAsk from "../FAQ/FAQ";
import FoodMenu from "../FoodMenu/FoodMenu";
import Footer from "../Footer/Footer";
import Review from "../Review/Review";
// import Header from '../Header/Header';

const Landing = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <Banner></Banner>
      <FoodMenu></FoodMenu>
      <FaqAsk></FaqAsk>
      <Review></Review>
    </div>
  );
};

export default Landing;
