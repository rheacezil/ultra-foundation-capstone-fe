import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Activities() {
  return (
    <section>
      <div className=" bg-act vh-100 volunteer-act position-relative d-block event">
        <Container className="d-flex justify-content-center">
          <div className="row mt-5 gx-5 d-flex justify-content-center">
            {/* 1 */}

            <div className="col-md-6 col-lg-4 my-3 h-100">
              <Card style={{ width: "25rem" }} className=" p-0">
                <div className="overflow-hidden">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src="images/program-4.png"
                  />
                </div>
                <div className="card-date position-absolute d-flex align-items-center justify-content-center mt-3">
                  <p className="text-center pt-2 fw-bold">
                    {" "}
                    24
                    <br />
                    Oct
                  </p>
                </div>
                <Card.Body>
                  <Card.Title>
                    <h3 className="text-h">Feeding and Teaching Program</h3>
                  </Card.Title>
                  <Card.Text className="row">
                    <div className="py-2">
                      <AccessTimeIcon color="warning" />
                      <span> 08:00am</span>
                    </div>
                    <div>
                      <LocationOnIcon color="warning" />
                      <span>Angeles City, Pampanga</span>
                    </div>
                  </Card.Text>
                  <Button variant="warning">JOIN</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
