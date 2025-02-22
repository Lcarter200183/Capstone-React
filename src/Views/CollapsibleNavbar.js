import React from "react";
import { NavLink } from "react-router";
import { SignOutModal } from "./SignOutModal";
import { SignInModal } from "./SignInModal";

export function CollapsibleNavbar() {
  return (
    <nav className="nav-underline navbar navbar-expand-sm bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Venue
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/gallery">
              Gallery
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <SignInModal />
          </div>
        </div>
      </div>
    </nav>
  );
}
