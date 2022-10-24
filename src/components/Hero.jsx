import React, { useState } from "react";
import { Link } from "react-router-dom";
import DonateButtonModal from "./DonateButtonModal";
import { useSpring, animated, config } from "react-spring";

export default function Hero() {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <>
      <section id="hero" className="vh-100">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="text-center active">
            <p className="text-white lead fw-light">
              <animated.h5 style={props}>Get involved now!</animated.h5>
            </p>
            <h1 className="text-white py-2 mb-5">
              “You have not lived today until you have done something for
              someone who can never repay you.”
            </h1>
            <Link
              to="/signup"
              className="btn btn-lg btn-warning mx-2 fw-light border-0"
            >
              Join Us!
            </Link>
            {/* <Link to="/donate" className="btn btn-lg btn-warning mx-2 fw-light">
              Donate
            </Link> */}
            <DonateButtonModal />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
