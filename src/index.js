import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes } from "react-router";
import { Route } from "react-router";




const root = createRoot(window.bodyTag);
 root.render(
 <BrowserRouter>
 <Routes> 
   <Route path="/" element={<Home />} />  
   <Route path="/home" element={<Home />} />  
   <Route path="/gallery" element={<Gallery />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/about" element={<About />} />
 </Routes>
 </BrowserRouter>
);