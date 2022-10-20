import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Modal } from "react-bootstrap";
import { auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import * as actionUser from "../../../redux/actions/actionUser";
import { bindActionCreators } from "redux";

export default function Signup() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Validation
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const navigate = useNavigate();
  const { registerUser } = bindActionCreators(actionUser, useDispatch());
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user || localStorage.email) {
      navigate("/");
    }
  });

  const checkIfValid = () => {
    let isValid = true;

    // Check if password is same with confirmPassword
    if (password !== confirmPassword || !password) {
      setInvalidPassword(true);
      isValid = false;
    } else {
      setInvalidPassword(false);
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkIfValid()) {
      registerUser({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      })
        .then((response) => {
          console.log(response, "response");
          setInvalidEmail(false);
          setShowModal(true);
        })
        .catch((error) => {
          setInvalidEmail(true);
          console.log(error, "error");
        });
    }
  };

  const closeRegistration = () => {
    setShowModal(false);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div id="signup" className="page-content d-flex align-items-center">
      <div className="container d-flex justify-content-center">
        <div className="row g-0">
          <div className="col-lg-6 d-none d-sm-block">
            <img
              src="images/signup.png"
              className="img-fluid w-100 h-100"
              alt="cover"
            />
          </div>
          <div className="col-lg-5 px-5 p-lg-5">
            <img
              src="images/site-icon-dark.png"
              className="mb-3 my-3"
              alt="site icon"
            />
            <span id="brand-name" className="fw-bold fs-3 pt-3">
              Ultra Foundation
            </span>

            <p className="lead">Be one of us!</p>
            <Form onSubmit={handleSubmit}>
              <div className="form-row d-flex row-reverse pb-1">
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    className="p-2"
                    type="text"
                    size="sm"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    autoComplete="firstname"
                    // isInvalid={invalidFirstName}
                  ></Form.Control>
                  {/* <Form.Control.Feedback type="invalid">
                    First Name already exist.
                  </Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    className="p-2 mx-1"
                    type="text"
                    size="sm"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    autoComplete="name"
                    // isInvalid={invalidLastName}
                  ></Form.Control>
                  {/* <Form.Control.Feedback type="invalid">
                    Last Name already exist.
                  </Form.Control.Feedback> */}
                </Form.Group>
              </div>
              <Form.Group className="mb-3" controlId="su-formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="p-2"
                  type="email"
                  size="sm"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={invalidEmail}
                  autoComplete="email"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  email already exist.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="su-formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="p-2"
                  type="password"
                  size="sm"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  isInvalid={invalidPassword}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  The password confirmation does not match
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  className="p-2"
                  type="password"
                  size="sm"
                  placeholder="Re-Enter Your Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="new-password"
                  isInvalid={invalidPassword}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  The password confirmation does not match
                </Form.Control.Feedback>
              </Form.Group>
              <div className="form-row">
                <div className="col-lg-12">
                  <Modal show={showModal}>
                    <Modal.Header>
                      <Modal.Title className="text-dark">
                        Congratulation!
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-dark">
                      Successful Registration!
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => closeRegistration()}
                      >
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <Button
                    variant="info"
                    type="submit"
                    className="btn btn-warning w-100"
                  >
                    Register
                  </Button>
                  <hr />
                </div>
              </div>

              <div className="form-row">
                <div className="col-lg-12">
                  <button className="btn btn-outline-warning text-dark w-100 mb-3">
                    <FontAwesomeIcon icon={faFacebook} />
                    Sign Up with Facebook
                  </button>
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-12">
                  <button className="btn btn-outline-warning text-dark w-100 mb-5">
                    <FontAwesomeIcon icon={faGoogle} /> Sign Up with Google
                  </button>
                </div>
              </div>

              <p>
                Been here before?{" "}
                <Link to="/login" className="text-muted">
                  Login.
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
