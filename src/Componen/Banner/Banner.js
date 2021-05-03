import React from "react";
import "./Banner.scss";

// import banner from ""

const Banner = () => {
  return (
    <div style={{ height: "75vh" }} className="banner-mainDIv text-center">
      <div>
        <h4>Best Food is waiting for you belly</h4>
        <div>
          <form className="mt-4s form-section">
            <input type="text" placeholder="Search your food " />
            <button className="btn my-2  btn-danger">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
