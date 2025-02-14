import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { moduleExample } from "../controllers/moduleExample";
import { CollapsibleNavbar } from "./CollapsibleNavbar";
import { Banner } from "./Banner";
import { Footer } from "./Footer";

export function Home() {
  useEffect(componentDidMount, []);
  useEffect(componentDidupdate, []);
  useEffect(componentDidUnmount, []);
  return (
    <>
      <header>
        <Banner />
        <img
          width="100%"
          src="https://cdn.glitch.global/c909b8a4-2fe0-40eb-86e6-4470528773cd/c8fa72be-08fd-459d-b37e-5fe46a37cd5c.image.png?v=1722105706312"
          alt="outside of building"
        />
        {/* <Navbar /> */}
        <CollapsibleNavbar />
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
      <Footer />
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
