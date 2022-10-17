import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <section id="hero" className="vh-100">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="text-center active">
            <p className="text-white lead fw-light">Get involved now!</p>
            <h1 className="text-white py-2 mb-5">
              “You have not lived today until you have done something for
              someone who can never repay you.”
            </h1>
            <Link to="/signup" className="btn btn-lg btn-warning mx-2 fw-light">
              Join Us!
            </Link>
            <Link to="/donate" className="btn btn-lg btn-warning mx-2 fw-light">
              Donate
            </Link>
          </div>
        </div>
      </section>
      <section id="promo" className="position-relative d-none d-sm-block">
        <div className="promo-wrap position-absolute w-100">
          <div className="container bg-white w-100 m-auto">
            <div className="row p-5">
              <div className="col-md-4 col-sm-12 ">
                <div className="promo-content">
                  <img
                    src="images/icon-volunteer.png"
                    className="mb-3"
                    alt="volunteer"
                  />
                  <h4>Become A Volunteer</h4>
                  <p className="fw-regular">
                    Start where you are. <br /> Use what you have. <br />
                    Do what you can.
                  </p>
                  <a href="#" className="btn">
                    Read More
                  </a>
                  {/* <hr className="d-lg-none d-md-none" /> */}
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="promo-content">
                  <img
                    src="images/icon-donate.png"
                    className="mb-3"
                    alt="Donate"
                  />
                  <h4>Donate</h4>
                  <p className="fw-regularfundraiser-1">
                    Giving is about making a difference. <br />
                    It is the greatest act of grace.
                  </p>
                  <a href="#" className="btn">
                    Read More
                  </a>
                  {/* <hr className="d-lg-none d-md-none" /> */}
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="promo-content">
                  <img
                    src="images/icon-raise.png"
                    className="mb-3"
                    alt="raise-funds"
                  />
                  <h4>Start A Fundraiser</h4>
                  <p className="fw-regular">
                    The greatest good is what we do for one another. Every
                    charitable act makes a difference.
                  </p>
                  <a href="#" className="btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}