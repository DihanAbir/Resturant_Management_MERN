import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { cartContext } from "../../App";
import { itemsdata } from "../../Resource/Resource";
import "./SingleFoodItem.scss";

const SingleFoodItem = () => {
  const { id } = useParams();

  // states
  const [cart, setCart] = useContext(cartContext);
  const [quantity, setQuantity] = useState({
    totalQuantity: 1,
    // tex: '15',
    totalPrice: 0,
  });

  // custome function
  const FilterdSingleFoodItems = itemsdata.find(
    (item) => item.index === parseInt(id)
  );
  const { name, index, price, extra, image } = FilterdSingleFoodItems;

  // useEffect
  const quantityhandler = (e) => {
    var value = e.target.value;
    console.log(value);
    console.log(price);

    var totalPrice = value * price;
    console.log(totalPrice);

    console.log(quantity);
    setQuantity({ totalQuantity: value, totalPrice: totalPrice });
    console.log(quantity);
  };

  const cartHandler = () => {
    const cartObj = { name, index, price, extra, image, quantity };
    console.log(cartObj);
    setCart([...cart, cartObj]);
  };
  console.log(cart);

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "6%" }}>
        <div className="col-6">
          <h1 className="text-danger">{name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero a
            nulla nobis eaque dolorem voluptatem ipsam modi eum veniam
            temporibus?
          </p>
          <div className="row">
            <div className="col-6">
              <h2>${price}</h2>
            </div>
            <div className="col-6">
              {" "}
              <input
                type="number"
                placeholder="1"
                onChange={quantityhandler}
                className="cartInput px-2"
              />
            </div>
          </div>
          <button className="btn btn-danger" onClick={cartHandler}>
            Add To Cart
          </button>
        </div>
        <div className="col-6">
          <div className="img">
            <img className="img-fluid" src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodItem;
