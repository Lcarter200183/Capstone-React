import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { CollapsibleNavbar } from "./CollapsibleNavbar";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Carousel } from "./Carousel";
import { handleOnClick } from "../modules/handleOnClick";
import "./About.scss";

export function About() {
  const [didMount, setDidMount] = useState(false);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);
  return (
    <>
      <header id="aboutHeader">
        <Banner />
        {/* <Navbar /> */}
        <CollapsibleNavbar />
      </header>
      <main id="container" className="aboutMain">
        <h2 className="abouth2">About</h2>
        <hr />
        <h3 className="abouth3">Layout Of My Project</h3>
        <h4 className="abouth4">Home</h4>
        <p>
          Basic Html, Boilerplate, Bootstrap, Nav bar, ClassName, Bookmarks,
          Inline css,
        </p>
        <h4 className="abouth4">Gallery</h4>
        <p>Card with image and text, Internal Css</p>
        <h4 className="abouth4">Contact</h4>
        <p>Submit request form, Labels, Button</p>
        <h4 className="abouth4">About</h4>
        <p>
          Alert, Growing spinner, List Group, Loops, Data Type, Object, Array
          runFunction button Utility Function, Javascript, Radio Button
        </p>
        <hr />
        <h4 id="jen">Amenities at Venue </h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Rooms</li>
          <li className="list-group-item">Artisian Food and Drinks</li>
          <li className="list-group-item">Pool</li>
          <li className="list-group-item">Catering</li>
          <li className="list-group-item">Wifi</li>
          <li className="list-group-item">
            Event Suppilies <span className="badge bg-info">20% off</span>
          </li>
          <li className="list-group-item">Parking</li>
          <li className="list-group-item">Fitness Center</li>
        </ul>
        <Carousel />
        <br />
        <button className="btn btn-primary" id="animated-button">
          ENJOY!!
        </button>
        <hr />
        {/* <button onClick={runFunction1()}>Click here to run Problem 1</button>
        <br />
        <button onClick={runFunction2()}>Click here to run Problem 2</button>
        <div id="myOutput">Insert output here</div> <br />
        <hr /> */}
        <h5>Rate my Website</h5>
        <fieldset>
          <input type="radio" id="Thumbs up" name="group 1" />
          Thumbs up:👍🏾
          <input type="radio" id="Thumbs down" name="group 1" />
          Thumbs down:👎🏾
          <br />
          <button
            className="#include boxShadow #include textShadow btn-lg btn-primary "
            id="mixin button"
          >
            Submit
          </button>
        </fieldset>
      </main>
      <Footer id="aboutFooter" />
    </>
  );
  function componentDidMount() {
    document.title = "Venue-About";
    console.log("The About component has mounted");
  }
  function componentDidUpdate() {
    if (didMount === true) console.log("The component updated.");
    else {
      setDidMount(true);
      setTimeout(console.log("the component mounted."), 2000);
    }
  }
  function componentDidUnmount() {
    return function () {
      setTimeout(console.log("Component Unmounted"), 2500);
    };
  }
}
