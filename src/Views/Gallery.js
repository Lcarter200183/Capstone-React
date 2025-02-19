import { Banner } from "./Banner";
import { Footer } from "./Footer";
import "../index.scss";
import "./Gallery.scss";
import { Carousel } from "./Carousel";

export function Gallery() {
  useEffect(componentDidMount, []);
  useEffect(componentdDidUpdate, []);
  useEffect(componentDidUnmount, []);

  const center = { width: "fit-content", justifySelf: "center" };
  return (
    <>
      <header>
        <Banner />
        {/* <Navbar /> */}
        <CollapsibleNavbar />
      </header>
      <main id="galleryMain">
        <u>
          <h2>Gallery</h2>
        </u>
        <div className="container ">
          <div className="row gap-2 m-1 p-1">
            <div className="col ">
              <div className="card ">
                <img
                  id="FrontEnterance"
                  data-bs-title="Front Enterance"
                  data-bs-toggle="tooltip"
                  className="card-img-top "
                  width="200px "
                  height="200px "
                  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/463251826.jpg?k=36df96df21beb8dab4d610648db9a64385e9f0c2cfee0a98b08a531d9e634e7e&o=https://cf.bstatic.com/xdata/images/hotel/max1024x768/463251826.jpg?k=36df96df21beb8dab4d610648db9a64385e9f0c2cfee0a98b08a531&hp=1 "
                />

                <div className="card-body ">
                  <h6 className="card-title ">"Exterior "</h6>
                  <p className="card-text ">Front Enterance</p>
                </div>
              </div>
            </div>

            <div className="col ">
              <div className="card ">
                <img
                  id="PoolArea"
                  data-bs-title="Pool Area"
                  data-bs-toggle="tooltip"
                  className="card-img-top "
                  height="200px "
                  width="200px "
                  src="https://lodgingmagazine.com/wp-content/uploads/2022/12/Galeria-Plaza-Monterrey-218x150.jpg "
                  alt="pool area "
                />
                <div className="card-body ">
                  <h6 className="card-title ">"Exterior "</h6>
                  <p className="card-text ">Pool Area</p>
                </div>
              </div>
            </div>

            <div className="col ">
              <div className="card ">
                <img
                  id="FrontLobby"
                  data-bs-title="Front Lobby"
                  data-bs-toggle="tooltip"
                  className="card-img-top "
                  height="200px "
                  width="200px "
                  src="https://www.enr.com/ext/resources/Issues/MountainSt_Issues/2023/November/MS-Benson-Nov2023-2.jpg"
                  alt="lobby area "
                />
                <div className="card-body ">
                  <h6 className="card-title ">"Interior "</h6>
                  <p className="card-text ">Front Lobby</p>
                </div>
              </div>
            </div>

            <div className="row gap-1 m-1 p-1">
              <div className="col ">
                <div className="card ">
                  <img
                    id="HotelRoom"
                    data-bs-title="Hotel Room"
                    data-bs-toggle="tooltip"
                    className="card-img-top "
                    useMap="#my-image-map "
                    height="200px "
                    width="200px "
                    src="bedroom1.jpg "
                    alt="hotel room "
                  />
                  <map name="my-image-map ">
                    <area
                      title="Click the bed "
                      coords="123,113, 173,105, 238,120, 238,128, 177,168, 126,135, 122,113, "
                      shape="poly "
                      target="_blank "
                      href="https://www.mattressfirm.com/tempur-adapt-11-medium-mattress/5637491080.p?variantid=5637491137&utm_kxconfid=t6c7xqs93&gad_source=1&gclid=CjwKCAjw68K4BhAuEiwAylp3kn0-Y054hidpIKGIbHWdWi_aDZ4MwRxvLEkECUv7mnO6jH5Nhx5qGBoCxLkQAvD_BwE&gclsrc=aw.ds "
                    />
                    <area
                      title="Click the table "
                      coords="1,148, 64,105, "
                      shape="rect "
                      target="_blank "
                      href="https://kassamall.com/haddigan-dark-brown-rectangular-dining-room-extension-table/?srsltid=AfmBOopa9kej-DzoA_B37AiVvjL4h6LkZvCbAVkXXehYJORH00iib4YWEko "
                    />
                  </map>

                  <div className="card-body ">
                    <h6 className="card-title ">"Interior "</h6>
                    <p className="card-text ">Hotel Room</p>
                  </div>
                </div>
              </div>

              <div className="col ">
                <div className="card ">
                  <img
                    id="OutsideEventArea"
                    data-bs-title="Outside Event Area"
                    data-bs-toggle="tooltip"
                    className="card-img-top "
                    height="200px "
                    width="200px "
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/67/78/ff/borealis-patio-dining.jpg?w=1200&h=-1&s=1 "
                    alt="outside event area "
                  />
                  <div className="card-body ">
                    <h6 className="card-title ">"Event "</h6>
                    <p className="card-text ">Outside Event Area</p>
                  </div>
                </div>
              </div>

              <div className="col ">
                <div className="card ">
                  <img
                    id="InsideEventArea"
                    data-bs-title="Inside Event Area"
                    data-bs-toggle="tooltip"
                    className="card-img-top "
                    height="200px "
                    width="200px "
                    src="https://d25wybtmjgh8lz.cloudfront.net/sites/default/files/2022-09/The_Benson%20Hotel%20Ballroom%20Theatre%20Style-1500x883.jpg "
                    alt="inside event room "
                  />
                  <div className="card-body ">
                    <h6 className="card-title ">"Event "</h6>
                    <p className="card-text ">Inside Event Area</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <section id="gallerySection">
          <h3> Triva</h3>
          <h4>Get 20% off on a meal!</h4>
          <button onClick={handleOnClick}>
            Click here to get the question.
          </button>
          <div id="myTag "></div>
        </section>

        <br />
        <Carousel />
        <br />
        <span className="bg-primary p-3 " id="mixin-example ">
          Enjoy the View!
        </span>
        <br />

        <hr />
      </main>
      <hr />
      <Footer />
    </>
  );
}
function componentDidMount() {
  document.title = "Venue - Gallery";
  imageMapResize();
  console.log("Mounted title");
  const imgTag = document.getElementById("FrontLobby");
  new bootstrap.Tooltip(imgTag);
  const imgTag2 = document.getElementById("PoolArea");
  new bootstrap.Tooltip(imgTag2);
  const imgTag3 = document.getElementById("FrontEnterance");
  new bootstrap.Tooltip(imgTag3);
  const imgTag4 = document.getElementById("HotelRoom");
  new bootstrap.Tooltip(imgTag4);
  const imgTag5 = document.getElementById("OutsideEventArea");
  new bootstrap.Tooltip(imgTag5);
  const imgTag6 = document.getElementById("InsideEventArea");
  new bootstrap.Tooltip(imgTag6);
}
function componentdDidUpdate() {
  setTimeout(console.log("Component Updated"), 2000);
}
function componentDidUnmount() {
  setTimeout(console.log("component Unmounted"), 2500);
}
