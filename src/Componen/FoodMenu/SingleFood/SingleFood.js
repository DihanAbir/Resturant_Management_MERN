import React from "react";
import "./SingleFood.scss";

import { Link } from "react-router-dom";

const SingleFood = ({ item, index }) => {
  return (
    <>
      {
        <div className="col-4">
          <Link
            style={{ textDecoration: "none" }}
            to={"/singleFooditem/" + index}
          >
            <div className="p-4 my-4 mx-2 singleFood-mainsection">
              <div className="img">
                <img className="img-fluid" src={item.image} alt={item.image} />
              </div>

              <h3 style={{ fontFamily: "san-sarif" }}>{item.name}</h3>
              <b style={{ color: "#888" }}>{item.category}</b>
              <h4>${item.price}</h4>
            </div>
          </Link>
        </div>
      }
    </>
  );
};

export default SingleFood;
