import React, { useContext } from "react";
import logo from "../../Resources/logo2.png";
import './Header.scss';

import { cup } from "../../Icons/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { cartContext } from "../../App";

const Header = () => {
  const [ cart, setCart ] = useContext(cartContext)
  
  return (
    <div className="container-fluid py-4 header-section">
      <div className="row justify-content-between">
        <div className="col-2 ">
          <div className="logo">
            <img className="img-fluid" src={logo} alt="logo" />
          </div>
        </div>

        <div className="col-3">
          <ul className="d-flex justify-content-between list-unstyled">
            <Link to='/Cart'><li className="btn btn-light">
            <FontAwesomeIcon icon={cup} /> {cart.length}
            </li></Link>
            <Link to='/Login'><li className="btn btn-primary">Login</li></Link>
            <Link to='/todo'><li className="btn btn-primary">Todo</li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;