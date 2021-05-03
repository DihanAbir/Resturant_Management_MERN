import React from "react";

import profile from "../../Resources/Image/chef-cook-food-33614.png";

function ReviewSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div {...settings}>
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
              voluptates vitae asperiores modi maxime unde impedit, cum officiis
              dolore nisi minus quos.
            </p>
          </div>
        </div>
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
              voluptates vitae asperiores modi maxime unde impedit, cum officiis
              dolore nisi minus quos.
            </p>
          </div>
        </div>
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
              voluptates vitae asperiores modi maxime unde impedit, cum officiis
              dolore nisi minus quos.
            </p>
          </div>
        </div>
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
              voluptates vitae asperiores modi maxime unde impedit, cum officiis
              dolore nisi minus quos.
            </p>
          </div>
        </div>
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
              voluptates vitae asperiores modi maxime unde impedit, cum officiis
              dolore nisi minus quos.
            </p>
          </div>
        </div>
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
              voluptates vitae asperiores modi maxime unde impedit, cum officiis
              dolore nisi minus quos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSlider;
