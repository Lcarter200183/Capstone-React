import { createRoot } from "react-dom/client";
import React from "react";
import { Home } from "./Views/Home";
import { Gallery } from "./Views/Gallery";
import { BrowserRouter, Route, Routes } from "react-router";
import { Contact } from "./Views/Contact";
import { About } from "./Views/About";
import { Footer } from "./Views/Footer";
import "./index.scss";

let rootPath = "";
const bodyTag = document.getElementById("bodyTag");
const root = createRoot(window.bodyTag);
root.render(
  <BrowserRouter>
    <HandleRefresh>
      <Header />
      <Routes>
        <Route path={`${rootPath}/`} element={<Home />} />
        <Route path={`${rootPath}/gallery`} element={<Gallery />} />
        <Route path={`${rootPath}/contact`} element={<Contact />} />
        <Route path={`${rootPath}/about`} element={<About />} />
      </Routes>
      <Footer />
    </HandleRefresh>
  </BrowserRouter>
);
