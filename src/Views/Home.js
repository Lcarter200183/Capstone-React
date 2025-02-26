import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { moduleExample } from "../controllers/moduleExample";
import { CollapsibleNavbar } from "./CollapsibleNavbar";
import { Banner } from "./Banner";
import "../index.scss";
import "./Home.scss";

export function Home() {
  useEffect(componentDidMount, []);
  useEffect(componentDidupdate);
  useEffect(componentDidUnmount, []);
  return (
    <>
      <header>
        <Banner />
      </header>
      <main id="homeMain">
        <u>
          <h2>Venue</h2>
        </u>
        <div className="container">
          <div className="row row-col-1 row-col-sm-1">
            <h2 className="fst-italic fw-bold" id="exterior">
              Exterior
            </h2>
            <br />
            <p id="homep">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium
              vulputate quis feugiat in adipiscing justo. Enim eget eu libero
              etiam donec rhoncus efficitur efficitur. Nostra vel accumsan
              praesent arcu curabitur lacus. Sociosqu nunc potenti sagittis
              nostra nibh. In nec finibus tempor netus quis habitant senectus
              hac risus. Eu ligula per non nascetur nisi hac nunc. Luctus neque
              taciti vivamus convallis elementum vel facilisis.
            </p>
          </div>
          <div className="row row-col-1 row-col-sm-1">
            <h2 className="fst-italic fw-bold" id="interior">
              Interior
            </h2>
            <p id="homep">
              Praesent platea mi convallis pretium aliquet a nibh curae dis.
              Massa bibendum tristique per urna libero nisl dictumst. Sed
              lobortis nascetur conubia congue hac quam hac. Inceptos commodo
              netus eget, varius venenatis nec. Consequat montes montes litora;
              sollicitudin ut metus. Est metus scelerisque accumsan molestie
              molestie; curae iaculis augue nam. Ante curae orci malesuada
              sollicitudin dolor maximus auctor. Senectus inceptos aliquam
              laoreet vestibulum elementum integer conubia maecenas viverra.
              Aenean turpis placerat platea efficitur dictum vitae. Parturient
              luctus vulputate vestibulum accumsan imperdiet senectus magna ut
              imperdiet.
            </p>
          </div>
          <div className="row row-col-1 row-col-sm-1">
            <h2 className="fst-italic fw-bold" id="events">
              Events
            </h2>
            <p id="homep">
              Duis mi conubia orci; aliquam vestibulum sollicitudin. Diam morbi
              aliquet blandit lacinia suscipit vivamus duis. Diam finibus ex ex
              condimentum massa semper ante malesuada. Pretium eros metus
              euismod etiam integer ridiculus. Vehicula tortor etiam auctor
              vulputate leo purus rhoncus mauris maximus. Natoque faucibus nisi
              neque platea consequat fames. Sagittis maximus rutrum tristique
              velit eu suspendisse luctus eros. Ultrices potenti parturient
              placerat nascetur eleifend. Proin tincidunt cubilia libero natoque
              curabitur at tempor. Id accumsan diam vehicula rhoncus
              sollicitudin metus aptent.
            </p>
          </div>
        </div>
        <hr />
        <button onClick={moduleExample}>module Example</button>
        <br />
        <output id="myTag"></output>
      </main>
    </>
  );
}

function componentDidMount() {
  document.title = "The Venue";
  console.log("The home page mounted");
}
function componentDidupdate() {
  setTimeout(console.log("Component updated."), 2000);
}
function componentDidUnmount() {
  setTimeout(console.log("Component Unmounted"), 2500);
}
