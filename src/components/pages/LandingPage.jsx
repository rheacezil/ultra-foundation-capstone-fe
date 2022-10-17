import React from "react";
import Footer from "../Footer";
import Fundaraisers from "../Fundraisers";
import Hero from "../Hero";
import NavLanding from "../NavLanding";
import Scholars from "../Scholars";

export default function LandingPage() {
  return (
    <>
      <NavLanding />
      <Hero />
      <Fundaraisers />
      <Scholars />
      <Footer />
    </>
  );
}