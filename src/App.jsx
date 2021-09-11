import React from 'react'
import HomePage from "./pages/HomePage"
// import logo from "./banner1.jpeg";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle" 
import VisionPage from "./pages/VisionPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import FeedbackPage from "./pages/FeedbackPage"
import ServicePage from "./pages/ServicePage"
import ProductPage from './pages/ProductPage';
import TCPage from './pages/TCPage';
// import Cart from "./components/checkout/cart";
// import Temp from "./components/weather/temp";
// import UseReducer from "./components/hooks/useReducer";
// import UseState from "./components/hooks/useReducer";
// import UseEffect from "./components/hooks/useEffect";
import "./components/nav/navappstyle.css";


const App = () => {
  return (
    <>
      <div className="App">
        <header>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/home" component={HomePage} />
            <Route path="/product" component={ProductPage} />
            <Route path="/vision" component={VisionPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/service" component={ServicePage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/feedback" component={FeedbackPage} />
            <Route path="/termsandconditions" component={TCPage} />
            <Redirect to="/" />
          </Switch>
        </header>
        {/* <Temp /> */}
        {/* <Cart />
      <Desease /> */}
        {/* <UseReducer/> */}
      </div>
    </>
  );
};

export default App;
