import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";
import { Home } from "../Views/Home";
import { Link } from "react-router";

const root = createRoot(window.bodyTag);
 root.render(
 <BrowserRouter>
  <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/react-navigation" element={<Home />} /> 
     <Route path="/gallery">Gallery</Route>
     <Route path="/gallery react-navigation">Gallery</Route>
     <Route>Contact</Route>
     <Route>About</Route>
  </Routes>
</BrowserRouter>
 );
