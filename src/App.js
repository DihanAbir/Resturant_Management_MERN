import React, { createContext, useState } from "react";
import "./App.css";
import Landing from "./Componen/LandingOld/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleFoodItem from "./Componen/SingleFoodItem/SingleFoodItem";
import Todo from "./Componen/Todo/Todo";
import Login from "./Componen/Login/Login";
import Header from "./Componen/Header/Header";
import Cart from "./Componen/Cart/Cart";
import CheckOut from "./Componen/CheckOut/CheckOut";
import Dashboard from "./Componen/Dashboard/Dashboard";
import Blog from "./Componen/Blog/Blog";

import Footer from "./Componen/Footer/Footer";
import SingleBlog from "./Componen/Blog/SingleBlog";

export const cartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <cartContext.Provider value={[cart, setCart]}>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Landing></Landing>
            </Route>
            <Route path="/singleFooditem/:id">
              <SingleFoodItem></SingleFoodItem>
            </Route>
            <Route path="/todo">
              <Todo></Todo>
            </Route>
            <Route path="/Login">
              <Login></Login>
            </Route>
            <Route path="/cart">
              <Cart></Cart>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/singleBlog">
              <SingleBlog></SingleBlog>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/checkOut">
              <CheckOut></CheckOut>
            </Route>
            {/* <Route path="/checkOut">
          <NoRoute ></NoRoute>
        </Route> */}
          </Switch>
          <Footer></Footer>
        </Router>
      </cartContext.Provider>
    </div>
  );
}

export default App;
