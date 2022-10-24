import React, { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { bindActionCreators } from "redux";
import * as actionProgram from "../redux/actions/actionProgram";
import { renderLoading } from "../utilities/loader";
import { useDispatch } from "react-redux";

export default function Activities() {
  return (
    <section>
      <div className=" bg-act text-center volunteer-act position-relative d-block event">
        <h4>
          Scroll through and take part on these active fundraisers and volunteer
          programs!
        </h4>
      </div>
    </section>
  );
}
