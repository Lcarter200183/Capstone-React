import React from "react";
import { Link } from "react-router";



export function Home() {
    return (
     <>
     <header>
        <nav>
          <Link to="/home">Home |</Link>
          <Link to="gallery">Gallery |</Link>
          <Link to ="/contact">Contact |</Link>
          <Link>About </Link>
        </nav>
     </header> 
     </>
    );
    
}