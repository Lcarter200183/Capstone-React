import { createRoot } from "react-dom/client";
import React from "react";
import { Link } from "react-router";


const root = createRoot(window.bodyTag);
 root.render(

 <header>
  <nav>
    <Link to="home">Home |</Link>
    <Link to="gallery">Gallery |</Link>
    <Link to="contact">Contact |</Link>
    <Link to="about">About </Link>
  </nav>
 </header>
);