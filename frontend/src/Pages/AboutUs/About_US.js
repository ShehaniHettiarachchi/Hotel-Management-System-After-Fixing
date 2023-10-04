import React from "react";

export default function About_US() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-1 col-0 ml-5"></div>

        <div className="col-lg-5 col-12 ml-3">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="text-center">About Us</h1>
          <br></br>
          <h4 className="ml-5 mt-5">
            This hotel was earlier a luxurious Colonial bungalow and it was
            re-constructed and added a breath-taking infinity swimming pool best
            in area, elegantly furnished rooms. Enjoy the location, great
            service, <br></br>
            extra comfort, affordable prices when you book.{" "}
          </h4>{" "}
          <br></br>
        </div>

        <div className="col-lg-5 col-12 ml-5 mt-0">
          <img
            src="../images/Aboutus.jpg"
            height="700px"
            width="100%"
            className="ml-4"></img>
        </div>
        <div className="col-lg-0 col-0"></div>
      </div>
    </div>
  );
}
