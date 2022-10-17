import React from "react";
import { Container } from "react-bootstrap";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegramPlane,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-dark py-5 position-relative">
      <Container>
        <div className="row text-white g-4">
          <div className="col-md-6 col-lg-4 px-5">
            <a
              href="index.html"
              className="brand text-decoration-none text-white"
            >
              Ultra Foundation
            </a>
            <p className="text-white mt-3 text-muted">
              A non-profit organization that brings people together in hopes of
              bringing joy, hope, opportunities, and generosity to others who
              need it the most.
            </p>
          </div>

          <div className="col-md-6 col-lg-4 px-5">
            <h5 className="fw-light mb-3">Contact Us</h5>

            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </span>
              <span className="fw-light">
                Ultra Street, Angeles City, Pampanga, Philippines
              </span>
            </div>

            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span className="fw-light">09999321456</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 px-5">
            <h5 className="fw-light mb-3">Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="text-decoration-none text-muted fs-4 me-4">
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
                <FontAwesomeIcon icon={faTelegramPlane} />
              </li>
            </ul>
          </div>
          <a href="#" className="position-absolute start-0 end-0 p-5">
            <i className="bi bi-arrow-up-circle text-warning h1"></i>
          </a>
        </div>
      </Container>
    </footer>
  );
}