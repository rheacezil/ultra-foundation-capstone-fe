import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { auth } from "../firebase";
import Spinner from "react-spinkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faSignIn, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function NavigationBar() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    auth.signOut();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.removeItem("email");
      navigate("/login");
    }, 1000);
  };

  if (loading) {
    return (
      <div className="m-5">
        <Spinner name="ball-spin-fade-loader" color="blue" fadeIn="none" />
      </div>
    );
  }

  return (
    <Navbar bg="warning" expand="lg" variant="light" className="py-3 fixed-top">
      <Container>
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center justify-content-between border-0"
        >
          <img src={"images/site-icon-dark.png"} alt="Site Icon" />
          <span id="brand-name" className="mx-3">
            ULTRA Foundation
          </span>
        </NavLink>

        <Navbar.Toggle>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="navMenu">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item px-2 py-2">
              <NavLink
                to="/about"
                className="btn position-relative border-0"
                type="button"
              >
                <span className="nav-btn-label"> ABOUT</span>
              </NavLink>
            </li>

            <li className="nav-item px-2 py-2">
              {localStorage.email ? (
                <>
                  <NavLink
                    to="/"
                    className="btn position-relative border-0"
                    type="button"
                  >
                    <span className="nav-btn-label"> DASHBOARD</span>
                  </NavLink>

                  {localStorage.email === "admin@gmail.com" && (
                    <NavLink
                      to="/admin"
                      className="btn position-relative border-0"
                      type="button"
                    >
                      <span className="nav-btn-label"> ADMIN</span>
                    </NavLink>
                  )}

                  <NavLink
                    to="/login"
                    className="btn position-relative border-0"
                    type="button"
                    onClick={logout}
                  >
                    <FontAwesomeIcon icon={faSignOut} />
                    <span className="nav-btn-label"> LOGOUT</span>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/signup"
                    className="btn position-relative"
                    type="button"
                  >
                    {/* <FontAwesomeIcon icon={faEdit} /> */}
                    <span className="nav-btn-label"> JOIN US</span>
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="btn position-relative"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faSignIn} />
                    <span className="nav-btn-label"> LOGIN</span>
                  </NavLink>
                </>
              )}
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}