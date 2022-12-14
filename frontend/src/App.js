import './App.css';
import Header from "./component/layout/Header/Header.js"
import { BrowserRouter as Router, Route } from "react-router-dom"
import webFont from 'webfontloader'
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home.js"
import { Routes } from "react-router-dom"
import React from 'react';
import Loader from './component/layout/Loader/Loader';
import ProductDetails from "./component/Product/ProductDetails"
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"
import LoginSignUp from './component/User/LoginSignUp';


function App() {
  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:keyword" element={<Products/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/login" element={<LoginSignUp/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
