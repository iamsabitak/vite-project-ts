import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  UserData
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">
                  Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/customer">
                  Customer
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/memoizationexample">
                  MemoizationExample
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
