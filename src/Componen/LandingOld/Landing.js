import React from "react";
import Banner from "../Banner/Banner";
import FaqAsk from "../FAQ/FAQ";
import FoodMenu from "../FoodMenu/FoodMenu";
import SignatureDish from "../FoodMenu/SignatureDish/SignatureDish";
import BestOffers from "../FoodMenu/BestOffers/BestOffers";
import Review from "../Review/Review";
// import Header from '../Header/Header';

const Landing = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <Banner></Banner>
      <div className="container-fluid text-center">
        <SignatureDish />
        <BestOffers />
        <FoodMenu></FoodMenu>
        <FaqAsk></FaqAsk>
        <Review></Review>
      </div>
    </div>
  );
};

export default Landing;
