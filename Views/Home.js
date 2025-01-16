import React from "react";
import { Link } from "react-router";



export function Home() {
    return (
     <>
     <header>
        <nav>
          <Link to="/home">Home</Link>
          <Link>gallery</Link>
          <Link>Home</Link>
          <Link>Home</Link>
        </nav>
     </header> 
     </>
    );
}