import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Resources/logo2.png";
import "./Login.css";

const Login = () => {
  // states
  const [submit, setSubmit] = useState("sign in");

  return (
    <div className="container-fluid main-section">
        <Link to="/" className="text-light">
        <button className="btn btn-primary">Home </button>
      </Link>
      <div className="row">
        <div className="col-2 m-auto">
          <div>
            <div className="logo logindiv">
              <img className="img-fluid" src={logo} alt="Brand logo" />
            </div>
          </div>

          <form>
            {submit === "sign in" ? (
              <div>
                <input placeholder="First name" />
                <input placeholder="Last name" />
                <input className="btn btn-success" type="submit" />
              </div>
            ) : (
              <div>
                <input placeholder="First name" />
                <input placeholder="Last name" />
                <input placeholder="Email" />
                <input placeholder="Password" />
                <input className="btn btn-success" type="submit" />
              </div>
            )}
          </form>
          <button
            className="btn btn-warning"
            onClick={() => setSubmit("sign up")}
          >
            Sign up
          </button>
          <button
            className="btn btn-warning"
            onClick={() => setSubmit("sign in")}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
