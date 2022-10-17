import React from "react";
import { Carousel } from "react-bootstrap";

export default function Scholars() {
  return (
    <>
      {/* <section id="scholars" class="py-5">
        <div class="container-fluid h-100">
          <div class="title text-center">
            <h2>Scholars of Ultra</h2>
            <span class="d-inline-block title-border"></span>
          </div>
          <div
            id="carouselExampleControlsNoTouching"
            class="carousel carousel-dark slide"
            data-bs-touch="false"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="car-img d-flex justify-content-center">
                  <img
                    src="images/scholar-1.png"
                    class="img-fluid pt-4"
                    alt="scholar-1"
                  />
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-flex justify-content-center">
                  <img
                    src="images/scholar-2.png"
                    class="img-fluid pt-4"
                    alt="scholar-2"
                  />
                </div>
                <h3 class="pt-4 text-center fw-light">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente beatae voluptate voluptas inventore voluptatem."
                </h3>
                <p class="lead text-center">~ Isabel Santiago</p>
                <p class="text-center pb-0">
                  Bachelor of Science in Business Administration Major in Human
                  Resources
                </p>
                <p class="text-center fs-3 fw-bold">Cum Laude</p>
              </div>
              <div class="carousel-item">
                <div class="d-flex justify-content-center">
                  <img
                    src="images/scholar-3.png"
                    class="d-block img-fluid pt-4"
                    alt="scholar-3"
                  />
                </div>
                <h3 class="pt-4 text-center fw-light">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente beatae voluptate voluptas inventore voluptatem."
                </h3>
                <p class="lead text-center">~ Fatima Velasquez</p>
                <p class="text-center pb-0">Bachelor of Science in Nursing</p>
                <p class="text-center fs-3 fw-bold">Magna Cum Laude</p>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section> */}
      <section id="scholars" className="py-5">
        <div class="title text-center pb-4">
          <h2>Scholars of Ultra</h2>
          <span class="d-inline-block title-border"></span>
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