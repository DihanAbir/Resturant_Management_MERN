import React, { useContext } from "react";
import { cartContext } from "../../App";

const Cart = () => {
  const [cart, setCart] = useContext(cartContext);

  return (
    <div>
      <p>cart {cart.length}</p>
      {cart.map((cartItem) => (
        <div className="border">
          <p>Name: {cartItem.name}</p>
          <p>Price: {cartItem.price}</p>
          <p>Quantity: {cartItem.quantity.totalQuantity}</p>
          <h6 className="text-success">Total Tax: {cartItem.price * cartItem.quantity.totalQuantity * 0.15}</h6>
          <h1>Total price: {cartItem.price * cartItem.quantity.totalQuantity}</h1>
        </div>
      ))}
    </div>
  );
};

export default Cart;
