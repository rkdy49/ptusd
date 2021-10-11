import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import logo from "../writtenLogo.jpeg";

import "./Navbar.css";
import Products from "./pages/Products";

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
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            The <span> Ledger </span> Company
            {/* <i class='fab fa-typo3' /> */}
            {/* <img src={logo} style={{width:"200px",height:"75px",float:"right"}} alt="bit" /> */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/marketplace"
                // component={Products}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Marketplace
                {/* <Products /> */}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About us
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Connect Wallet</Button>}

          {/* <Switch>
            <Route path="/marketplace" component={Products}></Route>
          </Switch> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
