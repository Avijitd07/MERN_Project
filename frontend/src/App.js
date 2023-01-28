import './App.css';
import axios from "axios"
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WebFont from 'webfontloader';
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import { Routes } from "react-router-dom";
import React from 'react';
import Loader from './component/layout/Loader/Loader';
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from './component/User/LoginSignUp';
import store from './store';
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/Updateprofile.js"
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js"
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from './component/Cart/Payment';
import OrderSuccess from './component/Cart/OrderSuccess';
import MyOrders from './component/Order/MyOrders.js';
import OrderDetails from './component/Order/OrderDetails';
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from './component/Admin/NewProduct';
import UpdateProduct from './component/Admin/UpdateProduct';
import OrderList from './component/Admin/OrderList';
import ProcessOrder from './component/Admin/ProcessOrder';
import UsersList from './component/Admin/UsersList';
import UpdateUser from './component/Admin/UpdateUser';
import ProductReviews from './component/Admin/ProductReviews';
// import NotFound from './component/layout/Not Found/NotFound';

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("")


  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    });
    store.dispatch(loadUser());

    getStripeApiKey()
  }, []);

  return (
    <>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Routes>
            <Route exact path="/process/payment" element={<ProtectedRoute />}>
              <Route exact path="/process/payment" element={<Payment />} />
            </Route>
          </Routes>
        </Elements>
      )}
      <Routes>

        <Route path="/" element={<Home />}></Route>

        <Route path="/product/:id" element={<ProductDetails />}></Route>

        <Route path="/products" element={<Products />}></Route>

        <Route path="/products/:keyword" element={<Products />}></Route>

        <Route path="/search" element={<Search />}></Route>

        <Route path="/login" element={<LoginSignUp />}></Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/account' element={<Profile />} />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/me/update' element={<UpdateProfile />} />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/password/update' element={<UpdatePassword />} />
        </Route>

        <Route path='/password/forgot' element={<ForgotPassword />} />

        <Route path="/password/reset/:token" element={<ResetPassword />} />

        <Route path="/cart" element={<Cart />} />

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/shipping' element={<Shipping />} />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/order/confirm' element={<ConfirmOrder />} />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route exact path="/success" element={<OrderSuccess />} />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route exact path="/orders" element={<MyOrders />} />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route exact path="/order/:id" element={<OrderDetails />} />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route exact path="/admin/dashboard" isAdmin={true} element={<Dashboard />} />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route exact path="/admin/products"
            isAdmin={true} element={<ProductList />} />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />} >
          <Route exact path="/admin/product"
            isAdmin={true} element={<NewProduct />} />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />} >
          <Route exact path="/admin/product/:id"
            isAdmin={true} element={<UpdateProduct />} />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />} >
          <Route exact path="/admin/orders"
            isAdmin={true} element={<OrderList />} />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />} >
          <Route exact path="/admin/order/:id"
            isAdmin={true} element={<ProcessOrder />} />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />} >
          <Route exact path="/admin/users"
            isAdmin={true} element={<UsersList />} />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />} >
          <Route exact path="/admin/user/:id"
            isAdmin={true} element={<UpdateUser />} />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />} >
          <Route exact path="/admin/reviews"
            isAdmin={true} element={<ProductReviews />} />
        </Route>

        {/* <Route exact path="/**" element={<NotFound />} /> */}

      </Routes>
      <Footer />
    </>

  );
};

export default App;
