import React from "react";
import Footer from "../Footer";
import Fundaraisers from "../Fundraisers";
import Hero from "../Hero";
import NavigationBar from "../NavigationBar";
import Scholars from "../Scholars";

export default function LandingPage() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Fundaraisers />
      <Scholars />
      <Footer />
    </>
  );
}
