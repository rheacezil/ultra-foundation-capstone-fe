import { Divider } from "@mui/material";
import React from "react";
import About from "../About";
import Discover from "../Discover";
import Footer from "../Footer";
import NavigationBar from "../NavigationBar";
import Newsletter from "../Newsletter";

export default function AboutUs() {
  return (
    <>
      <NavigationBar />
      <About />
      <hr />
      <Discover />
      <Newsletter />
      <Footer />
    </>
  );
}
