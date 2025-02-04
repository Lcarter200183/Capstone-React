import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";
import { Home } from "../Views/Home";
import { Gallery } from "../Views/Gallery"; 

const domain = window.location.hostname
let rootPath ="";
if (domain === "lcarter200183.git.io") rootPath = "/react-navigation";


const root = createRoot(window.bodyTag);
 root.render(
 <BrowserRouter>
  <Routes>
     <Route path="/" element={<Home />} /> 
     <Route path="/gallery" element={<Gallery />} /> 
  </Routes>
</BrowserRouter>
 );