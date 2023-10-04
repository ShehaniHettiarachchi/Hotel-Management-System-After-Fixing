/*import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const CusDash = () => {
  const [allCustomer, setAllCustomer] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/customer/")
      .then((res) => setAllCustomer(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <div class="row py-5 px-4">
        <div class="col-md-12 mx-auto">
          {/*!<-- Profile widget -->*/
         /* <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 cover">
              <div class="media align-items-end profile-head">
                <div class="profile mr-3">
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt="..."
                    width="130"
                    class="rounded mb-2 img-thumbnail"></img>
                  <a href="#" class="btn btn-outline-dark btn-sm btn-block">
                    Edit profile
                  </a>
                </div>
                <div class="media-body mb-5 text-white">
                  <h4 class="mt-0 mb-0">{setAllCustomer.name}</h4>
                  <p class="small mb-4">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    {setAllCustomer.address}
                  </p>
        <div className="row py-5 px-4"> 
        <div className="col-md-12 mx-auto">
        {/*!<-- Profile widget -->*/
         /*<div className="bg-white shadow rounded overflow-hidden">
          <div className="px-4 pt-0 pb-4 cover"> 
          <div className="media align-items-end profile-head">
           <div className="profile mr-3">
           <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" className="rounded mb-2 img-thumbnail"></img>
           <a href="#" className="btn btn-outline-dark btn-sm btn-block">Edit profile</a>
           </div> 
           <div className="media-body mb-5 text-white">
               
                <h4 className="mt-0 mb-0">{setAllCustomer.name}</h4>
                 <p className="small mb-4"> 
                 <i className="fas fa-map-marker-alt mr-2"></i>{setAllCustomer.address}</p>
                  </div>
                   </div>
                    </div> 
                    <div className="bg-light p-4 d-flex justify-content-end text-center">
                         <ul className="list-inline mb-0"> <li className="list-inline-item">
                              <h5 className="font-weight-bold mb-0 d-block">215</h5>
                              <small className="text-muted"> 
                              <i className="fas fa-image mr-1">
                                  </i>Photos</small> </li> 
                                  <li className="list-inline-item">
                                       <h5 className="font-weight-bold mb-0 d-block">745</h5>
                                       <small className="text-muted"> <i className="fas fa-user mr-1"></i>Followers</small> </li>
                                        <li className="list-inline-item"> <h5 className="font-weight-bold mb-0 d-block">340</h5>
                                        <small className="text-muted"> <i className="fas fa-user mr-1"></i>Following</small> </li>
                                         </ul> 
                                         </div> 
                                         <div className="px-4 py-3"> 
                                         
                                         {/*Customer function Links*/
      /*                                   <br></br>
      <div className="row">
        <h1 className="text-center">Customer DashBoard</h1>
      </div>

      <div className="row">
        <div className="col-md-12">
          <br></br>
          <div className="container">
            <div className="card-deck">
              <div className="card shadow">
                <img
                  src="../images/Booking.jpg"
                  className="card-img-top"
                  width="100px"
                  height="400px"></img>
                <div className="card-body">
                  <br></br>
                  <a
                    href="StudentLogin.jsp"
                    className="btn btn-success btn-lg btn-block text-center">
                    Make a Booking
                  </a>
                </div>
              </div>

              <div className="card shadow">
                <img
                  src="../images/edit.jpg"
                  className="card-img-top"
                  width="100px"
                  height="400px"></img>
                <div className="card-body">
                  <br></br>
                  <a
                    href="StudentLogin.jsp"
                    className="btn btn-success btn-lg btn-block text-center">
                    View & Edite Booking
                  </a>

                </div>
              </div>
            </div>
            <div class="bg-light p-4 d-flex justify-content-end text-center">
              <ul class="list-inline mb-0">
                {" "}
                <li class="list-inline-item">
                  <h5 class="font-weight-bold mb-0 d-block">215</h5>
                  <small class="text-muted">
                    <i class="fas fa-image mr-1"></i>Photos
                  </small>{" "}
                </li>
                <li class="list-inline-item">
                  <h5 class="font-weight-bold mb-0 d-block">745</h5>
                  <small class="text-muted">
                    {" "}
                    <i class="fas fa-user mr-1"></i>Followers
                  </small>{" "}
                </li>
                <li class="list-inline-item">
                  {" "}
                  <h5 class="font-weight-bold mb-0 d-block">340</h5>
                  <small class="text-muted">
                    {" "}
                    <i class="fas fa-user mr-1"></i>Following
                  </small>{" "}
                </li>
              </ul>
            </div>
            <div class="px-4 py-3">
              {/*Customer function Links*/
           /*   <br></br>
              <div className="row">
                <h1 className="text-center">Customer DashBoard</h1>
              </div>

              <div className="row">
                <div class="col-md-12">
                  <br></br>
                  <div class="container">
                    <div class="card-deck">
                      <div class="card shadow">
                        <img
                          src="../images/Booking.jpg"
                          class="card-img-top"
                          width="100px"
                          height="400px"></img>
                        <div class="card-body">
                          <br></br>
                          <a
                            href="StudentLogin.jsp"
                            class="btn btn-success btn-lg btn-block text-center">
                            Make a Booking
                          </a>
                        </div>
                      </div>

                      <div class="card shadow">
                        <img
                          src="../images/edit.jpg"
                          class="card-img-top"
                          width="100px"
                          height="400px"></img>
                        <div class="card-body">
                          <br></br>
                          <a
                            href="StudentLogin.jsp"
                            class="btn btn-success btn-lg btn-block text-center">
                            View & Edite Booking
                          </a>
                        </div>
                      </div>

                      <div class="card shadow">
                        <img
                          src="../images/report.jpg"
                          class="card-img-top"
                          width="100px"
                          height="400px"></img>
                        <div class="card-body">
                          <br></br>

                          <a
                            href="StudentLogin.jsp"
                            class="btn btn-success btn-lg btn-block text-center">
                            Get the monthly booking report{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CusDash;*/
