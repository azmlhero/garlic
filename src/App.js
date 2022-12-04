import "./App.css";
import React from 'react'
import Home from "./components/LandingPage/Home";
import Product from "./components/Product";
import Bill from "./components/Bill";
import Contact from "./components/Contact";
// import ComplainSuggestions from "./Pages/User_Pages/Profile/ComplainSuggestions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Order from "./components/CheckoutForm/Order";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/bill" element={<Bill />} />

          <Route exact path="/contact" element={<Contact />} />

          {/* <Route exact path="/profile/complaint" element={<ComplainSuggestions />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
/*
 <Route exact path="/" element={<HomePage />} />
 <Route exact path="/product/:id" element={<Product />} />
 import { NavLink, useNavigate } from "react-router-dom";

 <NavLink
 to="/services"
 className={({ isActive }) =>
   c(
     isActive
       ? "bg-gray-900 text-white"
       : "text-gray-300 hover:bg-gray-700 hover:text-white",
     "rounded-md bg-gray-800 px-3 py-2 text-sm font-medium text-white"
   )
 }
>
 Services
</NavLink>
*/
