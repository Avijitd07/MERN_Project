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
import store from './store'
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    });
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:keyword" element={<Products />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/login" element={<LoginSignUp />}></Route>
        <Route path='/account' element={<Profile/>}/>
 
      </Routes>
      <Footer />
    </>

  );
};

export default App;
