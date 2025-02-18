import React from "react";
import dinning from "../../assets/dinning.jpg";
import meal from "../../assets/meal.jpg";
import setup from "../../assets/setup.jpg";

export function Carousel() {
  return (
    <div id="Pictures" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#Pictures"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#Pictures"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#Pictures"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner" style={{ width: "80%" }}>
        <div className="carousel-item active">
          <img
            src={meal}
            style={{ height: "195px", marginLeft: "20%" }}
            className="d-block w-100"
            alt="meal"
          />
        </div>
        <div className="carousel-item">
          <img
            src={dinning}
            style={{ height: "195px", marginLeft: "20%" }}
            className="d-block w-100"
            alt="dinning"
          />
        </div>
        <div className="carousel-item">
          <img
            src={setup}
            style={{ height: "195px", marginLeft: "20%" }}
            className="d-block w-100"
            alt="setup"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#Pictures"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#Pictures"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
