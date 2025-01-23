import React from "react";
import { Link } from "react-router";
import "./Home.scss";

 export function Home() {
    const center ={ justifySelf: "center"};
    const kleader = { fontFamily: "kleader"};
    return (
     <> 
     <header id="homeHeader">
        <img width="100%" src="https://cdn.glitch.global/c909b8a4-2fe0-40eb-86e6-4470528773cd/c8fa72be-08fd-459d-b37e-5fe46a37cd5c.image.png?v=1722105706312" alt="outside of building" />
        <div className="bg-primary fs-6 p-2 m-2">
            <nav className="nav nav-tab nav-underline nav-fill">
                <Link to="/Home">HOME |</Link>
                <Link>GALLERY | </Link>
                <Link>CONTACT | </Link>
                <Link>ABOUT </Link>
            </nav>

        </div>
    </header>

    <main id="homeMain" className="container">
        
        <u><h2>Venue</h2></u>
        <br />
        <h2 className="fst-italic fw-bold" id="exterior">Exterior</h2>
        <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium vulputate quis feugiat in adipiscing justo. Enim eget eu libero etiam donec rhoncus efficitur efficitur. Nostra vel accumsan praesent arcu curabitur lacus. Sociosqu nunc potenti sagittis nostra
            nibh. In nec finibus tempor netus quis habitant senectus hac risus. Eu ligula per non nascetur nisi hac nunc. Luctus neque taciti vivamus convallis elementum vel facilisis.
        </p>

        <h2 className="fst-italic fw-bold" id="interior">Interior</h2>
        <p>
            Praesent platea mi convallis pretium aliquet a nibh curae dis. Massa bibendum tristique per urna libero nisl dictumst. Sed lobortis nascetur conubia congue hac quam hac. Inceptos commodo netus eget, varius venenatis nec. Consequat montes montes litora;
            sollicitudin ut metus. Est metus scelerisque accumsan molestie molestie; curae iaculis augue nam. Ante curae orci malesuada sollicitudin dolor maximus auctor. Senectus inceptos aliquam laoreet vestibulum elementum integer conubia maecenas
            viverra. Aenean turpis placerat platea efficitur dictum vitae. Parturient luctus vulputate vestibulum accumsan imperdiet senectus magna ut imperdiet.
        </p>

        <h2 className="fst-italic fw-bold" id="events">Events</h2>
        <p>
            Duis mi conubia orci; aliquam vestibulum sollicitudin. Diam morbi aliquet blandit lacinia suscipit vivamus duis. Diam finibus ex ex condimentum massa semper ante malesuada. Pretium eros metus euismod etiam integer ridiculus. Vehicula tortor etiam auctor
            vulputate leo purus rhoncus mauris maximus. Natoque faucibus nisi neque platea consequat fames. Sagittis maximus rutrum tristique velit eu suspendisse luctus eros. Ultrices potenti parturient placerat nascetur eleifend. Proin tincidunt cubilia
            libero natoque curabitur at tempor. Id accumsan diam vehicula rhoncus sollicitudin metus aptent.
        </p>
        <hr />

        <button onClick="moduleExample">module Example</button><br />
        <output id="outputTag"></output>

    </main>

    <footer id="homeFooter" style={{center}}>
        Sitemap:
        <nav>
            <Link to="#exterior">Exterior</Link><br />
            <Link to="#interior">Interior</Link><br />
            <Link to="#events">Events</Link><br />
        </nav>


        <pre style={{fontFamily: kleader}}>Website created by <code>Lydia Carter</code></pre>
    </footer>
     </> 
    );
}