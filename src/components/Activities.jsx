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
      <div className=" bg-act vh-100 volunteer-act position-relative d-block event">
        <Container className="d-flex justify-content-center align-items-center h-100">
          <h3 className="text-warning">
            You did not join to any volunteer programs
          </h3>
        </Container>
      </div>
    </section>
  );
}
