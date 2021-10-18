import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { BrowserRouter } from "react-router-dom";
import { NavLink, Link, Switch, Route, Redirect } from "react-router-dom";
// import Services from "./Services";
// import Products from "./Products";
// import SignUp from "./SignUp";

import logo from "../writtenLogo.jpeg";
import "./Navbar.css";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Services from "./pages/Services";

import SignUp from "./pages/SignUp";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            The <span> Ledger </span> Company
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>

            {/* ################other menu sections################ */}

            <li>
              <NavLink
                to="/marketplace"
                className="nav-item"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Marketplace
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About us
              </NavLink>
            </li>

            <li>
              {" "}
              {button && (
                <Button buttonStyle="btn--outline">Connect Wallet</Button>
              )}
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={Services} />
        <Route exact path="/marketplace" component={Products} />
        <Route exact path="/sign-up" component={SignUp} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default Navbar;
