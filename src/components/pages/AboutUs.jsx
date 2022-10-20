import React from "react";
import About from "../About";
import Discover from "../Discover";
import Footer from "../Footer";
import NavLanding from "../NavLanding";
import Newsletter from "../Newsletter";

export default function AboutUs() {
  return (
    <>
      <NavLanding />
      <About />
      <Discover />
      <Newsletter />
      <Footer />
    </>
  );
}
