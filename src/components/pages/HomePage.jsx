import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroHome from "../HeroHome";
import Activities from "../Activities";
import Footer from "../Footer";
import AvailableActFund from "../AvailableActFund";
import NavigationBar from "../NavigationBar";

export default function Homepage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.email) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <NavigationBar />
      <HeroHome />
      {/* <Activities /> */}
      <AvailableActFund />
      <Footer />
    </>
  );
}
