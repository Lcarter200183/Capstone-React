import React from "react";
import { Link, NavLink } from "react-router";

const domain = window.location.hostname;
let rootPath = "";
if (domain === "lcarter200183-github.io") rootPath = "/react-navigation";
console.log (`the domain is ${domain}`);

export function Navbar() {
    return (
        <nav>
        <NavLink to={`${rootPath}/`}>HOME |</NavLink>
        <NavLink to={`${rootPath}/gallery`}>GALLERY |</NavLink>
        <NavLink>CONTACT |</NavLink>
        <NavLink>ABOUT </NavLink>
        </nav>
    );
}