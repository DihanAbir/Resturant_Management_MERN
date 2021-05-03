import React from "react";
import "./Banner.scss";

// import banner from ""

const Banner = () => {
  return (
    <div style={{ height: "75vh" }} className="banner-mainDIv text-center">
      <div>
        <h4>Best Food is waiting for you belly</h4>
        <div className="search">
          <form className="form-section">
            <input type="text" placeholder="Search your food " />
            <button className="btn mx-2 my-1  btn-danger">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
