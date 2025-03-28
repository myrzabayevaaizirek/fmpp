import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs"; 
import ContactUs from "./pages/ContactUs";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} /> {}
        <Route path="/contactus" element={<ContactUs />} /> {}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);