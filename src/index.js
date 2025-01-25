import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";
import { Home } from "../Views/Home";
import { Gallery } from "../Views/Gallery"; 
import { Contact } from "../Views/Contact";
import { About } from "../Views/About";


const root = createRoot(window.bodyTag);
 root.render(
 <BrowserRouter>
  <Routes>
     <Route path="/home" element={<Home />} />  
     <Route path="/gallery" element={<Gallery />} />  
     <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
 );