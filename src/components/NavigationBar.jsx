import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faSignIn } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function NavigationBar() {
  const [email, setEmail] = useState("")
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    auth.signOut();

    navigate("/login");
  };
  return (
    <Navbar bg="warning" expand="lg" variant="light" className="py-3 fixed-top">
      <Container>
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center justify-content-between"
        >
          <img src={"images/site-icon-dark.png"} alt="Site Icon" />
          <span id="brand-name" className="mx-3">
            ULTRA Foundation
          </span>
        </NavLink>

        <div className="nav-btns order-lg-2">
          {email ? (
            <>
              <NavLink
                to="/login"
                className="btn position-relative"
                type="button"
                onClick={logout}
              >
                <FontAwesomeIcon icon={faSignOut} />
                <span className="nav-btn-label"> LOGOUT </span>
              </NavLink>
            </>
          ) : (
            <>
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
        </div>

        <Navbar.Toggle>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="navMenu">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item px-2 py-2">
              <NavLink to="/" className="nav-link text-dark">
                HOME
              </NavLink>
            </li>

            <li className="nav-item px-2 py-2">
              <NavLink to="/landingpage" className="nav-link text-dark">
                MISSION
              </NavLink>
            </li>

            <li className="nav-item px-2 py-2">
              <NavLink to="/donate" className="nav-link text-dark">
                JOIN US
              </NavLink>
            </li>

            <li className="nav-btns px-3 py-2">
              <NavLink to="/login" className="btn btn-dark text-warning px-4">
                LOGIN
              </NavLink>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
