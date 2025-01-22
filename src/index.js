import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";
import { output } from "../utils/output";

const root = createRoot(window.bodyTag);
 root.render(
 <BrowserRouter>
  <Routes>
     <Route path="/home" element={<Home />} />  
     <Route path="/gallery" element={<Gallery />} />  
     <Route path="/contact" element={<Contact />} />  
     <Route path="/about" element={<About />} />  
  </Routes>
</BrowserRouter>
 );