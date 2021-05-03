import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Resources/logo2.png";
import "./Login.css";

const Login = () => {
  // states
  const [submit, setSubmit] = useState("sign in");

  return (
    <div className="container-fluid main-section">
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
                <input
                  style={{
                    borderRadius: "10px",
                    padding: "5px",
                    background: "white",
                    margin: "10px",
                    border: "1px solid black",
                  }}
                  placeholder="First name"
                />
                <input
                  style={{
                    borderRadius: "10px",
                    padding: "5px",
                    background: "white",
                    margin: "10px",
                    border: "1px solid black",
                  }}
                  placeholder="Last name"
                />
                <input className="btn btn-success" type="submit" />
                <div className="mt-2">
                  <button className="mr-1 btn btn-danger">Google</button>
                  <button className="ml-1 btn btn-danger">Facebook</button>
                </div>
              </div>
            ) : (
              <div>
                <input
                  style={{
                    borderRadius: "10px",
                    padding: "5px",
                    background: "white",
                    margin: "10px",
                    border: "1px solid black",
                  }}
                  placeholder="First name"
                />
                <input
                  style={{
                    borderRadius: "10px",
                    padding: "5px",
                    background: "white",
                    margin: "10px",
                    border: "1px solid black",
                  }}
                  placeholder="Last name"
                />
                <input
                  style={{
                    borderRadius: "10px",
                    padding: "5px",
                    background: "white",
                    margin: "10px",
                    border: "1px solid black",
                  }}
                  placeholder="Email"
                />
                <input
                  style={{
                    borderRadius: "10px",
                    padding: "5px",
                    background: "white",
                    margin: "10px",
                    border: "1px solid black",
                  }}
                  placeholder="Password"
                />
                <input className="btn btn-success" type="submit" />
              </div>
            )}
          </form>
          <button
            className="mr-1 mt-2 text-primary  btn btn-warning"
            onClick={() => setSubmit("sign up")}
          >
            Sign up
          </button>
          <button
            className="ml-1  mt-2 text-primary btn btn-warning"
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
