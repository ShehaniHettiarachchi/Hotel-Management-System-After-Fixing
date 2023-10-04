import React from "react";

export default function () {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="home.html">
          {" "}
          <img
            src="../images/log.jpg"
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
            <li className="nav-item ">
              <a className="nav-link h6 ml-4 active" href="Home.jsp">
                Salary Details Adding<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item h6 ml-4">
              <a className="nav-link" href="StudentModule.jsp">
                Salary Details & Report{" "}
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <a href="#" className="btn btn-success my-2 my-sm-1" type="submit">
              Log Out
            </a>
            <a
              href="#"
              className="btn btn-primary my-2 my-sm-2 ml-3"
              type="submit">
              My Profile
            </a>
          </form>
        </div>
      </nav>
    </div>
  );
}
