import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useState} from "react";
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import ProductItems from './components/ProductItems';
import NavBAr from './components/Navbar';



export default function RoutesConfig() {

   
  return (
    <div className="App">
        
       <BrowserRouter>
       <NavBAr></NavBAr>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/product" element={<Product />} />
    <Route path="/product/:id" element={<ProductItems />} />
    <Route path="*" element={()=><h2>404 not found</h2>} />
   
    </Routes>
  </BrowserRouter>
      
    </div>
  );
}


