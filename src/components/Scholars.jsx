import React from "react";
import { Carousel } from "react-bootstrap";

export default function Scholars() {
  return (
    <>
      {/* <section id="scholars" className="py-5">
        <div className="container-fluid h-100">
          <div className="title text-center">
            <h2>Scholars of Ultra</h2>
            <span className="d-inline-block title-border"></span>
          </div>
          <div
            id="carouselExampleControlsNoTouching"
            className="carousel carousel-dark slide"
            data-bs-touch="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="car-img d-flex justify-content-center">
                  <img
                    src="images/scholar-1.png"
                    className="img-fluid pt-4"
                    alt="scholar-1"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  <img
                    src="images/scholar-2.png"
                    className="img-fluid pt-4"
                    alt="scholar-2"
                  />
                </div>
                <h3 className="pt-4 text-center fw-light">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente beatae voluptate voluptas inventore voluptatem."
                </h3>
                <p className="lead text-center">~ Isabel Santiago</p>
                <p className="text-center pb-0">
                  Bachelor of Science in Business Administration Major in Human
                  Resources
                </p>
                <p className="text-center fs-3 fw-bold">Cum Laude</p>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  <img
                    src="images/scholar-3.png"
                    className="d-block img-fluid pt-4"
                    alt="scholar-3"
                  />
                </div>
                <h3 className="pt-4 text-center fw-light">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente beatae voluptate voluptas inventore voluptatem."
                </h3>
                <p className="lead text-center">~ Fatima Velasquez</p>
                <p className="text-center pb-0">Bachelor of Science in Nursing</p>
                <p className="text-center fs-3 fw-bold">Magna Cum Laude</p>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section> */}
      <section id="scholars" className="py-5">
        <div className="title text-center pb-4">
          <h2>Scholars of Ultra</h2>
          <span className="d-inline-block title-border"></span>
        </div>
        <Carousel className="container px-2 d-flex justify-content-center align-items-center">
          <Carousel.Item className="text-center">
            <img
              className="img-fluid"
              src="images/scholar-1.png"
              alt="scholar1"
            />
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <img
              className="img-fluid"
              src="images/scholar-2.png"
              alt="scholar2"
            />
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <img
              className="img-fluid"
              src="images/scholar-3.png"
              alt="scholar3"
            />
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}
