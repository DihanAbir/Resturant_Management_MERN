import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../App";

const Cart = () => {
  const [cart, setCart] = useContext(cartContext);

  return (
    <div>
      {cart.map((cartItem) => (
        <div
          className="m-3 p-3"
          style={{
            background: "#grey",
            border: "10px solid salmon",
            borderRadius: "10px",
          }}
        >
          <p>Name: {cartItem.name}</p>
          <p>Price: {cartItem.price}</p>
          <p>Quantity: {cartItem.quantity.totalQuantity}</p>
          <h6 className="text-success">
            Total Tax: {cartItem.price * cartItem.quantity.totalQuantity * 0.15}
          </h6>
          <h1>
            Total price:{" "}
            {cartItem.price * cartItem.quantity.totalQuantity +
              cartItem.price * cartItem.quantity.totalQuantity * 0.15}
          </h1>
        </div>
      ))}

      {cart.length === 0 ? (
        <h1 className="mt-5 text-center text-danger border ">
          Your Cart Is Empty
        </h1>
      ) : (
        <Link to="/checkOut">
          <button className="btn btn-primary">CheckOut</button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
