import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import logoImage from "../assets/nav-bar/header-logo.png";
import "../styles/custom-navbar.css";

function CustomNavbar() {
  const [isExpanded, setExpanded] = useState(false);
  const location = useLocation();

  const getLinkClassName = (path) => {
    return location.pathname === path ? "nav-link active-link" : "nav-link";
  };

  return (
    <div className={`container-fluid nav-bar ${isExpanded ? "expanded" : ""}`}>
      <Navbar
        collapseOnSelect
        expand="md"
        variant="dark"
        expanded={isExpanded}
        onToggle={(expanded) => setExpanded(expanded)}
      >
        <Navbar.Brand href="/">
          <img
            src={logoImage}
            width="30"
            height="30"
            className="d-inline-block align-top navbar-logo"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink
              to="/"
              className={getLinkClassName("/")}
              onClick={() => setExpanded(false)}
            >
              HOME
            </NavLink>
            <NavLink
              to="/echtgeld-casino"
              className={getLinkClassName("/echtgeld-casino")}
              onClick={() => setExpanded(false)}
            >
              ECHTGELD CASINO
            </NavLink>
            <NavLink
              to="/freispiele"
              className={getLinkClassName("/freispiele")}
              onClick={() => setExpanded(false)}
            >
              FREISPIELE
            </NavLink>
            <NavLink
              to="/casino-bonus"
              className={getLinkClassName("/casino-bonus")}
              onClick={() => setExpanded(false)}
            >
              CASINO BONUS
            </NavLink>
            <NavLink
              to="/spielautomaten"
              className={getLinkClassName("/spielautomaten")}
              onClick={() => setExpanded(false)}
            >
              SPIELAUTOMATEN
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
