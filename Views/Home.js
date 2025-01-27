import React from "react";
import { Link } from "react-router";
import "./Home.scss";

 export function Home() {
    const center ={ justifySelf: "center"};
    const kleader = { fontFamily: "kleader"};
    return (
    
     <header>
        <nav>
          <Link to="/home">Home |</Link>
          <Link to="gallery">Gallery |</Link>
          <Link to="/contact">Contact |</Link>
          <Link to="/about">About </Link>
        </nav>
     </header> 
     
    );
}
