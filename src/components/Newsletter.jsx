import React from "react";

export default function Newsletter() {
  return (
    <section id="newsletter" className="py-5">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <div className="title text-center pt-3">
            <h4 className="position-relative d-inline-block ms-4">
              Be updated with Ultra Foundation Fundraisers and Volunteer
              Programs!
            </h4>
          </div>

          <p className="text-center text-muted">
            Watch out for upcoming volunteer programs you and your friends can
            be a part of!
          </p>
          <div className="input-group mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Email..."
            />
            <button className="btn btn-warning" type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
