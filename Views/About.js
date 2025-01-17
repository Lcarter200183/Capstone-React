import React from "react";
import { Link } from "react-router";

export function About() {
    return ( 
        <header> 
            <nav> 
                <Link to="home">Home</Link>
                <Link to="gallery">Gallery</Link>
                <Link to="contact">Contact</Link>
                <Link to="About">About</Link>
            </nav>
        </header>
    );
}