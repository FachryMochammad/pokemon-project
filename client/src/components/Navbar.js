import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar fixed-top navbar-expand-md navbar-dark shadow"
      style={{
        backgroundImage: "transparent",
      }}
    >
      <div className="container">
        <p className="navbar-brand">
          <Link to="/">
            <span className="navbar-brand">
              <img
                src="https://www.pokepedia.fr/images/thumb/5/53/Logo_Pok%C3%A9mon.png/600px-Logo_Pok%C3%A9mon.png"
                alt="logo"
                height="50"
                className="logo-navbar"
              />
            </span>
          </Link>
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleMobileMenu"
          aria-controls="toggleMobileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="toggleMobileMenu">
          <ul className="navbar-nav ms-auto text-center">
            <li>
              <Link to="/mylist" style={{ textDecoration: "none" }}>
                <span className="nav-name" href="/mylist">
                  My Pokemon List
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
