import { createRoot } from "react-dom/client";
import React from "react";
import { Home } from "./Views/Home";
import { Gallery } from "./Views/Gallery";
import { BrowserRouter, Route, Routes } from "react-router";
import { Contact } from "./Views/Contact";
import { About } from "./Views/About";
import { Footer } from "./Views/Footer";
import { Header } from "./Views/Header";

const root = createRoot(window.bodyTag);
root.render(
  <BrowserRouter>
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
);
