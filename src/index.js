import { createRoot } from "react-dom/client";
import React from "react";
import { Home } from "./Views/Home";
import { Gallery } from "./Views/Gallery";
import { BrowserRouter, Route, Routes } from "react-router";
import { Contact } from "./Views/Contact";
import { About } from "./Views/About";

const domain = window.location.hostname;
let rootPath = "";
if (domain === "lcarter200183.github.io") rootPath = "/Capstone-React";

const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={`${rootPath}/`} element={<Home />} />
      <Route path={`${rootPath}/gallery`} element={<Gallery />} />
      <Route path={`${rootPath}/contact`} element={<Contact />} />
      <Route path={`${rootPath}/about`} element={<About />} />
    </Routes>
  </BrowserRouter>
);
