// COMPONENTS
import AllVolunteerProg from "../AllVolunteerProg";
import Footer from "../Footer";
import Fundaraisers from "../Fundraisers";
import Hero from "../Hero";
import NavigationBar from "../NavigationBar";
import Scholars from "../Scholars";

// STATE
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionFundraisers from "../../redux/actions/actionFundraiser";
import * as actionProgram from "../../redux/actions/actionProgram";

export default function LandingPage() {
  // Fundraisers
  const [fundraisers, setFundraisers] = useState([]);
  const { getAllFundraisers } = bindActionCreators(
    actionFundraisers,
    useDispatch()
  );

  useEffect(() => {
    getAllFundraisers().then((response) => {
      setFundraisers(response ? response.payload : []);
    });

    console.log(fundraisers);
  }, []);

  // VOLUNTEER PROGRAMS
  const [programs, setPrograms] = useState([]);
  const { getAllPrograms } = bindActionCreators(actionProgram, useDispatch());

  useEffect(() => {
    getAllPrograms().then((response) => {
      setPrograms(response ? response.payload : []);
    });
  }, []);

  return (
    <>
      <NavigationBar />
      <Hero />
      {programs.length > 0 ? <AllVolunteerProg /> : null}
      {fundraisers.length > 0 ? <Fundaraisers /> : null}

      <Scholars />
      <Footer />
    </>
  );
}
