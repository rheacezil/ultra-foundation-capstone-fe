import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faSignIn } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { auth } from "../firebase";
import * as actionUser from "../redux/actions/actionUser";

export default function NavHome() {
  const { logoutUser } = bindActionCreators(actionUser, useDispatch());
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    auth.signOut();
    logoutUser();
    navigate("/");
  };

  return (
    <Navbar bg="warning" expand="lg" className="bg-warning py-4 fixed-top">
      <Container>
        <NavLink
          to="/"
          className="navbar-brand d-fle align-items-center justify-content-between"
        >
          <img src="images/site-icon-dark.png" alt="site icon" />
          <span id="brand-name" className="mx-3">
            ULTRA Foundation
          </span>
        </NavLink>

        <div className="nav-btns order-lg-2">
          {localStorage.email ? (
            <>
              <NavLink
                to="/"
                className="btn position-relative"
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

        <Navbar.Toggle className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse>
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item px-2 py-2">
              <NavLink to="/home" className="nav-link text-dark">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink to="/donate" className="nav-link text-dark">
                Donate
              </NavLink>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
