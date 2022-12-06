import React, { Fragment, useEffect } from 'react';
import { CgMouse } from "react-icons/all";
import "./Home.css";
//import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from './Product.js';
import Loader from '../layout/Loader/Loader';



const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader/>
      ) : (
        <Fragment>
        <MetaData title="ECOMMERCE" />
        <div className='banner'>
          <p>Welcome to Ecommerce</p>
          <h1>FIND AMAZING PRODUCT BELOW</h1>
          <a href='#container'>
            <button>
              Scroll <CgMouse />
            </button>
          </a>
        </div>
        <h2 className="homeHeading">Featured products</h2>
        <div className="container" id="container">
          {products && products.map((product) => <ProductCard key={product._id} product={product} />)}
        </div>
      </Fragment>
      )}
    </Fragment>
  );

};

export default Home