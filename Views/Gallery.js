import React from "react";
import { Link } from "react-router";


export function Gallery() {
//  const domain = window.location.hostname;
//  if (domain === "lcarter200183.github.io") rootPath = "react-navigation";

  //const center ={ justifySelf: center };
    return (
     <>
       <header id="galleryHeader">
        <img width="100% " src="https://cdn.glitch.global/c909b8a4-2fe0-40eb-86e6-4470528773cd/c8fa72be-08fd-459d-b37e-5fe46a37cd5c.image.png?v=1722105706312 " alt="outside of building " />
        <div className="bg-info fs-6 p-2 m-2 ">
          <nav className="nav nav-tab nav-underline nav-fill ">
            <Link to={`${rootPath}/`}>HOME | </Link>
            <Link to={`${rootPath}/gallery`}>GALLERY| </Link>
            <Link to="/contact">CONTACT |</Link>
            <Link to="/about">ABOUT </Link>
          </nav>
        </div>
        <br />
      </header>
      <main id="galleryMain" className="container ">
          <u><h2>Gallery</h2></u>
          <div className="container ">
            <div className="row gap-2 m-1 p-1 ">
              <div className="col ">
                <div className="card ">
                  <img className="card-img-top " width="200px " height="200px " src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/463251826.jpg?k=36df96df21beb8dab4d610648db9a64385e9f0c2cfee0a98b08a531d9e634e7e&o=https://cf.bstatic.com/xdata/images/hotel/max1024x768/463251826.jpg?k=36df96df21beb8dab4d610648db9a64385e9f0c2cfee0a98b08a531&hp=1 " />

                  <div className="card-body ">
                    <h6 className="card-title ">"Exterior "</h6>
                    <p className="card-text ">Front Enterance</p>
                  </div>
                </div>
              </div>

              <div className="col ">
                <div className="card ">
                  <img className="card-img-top " height="200px " width="200px " src="https://lodgingmagazine.com/wp-content/uploads/2022/12/Galeria-Plaza-Monterrey-218x150.jpg " alt="pool area " />
                  <div className="card-body ">
                    <h6 className="card-title ">"Exterior "</h6>
                    <p className="card-text ">Pool Area</p>
                  </div>

                </div>
              </div>

              <div className="col ">
                <div className="card ">
                  <img className="card-img-top " height="200px " width="200px " src="https://www.enr.com/ext/resources/Issues/MountainSt_Issues/2023/November/MS-Benson-Nov2023-2.jpg " alt="lobby area " />
                  <div className="card-body ">
                    <h6 className="card-title ">"Interior "</h6>
                    <p className="card-text ">Front Lobby</p>
                  </div>
                </div>
              </div>

              <div className="row gap-1 m-1 p-1 ">
                <div className="col ">
                  <div className="card ">
                    <img className="card-img-top " usemap="#my-image-map " height="200px " width="200px " src="bedroom1.jpg " alt="hotel room " />
                    <map name="my-image-map ">
                      <area title="Click the bed " coords="123,113, 173,105, 238,120, 238,128, 177,168, 126,135, 122,113, " shape="poly " target="_blank " href="https://www.mattressfirm.com/tempur-adapt-11-medium-mattress/5637491080.p?variantid=5637491137&utm_kxconfid=t6c7xqs93&gad_source=1&gclid=CjwKCAjw68K4BhAuEiwAylp3kn0-Y054hidpIKGIbHWdWi_aDZ4MwRxvLEkECUv7mnO6jH5Nhx5qGBoCxLkQAvD_BwE&gclsrc=aw.ds "/>
                        <area title="Click the table " coords="1,148, 64,105, " shape="rect " target="_blank " href="https://kassamall.com/haddigan-dark-brown-rectangular-dining-room-extension-table/?srsltid=AfmBOopa9kej-DzoA_B37AiVvjL4h6LkZvCbAVkXXehYJORH00iib4YWEko "/>
                        </map>

                        <div className="card-body ">
                          <h6 className="card-title ">"Interior "</h6>
                          <p className="card-text ">Hotel Room</p>
                        </div>
                      </div>
                    </div>

                  <div className="col ">
                    <div className="card ">
                      <img className="card-img-top " height="200px " width="200px " src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/67/78/ff/borealis-patio-dining.jpg?w=1200&h=-1&s=1 " alt="outside event area " />
                      <div className="card-body ">
                        <h6 className="card-title ">"Event "</h6>
                        <p className="card-text ">Outside Event Area</p>
                      </div>
                    </div>
                  </div>

                  <div className="col ">
                    <div className="card ">
                      <img className="card-img-top " height="200px " width="200px " src="https://d25wybtmjgh8lz.cloudfront.net/sites/default/files/2022-09/The_Benson%20Hotel%20Ballroom%20Theatre%20Style-1500x883.jpg " alt="inside event room " />
                      <div className="card-body ">
                        <h6 className="card-title ">"Event "</h6>
                        <p className="card-text ">Inside Event Area</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          
          <script>
            imageMapResize();
          </script>
          <br />
            <section style={{textAlign: "center"}}>
              <h3> Triva</h3>
              <h4>Get 20% off on a meal!</h4>
              <button onClick="handleClick() ">Click here to get the question.</button>
              <div id="outputTag "></div>

            </section>

            <span className="bg-primary p-3 " id="mixin-example ">Enjoy the View!</span>
            <br />
              <hr />
                <button onClick="restApiExample()">rest Api</button>
                <output id="restApiExample"></output>
                <button onClick="gridSystemExample()">gridSystemExample</button>
                <output id="outputTag2"></output>
              </main>
             
              <footer id="galleryFooter"><pre>Website created by <code>Lydia Carter</code></pre></footer>
               </>
    );
  }
           