import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";

const root = createRoot(window.bodyTag);
 root.render(
 <BrowserRouter>
  <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/home" element={<Home />} />  
 </Routes>
</BrowserRouter>
 );