import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionProgram from "../redux/actions/actionProgram";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import { Button, Card, Container } from "react-bootstrap";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function AllVolunteerProg() {
  const [programs, setPrograms] = useState([]);
  const { getAllPrograms } = bindActionCreators(actionProgram, useDispatch());

  useEffect(() => {
    getAllPrograms().then((response) => {
      setPrograms(response.payload);
    });
  }, []);

  const renderPrograms = () => {
    return programs.map((program) => (
      <div className="col-md-6 col-lg-4 my-3 h-100">
        <Card style={{ width: "25rem" }} className=" p-0">
          <div className="overflow-hidden">
            <Card.Img
              className="card-img"
              variant="top"
              src={
                program.imageLink
                  ? `https://capstone-ultra-foundation.herokuapp.com/program/${program.programId}/download`
                  : "/images/empty.jpg"
              }
              alt={program.programName}
            />
          </div>
          <div className="card-date position-absolute d-flex align-items-center justify-content-center">
            <p className="text-center p-3 fw-bold">October 24, 2022</p>
          </div>
          <Card.Body>
            <Card.Title>
              <h3 className="text-h">{program.programName}</h3>
            </Card.Title>
            <Card.Text className="row">
              <div className="py-2">
                <p className="card-title mb-1 text-muted">
                  {program.description}
                </p>
                <AccessTimeIcon color="warning" />
                <span> 08:00am</span>
              </div>
              <div>
                <LocationOnIcon color="warning" />
                <span>Angeles City, Pampanga</span>
              </div>
            </Card.Text>
            <div className="pb-2">
              <EventOutlinedIcon color="warning" />
              <span> {program.programDate}</span>
            </div>
            <Button variant="warning">JOIN</Button>
          </Card.Body>
        </Card>
      </div>
    ));
  };
  return (
    <>
      <section id="fundraisers" className="py-5">
        <Container>
          <div className="title  text-center pt-5">
            <h2 className="position-relative">Volunteer Programs</h2>
            <span className="d-inline-block title-border"></span>
          </div>
          <div className="row pt-4 ">
            {/* {loading ? renderLoading() : renderFundRaisers()} */}
            {renderPrograms()}
          </div>
        </Container>
      </section>
    </>
  );
}
