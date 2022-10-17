import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavLanding() {
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
                            <NavLink to="/about" className="nav-link text-dark">
                                ABOUT
                            </NavLink>
                        </li>

                        <li className="nav-item px-2 py-2">
                            <NavLink to="/signup" className="nav-link text-dark">
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