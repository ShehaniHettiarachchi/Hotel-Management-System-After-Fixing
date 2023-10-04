import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="page-footer font-small blue pt-4 bg-dark text-white">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">About Us</h5>
              <p>
                This hotel was earlier a luxurious Colonial bungalow and it was
                re-constructed and added a breath-taking infinity swimming pool
                best in area, elegantly furnished rooms. Enjoy the location,
                great service, extra comfort, affordable prices when you book
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Address</h5>
              <ul className="list-unstyled">
                <li>Lathpandura</li>
                <li>Molkawa Road</li>
                <li>Palanda Junction</li>
                <li>Sri Lanka</li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.facebook.com/">
                    <img
                      src="../images/fb.jpg"
                      width="40px"
                      height="40px"
                      className="rounded"></img>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/">
                    <img
                      src="../images/gmail.jpg"
                      width="40px"
                      height="40px"
                      className="rounded mt-1"></img>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/">
                    <img
                      src="../images/instagram.jpg"
                      width="40px"
                      height="40px"
                      className="rounded mt-1"></img>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/">
                    <img
                      src="../images/twitter.jpg"
                      width="40px"
                      height="40px"
                      className="rounded mt-1"></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2022 Copyright :
          <a href="https://mdbootstrap.com/">
            {" "}
            peacockcorridorholidayhouse.com
          </a>
        </div>
      </footer>
    </div>
  );
}
