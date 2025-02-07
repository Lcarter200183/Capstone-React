import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { moduleExample } from "../controllers/moduleExample";

export function Home() {
  useEffect(componentDidMount, []);
  useEffect(componentDidupdate, []);
  useEffect(componentDidUnmount, []);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <u>
          <h2>Venue</h2>
        </u>
        <br />
        <h2 className="fst-italic fw-bold" id="exterior">
          Exterior
        </h2>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium vulputate
          quis feugiat in adipiscing justo. Enim eget eu libero etiam donec
          rhoncus efficitur efficitur. Nostra vel accumsan praesent arcu
          curabitur lacus. Sociosqu nunc potenti sagittis nostra nibh. In nec
          finibus tempor netus quis habitant senectus hac risus. Eu ligula per
          non nascetur nisi hac nunc. Luctus neque taciti vivamus convallis
          elementum vel facilisis.
        </p>

        <h2 className="fst-italic fw-bold" id="interior">
          Interior
        </h2>
        <p>
          Praesent platea mi convallis pretium aliquet a nibh curae dis. Massa
          bibendum tristique per urna libero nisl dictumst. Sed lobortis
          nascetur conubia congue hac quam hac. Inceptos commodo netus eget,
          varius venenatis nec. Consequat montes montes litora; sollicitudin ut
          metus. Est metus scelerisque accumsan molestie molestie; curae iaculis
          augue nam. Ante curae orci malesuada sollicitudin dolor maximus
          auctor. Senectus inceptos aliquam laoreet vestibulum elementum integer
          conubia maecenas viverra. Aenean turpis placerat platea efficitur
          dictum vitae. Parturient luctus vulputate vestibulum accumsan
          imperdiet senectus magna ut imperdiet.
        </p>

        <h2 className="fst-italic fw-bold" id="events">
          Events
        </h2>
        <p>
          Duis mi conubia orci; aliquam vestibulum sollicitudin. Diam morbi
          aliquet blandit lacinia suscipit vivamus duis. Diam finibus ex ex
          condimentum massa semper ante malesuada. Pretium eros metus euismod
          etiam integer ridiculus. Vehicula tortor etiam auctor vulputate leo
          purus rhoncus mauris maximus. Natoque faucibus nisi neque platea
          consequat fames. Sagittis maximus rutrum tristique velit eu
          suspendisse luctus eros. Ultrices potenti parturient placerat nascetur
          eleifend. Proin tincidunt cubilia libero natoque curabitur at tempor.
          Id accumsan diam vehicula rhoncus sollicitudin metus aptent.
        </p>
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
  console.log("Mounted title");
}
function componentDidupdate() {
  setTimeout(console.log("Component updated."), 2000);
}
function componentDidUnmount() {
  setTimeout(console.log("Component Unmounted"), 2500);
}
