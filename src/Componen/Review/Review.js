import React from "react";
import "./Review.scss";
import profile from "../../Resources/Image/chef-cook-food-33614.png";
import ReviewSlider from "./ReviewSlider";

function Review() {
  return (
    <div className="primary-spacing headFont container-fluid text-center">
      <h1>Our Client's Review</h1>
      <div className="reviewSection">
        <div className="main-div py-5 container">
          <ReviewSlider />
        </div>
        {/* <div className="col-4 border-left">
          <div className="row">
            <div className="col-3 user">
              <div className="image">
                <img className="img-fluid" src={profile} alt="" />
              </div>
            </div>
            <div className="col-8 review">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit explicabo rem, ad eius ratione illum totam itaque
                voluptates vitae asperiores modi maxime unde impedit, cum
                officiis dolore nisi minus quos.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 border-left">
          <div className="row">
            <div className="col-3 user">
              <div className="image">
                <img className="img-fluid" src={profile} alt="" />
              </div>
            </div>
            <div className="col-8 review">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit explicabo rem, ad eius ratione illum totam itaque
                voluptates vitae asperiores modi maxime unde impedit, cum
                officiis dolore nisi minus quos.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Review;
