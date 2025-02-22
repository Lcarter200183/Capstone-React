import React from "react";
import { NavLink } from "react-router";

const domain = window.location.hostname;

let rootPath = "";
if (domain === "lcarter200183.github.io") rootPath = "/react-navigation";
console.log(`The domain is ${domain}`);

export function Navbar() {
  return (
    <nav className="nav nav-pills">
      <NavLink className="nav-link" to={`${rootPath}/`}>
        Home
      </NavLink>
      <NavLink className="nav-link" to={`${rootPath}/gallery`}>
        Gallery
      </NavLink>
      <NavLink className="nav-link" to={`${rootPath}/contact`}>
        Contact
      </NavLink>
      <NavLink className="nav-link" to={`${rootPath}/about`}>
        About
      </NavLink>
    </nav>
  );
}
