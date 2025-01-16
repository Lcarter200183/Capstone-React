import React from "react";
import { Link } from "react-router";



export function Home() {
    return (
     <>
     <header>
        <nav>
          <Link to="/home">Home |</Link>
          <Link>Gallery |</Link>
          <Link>Contact |</Link>
          <Link>About </Link>
        </nav>
     </header> 
     </>
    );
}