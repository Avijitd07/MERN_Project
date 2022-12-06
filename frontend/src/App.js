import './App.css';
import Header from "./component/layout/Header/Header.js"
import { BrowserRouter as Router, Route } from "react-router-dom"
import webFont from 'webfontloader'
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home.js"
import { Routes } from "react-router-dom"
import React from 'react';
import Loader from './component/layout/Loader/Loader';



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
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
