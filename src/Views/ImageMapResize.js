import React, { useEffect } from "react";

export function ImageMapResize() {
  useEffect(componentDidUnmount, []);

  return (
    <>
      <main>
        <div className="row gap-1 m-1 p-1">
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
                  src="./assets/bedroom1.jpg"
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
          </div>
        </div>
      </main>
    </>
  );
  function componentDidUnmount() {
    ImageMapResize();
  }
}
