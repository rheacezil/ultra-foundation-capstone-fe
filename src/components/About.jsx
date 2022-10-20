import React from "react";

export default function About() {
  return (
    <section id="about-us" className="py-5 mt-5">
      <div className="container p-3 mt-5 bg-warning">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <h2 className="m-3">About Ultra</h2>
            <div className="text-lg-start px-5">
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                non fugiat eaque. Minima, doloribus molestiae? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Maxime excepturi enim sed
                sit mollitia corrupti quasi asperiores animi similique commodi?
              </p>
              <p className="fw-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ducimus doloribus ab ad corrupti voluptas in odit modi non ipsam
                nostrum! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aperiam consequuntur ipsum velit aspernatur. Voluptatem
                delectus est, ut molestias debitis sapiente!
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src="images/about-us.png"
              alt="about us image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
