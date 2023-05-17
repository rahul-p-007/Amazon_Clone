import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/pages/Checkout/Checkout";
import Login from "./components/pages/Login/Login";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="/login" element={<Login />} />

          <Route path="/checkout" element={[<Header />, <Checkout />]}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
