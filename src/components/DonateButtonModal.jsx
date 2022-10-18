import { HelpOutline } from "@mui/icons-material";
import {
  Autocomplete,
  Checkbox,
  TextField,
  Tooltip,
  Zoom,
} from "@mui/material";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PaypalCheckoutButton from "./PaypalCheckoutButton";

export default function DonateButtonModal() {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);
  const [fundraiser, setFundraiser] = useState();
  const [amount, setAmount] = useState();

  const product = {
    description: "Fundraiser description",
    price: amount,
  };

  const handleClose = () => {
    setShow(false);
    setCount(1);
  };
  const handleShow = () => setShow(true);

  // create a checkIfValid function to see if there are input datas
  const handleNext = () => setCount(count + 1);

  const handlePrev = () => setCount(count - 1);

  return (
    <>
      <Button
        variant="warning"
        className="btn btn-lg mx-2 fw-light"
        onClick={handleShow}
      >
        Donate
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="lead">Ultra Foundation</Modal.Title>
        </Modal.Header>

        {count === 1 ? (
          <Modal.Body>
            <h3 className="lead">For what cause will your donation be?</h3>
            <Autocomplete
              inputValue={fundraiser}
              onInputChange={(event, newFundraiser) => {
                setFundraiser(newFundraiser);
              }}
              disablePortal
              id="fundraiser-selector"
              className="pt-4 pb-5"
              options={fundraisers}
              sx={{ width: 355 }}
              renderInput={(params) => (
                <TextField {...params} label="Fundraiser" />
              )}
            />

            {fundraiser ? (
              <Button
                variant="warning"
                className="text-white w-100 mt-5"
                onClick={handleNext}
              >
                Next
              </Button>
            ) : (
              <Button
                variant="warning"
                className="text-white w-100 mt-5"
                disabled
              >
                Next
              </Button>
            )}
          </Modal.Body>
        ) : null}

        {count === 2 ? (
          <Modal.Body>
            <div className="row">
              <p className="lead fs-6 text-center pb-4">
                <span className="fw-bold lead">
                  How much would you like to donate?
                </span>
                <br />
                Ultra Foundation makes sure your donation goes directly to
                supporting our cause.
              </p>
              <div className="col-lg-12 px-5">
                <input
                  type="number"
                  className="form-control form-control-lg"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>
            <div className="row p-3">
              <div className="col-lg-12 d-flex justify-content-center align-items-center">
                <Button
                  variant="outline-warning"
                  className="amount btn btn-lg mx-2 my-2"
                  onClick={() => setAmount(10)}
                >
                  10
                </Button>{" "}
                <Button
                  variant="outline-warning"
                  className="amount btn btn-lg mx-2 my-2"
                  onClick={() => setAmount(250)}
                >
                  250
                </Button>{" "}
                <Button
                  variant="outline-warning"
                  className="amount btn btn-lg mx-2 my-2"
                  onClick={() => setAmount(500)}
                >
                  500
                </Button>{" "}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <Button
                  variant="outline-warning"
                  className="amount btn btn-lg mx-2 my-2"
                  onClick={() => setAmount(1000)}
                >
                  1,000
                </Button>{" "}
                <Button
                  variant="outline-warning"
                  className="amount btn btn-lg mx-2 my-2"
                  onClick={() => setAmount(3000)}
                >
                  3,000
                </Button>{" "}
                <Button
                  variant="outline-warning"
                  className="amount btn btn-lg mx-2 my-2"
                  onClick={() => setAmount("")}
                >
                  Other
                </Button>{" "}
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-lg-6 my-3 px-5">
                <Button
                  variant="secondary"
                  className="w-100"
                  onClick={handlePrev}
                >
                  Back
                </Button>
              </div>
              {amount ? (
                <div className="col-lg-6 my-3 px-5">
                  <Button
                    variant="warning"
                    className="text-white w-100"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                </div>
              ) : (
                <div className="col-lg-6 my-3 px-5">
                  <Button
                    variant="warning"
                    className="text-white w-100"
                    disabled
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          </Modal.Body>
        ) : null}

        {count === 3 ? (
          <Modal.Body>
            <p className="lead fw-bold fs-6 text-center">
              Who will be donating today?
            </p>
            <div className="row pb-3">
              <div className="col">
                <TextField
                  variant="outlined"
                  label="First Name*"
                  size="small"
                />
              </div>
              <div className="col">
                <TextField variant="outlined" label="Last Name*" size="small" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 pb-3">
                <TextField
                  variant="outlined"
                  className="w-100"
                  label="Company"
                  size="small"
                />
              </div>
              <div className="col-lg-12 pb-1">
                <TextField
                  variant="outlined"
                  className="w-100"
                  label="Email Address*"
                  size="small"
                />
              </div>
              <div className="row">
                <div className="d-flex align-items-start col-lg-12 pt-1 px-0">
                  <p className="text-muted">
                    <span>
                      <Checkbox size="small" color="warning" />
                    </span>
                    Make an anonymous donation.
                    <Tooltip
                      title="Prevent your name from being displayed publicly."
                      placement="top"
                      TransitionComponent={Zoom}
                      arrow
                    >
                      <HelpOutline
                        style={{ paddingLeft: "2px" }}
                        color="disabled"
                        fontSize="small"
                      />
                    </Tooltip>
                  </p>
                </div>
                <div
                  className="d-flex align-items-start col-lg-12 pt-1 px-0"
                  style={{ marginTop: "-30px" }}
                >
                  <p className="text-muted">
                    <span>
                      <Checkbox size="small" color="warning" />
                    </span>
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-warning"
                      style={{ textDecoration: "none" }}
                    >
                      terms
                    </a>{" "}
                    and the{" "}
                    <a
                      href="#"
                      className="text-warning"
                      style={{ textDecoration: "none" }}
                    >
                      privacy policy
                    </a>
                  </p>
                </div>
              </div>
              <div className="paypal-button-container col-12 w-100">
                <PaypalCheckoutButton product={product} />
              </div>
            </div>
          </Modal.Body>
        ) : null}

        {/* <Modal.Footer>
          {count === 2 || count === 3 ? (
            <Button variant="secondary" onClick={handlePrev}>
              Back
            </Button>
          ) : null}

          {count <= 2 ? (
            <Button variant="warning" onClick={handleNext}>
              Next
            </Button>
          ) : null}
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

// ****** This data should come from the database ******* //
const fundraisers = [
  { label: "Project Aral" },
  { label: "Project Ngiti" },
  { label: "Project Linis" },
];
