import React from "react";

function CheckOut() {
  return (
    <div>
      <p>this is a checkout page</p>
      <div className="d-block mx-auto border">
        <p>Enter your email address</p>
        <input className="border" placeholder="Enter your email" type="email" />
      </div>
    </div>
  );
}

export default CheckOut;
