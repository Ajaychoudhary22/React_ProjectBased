import React from 'react'
import Home from "../Components/Home";
import Product from "../Components/Product";
import About from "../Components/About";
import Service from '../Components/Service';
import { Routes, Route } from "react-router-dom";
import ProductDetails from '../Components/ProductDetails';
import ServiceDetails from '../Components/ServiceDetails';

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
         <Route path="/product/details/:name" element={<ProductDetails />} />
         <Route path='/service'element={<Service/>}>
         <Route path='/service/Details'element={<ServiceDetails/>}/>
         </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default Mainroutes
