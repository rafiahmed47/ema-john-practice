import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import Review from "./Components/Review/Review";
import Manage from "./Components/Manage/Manage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Alert from "./Components/Alert/Alert";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Shipping from "./Components/Shipping/Shipping";
import Login from "./Components/Login/Login";
function App() {
  return (
    <>
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
            <Login></Login>
          </Route>
          <Route path="/shipping">
            <Shipping />
          </Route>
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


    </>
  );
}

export default App;
