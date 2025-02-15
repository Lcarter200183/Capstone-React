import { createRoot } from "react-dom/client";
import React from "react";
import { Home } from "./Views/Home";
import { Gallery } from "./Views/Gallery";
import { BrowserRouter, Route, Routes } from "react-router";
import { Contact } from "./Views/Contact";
import { About } from "./Views/About";
import { Footer } from "./Views/Footer";

const root = createRoot(window.bodyTag);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/react-navigation/" element={<Home />} />
      <Route path="/reacy-navigation/gallery" element={<Gallery />} />
      <Route path="/react-navigation/contact" element={<Contact />} />
      <Route path="/react-navigation/about" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
