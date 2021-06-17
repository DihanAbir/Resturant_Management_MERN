import React, { useContext } from "react";
// import logo from "../../Resources/Custome/logo.png";
import "./Header.scss";

import { cup } from "../../Icons/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { cartContext } from "../../App";

const Header = () => {
  const [cart, setCart] = useContext(cartContext);
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 5 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("header").style.padding = "40px";
    } else {
      document.getElementById("header").style.padding = "10px";
    }
  }

  return (
    <div className="container-fluid header-section">
      <div className="row justify-content-between">
        {/* <div className="col-2 "></div> */}

        <div id="header" className="col-12 d-flex justify-content-between">
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="">
              <p>DeBila</p>
            </div>
          </Link>
          <ul className=" list-unstyled">
            <Link to="/Cart">
              <li className="btn btn-light">
                <FontAwesomeIcon icon={cup} /> {cart.length}
              </li>
            </Link>
            <Link to="/Login">
              <li className="btn btn-primary">Login</li>
            </Link>
            <Link to="/blog">
              <li className="btn btn-primary">Blog</li>
            </Link>
            <Link to="/dashboard">
              <li className="btn btn-primary">Dashboard</li>
            </Link>
            {/* <Link to="/todo">
              <li className="btn btn-primary">Todo</li>
            </Link> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
