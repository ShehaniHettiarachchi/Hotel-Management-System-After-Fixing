import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("uID");
    localStorage.removeItem("email");
    localStorage.removeItem("permissionLevel");
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="home.html">
          {" "}
          <img
            src="../images/Logo.jpg"
            width="250px"
            height="65px"
            className="rounded"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item  h6 ml-4">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item h6 ml-4">
              <Link to="disres" className="nav-link">
                Resources
              </Link>
            </li>
            <li className="nav-item h6 ml-4">
              <Link to="/protfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item h6 ml-4">
              <Link to="/viewfeedback" className="nav-link">
                Feedback
              </Link>
            </li>

            <li className="nav-item h6 ml-4">
              <Link to="/aboutus" className="nav-link">
                About US
              </Link>
            </li>

            {localStorage.getItem("token") ? (
              <li className="nav-item h6 ml-4">
                <Link to="" className="nav-link" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item h6 ml-4">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item h6 ml-4">
                  <Link to="/signup" className="nav-link">
                    SignUp
                  </Link>
                </li>
              </>
            )}

            {localStorage.getItem("permissionLevel") === "SUPPLIER" ? (
              <li className="nav-item h6 ml-4">
                <Link to="/sprofile" className="nav-link">
                  My Profile
                </Link>
              </li>

            ) : (
              
              <></>
               )}

             {localStorage.getItem("permissionLevel") === "SUPPLIER" ? (
              <li className="nav-item h6 ml-4">
                <Link to="/sdashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>

            ) : (
              
              <></>
               )}




            {localStorage.getItem("permissionLevel") === "ADMIN" ? (
              <li className="nav-item h6 ml-4">
              <Link to="/adashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            ) : (
              <></>
            )}
            {localStorage.getItem("permissionLevel") === "CUSTOMER" ? (
              "CUSTOMER"
            ) : (
              <></>
            )}
            {localStorage.getItem("permissionLevel") === "MANAGER" ? (
              "MANAGER"
            ) : (
              <></>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
