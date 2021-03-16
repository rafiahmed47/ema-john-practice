import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/shop/Shop";
import Review from "./components/review/Review";
import Manage from "./components/manage/Manage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Alert from "./components/alert/Alert";
import ProductDetails from "./components/productDetails/ProductDetails";
import Login from "./components/Login/Login";
import Shipping from "./components/Shipping/Shipping";
import privateRoute from "./components/privateRoute/privateRoute";
export const userContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/manage">
            <Manage></Manage>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <privateRoute path="/shipping">
            <Shipping />
          </privateRoute>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>

          </Route>
          <Route path="*">
            <Alert></Alert>
          </Route>
        </Switch>
      </Router>


    </userContext.Provider>
  );
}

export default App;
