import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";
import { Home } from "../Views/Home";
import { Gallery } from "../Views/Gallery"; 




const bodytag = document.getElementById("bodytag")
const root = createRoot(bodytag);
 root.render(
 <BrowserRouter>
  <Routes>
     <Route path={`${rootPath}/`} element={<Home />} /> 
     <Route path={`${rootPath}/gallery`} element={<Gallery />} /> 
  </Routes>
</BrowserRouter>
 );