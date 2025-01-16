import React from "react";
import { Link } from "react-router";



export function Gallery() {
    return (
     <header>
        <nav>
        <Link>Home |</Link>
          <Link to="/gallery">gallery |</Link>
          <Link>Contact |</Link>
          <Link>About </Link>
        </nav>
     </header>
    );
}